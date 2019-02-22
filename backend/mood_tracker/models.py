from django.db import models

class Mood(models.Model):
    created = models.DateTimeField(auto_created=True, editable=False)
    title = models.CharField(max_length=50, blank=False, null=True)
    primary_mood = models.CharField(max_length=15, blank=False, null=True)
    secondary_mood = models.CharField(max_length=15, blank=False, null=True)

    class Meta:
        ordering = ('-created',)
