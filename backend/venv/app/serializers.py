from .models import MyUser, Mood
from rest_framework import serializers

class MyUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = ('username', 'name', 'state', 'email')

class MoodSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mood
        fields = '__all__'