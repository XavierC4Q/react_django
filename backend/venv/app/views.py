from django.shortcuts import render
from .models import MyUser, Mood
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import *
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

class MyUserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = MyUserSerializer
    queryset = MyUser.objects.all()

class MoodViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = MoodSerializer
    queryset = Mood.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('user_id',)
