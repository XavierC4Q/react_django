# Generated by Django 2.1.7 on 2019-02-28 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mood',
            name='body',
            field=models.CharField(default='', max_length=500),
        ),
    ]
