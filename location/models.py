from math import fabs
from sys import maxsize
from django.db import models
from django import forms

# Create your models here.

class Location_form(forms.Form):
    date_time = forms.DateTimeField()
    city = forms.CharField(label = 'City', max_length=200)
    post_code = forms.IntegerField(label='Post code', required=False)
    street = forms.CharField(max_length=100, required=False)
    house_number = forms.IntegerField(maxsize=10 , required=False)
    land_mark = forms.CharField(max_length=100, required=False)
    description = forms.TextInput(max_length=200, required=False)
    image = forms.ImageField(label='Photo', required=False)
    
  
      
    
      
    
    
    
    