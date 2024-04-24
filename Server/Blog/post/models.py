from django.db import models
from datetime import datetime
# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()    
    published_date = models.DateField(default= datetime.now())