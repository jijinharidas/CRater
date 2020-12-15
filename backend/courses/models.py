from django.db import models
from users.models import User
# Create your models here.


class Course(models.Model):
    courseID = models.AutoField(primary_key=True)
    courseName = models.CharField(max_length=100)
    courseLink = models.CharField(max_length=100, unique=True)
    courseInstructor = models.CharField(max_length=30)
    coursePlatform = models.CharField(max_length=30)
    courseTotalVotes = models.IntegerField(default=0)
    courseTotalVoters = models.IntegerField(default=0)
    courseCoverPic = models.ImageField(upload_to='images', default='images/thumbnail.jpg')
    
    @property
    def courseAverageRating(self):
        if(self.courseTotalVotes == 0 or self.courseTotalVoters == 0):
            return 0
        else:
            return round(self.courseTotalVotes/self.courseTotalVoters, 1)

    def __str__(self):
        courseName = self.courseName
        courseInstructor = self.courseInstructor
        if(len(courseName) >= 30):
            courseName = '{0}...'.format(self.courseName[:30])
        if(len(courseInstructor) >= 15):
            courseInstructor = '{0}...'.format(self.courseInstructor[:15])
        return '{0} by {1} [{2}]'.format(courseName, courseInstructor, self.courseAverageRating)


class PeopleVote(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    stars = models.IntegerField(
        choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)]
    )

    class Meta:
        unique_together = (("user", "course"),)

    def __str__(self):
        return '{0} voted {1} {2} rating'.format(self.user.username, self.course.courseName[:10], self.stars)

    
    def save(self, *args, **kwargs):
        if self.course is not None:
            courseobj = Course.objects.get(courseID=self.course.courseID)
            courseobj.courseTotalVoters += 1
            courseobj.courseTotalVotes += self.stars
            courseobj.save()
            print(courseobj)
            super(PeopleVote, self).save(*args, **kwargs)
