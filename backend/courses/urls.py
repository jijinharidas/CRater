from django.urls import path
from . import api

urlpatterns = [
    path('', api.CoursesView.as_view()),
    path('rating', api.AddRating.as_view()),
]
