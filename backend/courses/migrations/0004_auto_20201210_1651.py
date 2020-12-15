# Generated by Django 3.1.2 on 2020-12-10 16:51

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('courses', '0003_peoplevote'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='courseLink',
            field=models.CharField(max_length=100, unique=True),
        ),
        migrations.AlterUniqueTogether(
            name='peoplevote',
            unique_together={('user', 'course')},
        ),
    ]
