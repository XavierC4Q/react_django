from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import MyUser

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = MyUser
        fields = ('username', 'email', 'state', 'name')

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = MyUser
        fields = ('username', 'email', 'state')
