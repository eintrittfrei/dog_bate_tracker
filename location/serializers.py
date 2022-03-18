from rest_framework import serializers

from .models import Location
from django.contrib.auth.models import User

class LocationSerializer(serializers.ModelSerializer):
      owner = serializers.ReadOnlyField(source='owner.username')
      class Meta: 
          model = Location
          fields = '__all__'
          
class UserSerializer(serializers.ModelSerializer):
      location = serializers.PrimaryKeyRelatedField(many = True, queryset=Location.objects.all())
      
      class Meta:
          model = User
          fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', ]

