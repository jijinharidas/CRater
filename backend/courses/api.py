from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics
from users.api import UserAPI


# Serializer
from .serializers import CourseSerializer, PeopleVoteSerializer

# Models
from .models import Course, PeopleVote

# Completed
class CoursesView(APIView):
    def get(self, request):
        course = Course.objects.all().order_by('courseName')
        serializer = CourseSerializer(course, many=True)
        print(serializer)
        return Response(serializer.data)

    def post(self, request):
        return Response({'status': False, 'message': 'Method not Allowed'})


class AddRating(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PeopleVoteSerializer

    def get(self, request):
        return Response({'status': False, 'message': 'Method not Allowed'})

    def post(self, request,  *args, **kwargs):
        print(request.user.id)
        serializer = self.get_serializer(data={'user':request.user.id, 'course': int(request.data['course']), 'stars': int(request.data['stars'])})
        # serializer.user = user
        serializer.stars = 5
        if not serializer.is_valid():
            return Response({'status': False, 'message': 'Rating already done'})
        rating = serializer.save()

        return Response({'status': True, 'message': 'Rating Done'})


    def get_object(self):
        return self.request.user
