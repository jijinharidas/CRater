from django.db import models
from django.contrib.auth.models import User
# Create your models here.


# class UserProfile(models.Model):
#     username = models.OneToOneField(
#         User, on_delete=models.CASCADE, primary_key=True)
#     firstName = models.CharField(max_length=30)
#     lastName = models.CharField(max_length=30)

#     def __str__(self):
#         return '@{0}'.format(self.username)
