from django.db import models

# Create your models here.

class TodoItem(models.Model):
    text = models.CharField(max_length=200)
    create_datum = models.DateField()