from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point



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
    pointfield = models.PointField(geography=True, default=Point(0.0, 0.0))
    owner = models.ForeignKey('auth.User', related_name='location', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.land_mark} - {self.city} - {self.pointfield}"