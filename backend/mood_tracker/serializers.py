from django.contrib.auth.models import User
from .models import Mood
from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'last_login')

class MoodSerializer(serializers.Serializer):
    class Meta:
        model = Mood
        fields = '__all__'
