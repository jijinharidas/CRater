# Generated by Django 3.1.2 on 2020-12-07 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('courseName', models.CharField(max_length=100)),
                ('courseLink', models.CharField(max_length=50, unique=True)),
                ('courseInstructor', models.CharField(max_length=30)),
                ('coursePlatform', models.CharField(max_length=30)),
                ('courseTotalVotes', models.IntegerField(default=0)),
                ('courseTotalVoters', models.IntegerField(default=0)),
            ],
        ),
    ]
