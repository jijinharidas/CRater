from django.contrib import admin
from .models import Course, PeopleVote

# Register your models here.
admin.site.register(Course)
admin.site.register(PeopleVote)
