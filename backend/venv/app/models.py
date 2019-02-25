from django.db import models
from django.contrib.auth.models import AbstractUser

class MyUser(AbstractUser):
    state = models.CharField(max_length=30, default='')
    name = models.CharField(max_length=150, blank=True, null=True)

    def __str__(self):
        return 'Username: {username}'.format(username=self.username)

class Mood(models.Model):
    user_id = models.ForeignKey(MyUser, related_name='user_id', on_delete=models.CASCADE)
    title = models.CharField(max_length=50, default='')
    primary_mood = models.CharField(max_length=50, blank=True, null=True)
    secondary_mood = models.CharField(max_length=50, blank=True, null=True)
    created = models.DateTimeField(auto_created=True)

    def __str__(self):
        return 'Mood: id = {id}, user = {user_id}'.format(id=self.id, user_id=self.user_id)