from django.db import models

# Create your models here.

class country(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    continent = models.CharField(max_length=120)

    def _str_(self):
        return self.title
