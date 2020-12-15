from .models import Course, PeopleVote
from rest_framework import serializers


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'


class PeopleVoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = (PeopleVote)
        fields = '__all__'