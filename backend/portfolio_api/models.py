from django.db import models

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('art', 'Art'),
        ('music', 'Music'),
        ('coding', 'Coding'),
        ('sailing', 'Sailing'),
    ]
    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    tab = models.CharField(max_length=50)  # tab inside a category page
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title
