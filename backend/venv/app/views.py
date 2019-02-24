from django.shortcuts import render
from .models import MyUser, Mood
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from rest_framework import viewsets

class MyUserViewSet(viewsets.ModelViewSet):
    serializer_class = MyUserSerializer
    queryset = MyUser.objects.all()

class MoodViewSet(viewsets.ModelViewSet):
    serializer_class = MoodSerializer
    queryset = Mood.objects.all()
