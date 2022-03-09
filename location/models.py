from django.db import models


# Create your models here.

class Location(models.Model):
    date_time = models.DateTimeField(default=None)
    city = models.CharField(max_length=200, default=None)
    post_code = models.IntegerField(default=None, blank=True)
    street = models.CharField(max_length=100, default=None, blank=True)
    house_number = models.IntegerField(default=None, blank=True)
    land_mark = models.CharField(max_length=100, default=None, blank=True)
    description = models.CharField(max_length=400, default=None)
    image = models.CharField(max_length=100, default=None, blank=True)
    
    def __str__(self):
        return f"{self.land_mark} - {self.city}"
    
    
    
    
  
      
    
      
    
    
    
    