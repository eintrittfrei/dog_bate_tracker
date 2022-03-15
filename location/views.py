from rest_framework import generics

from .models import Location
from .serializers import LocationSerializer, UserSerializer
from django.contrib.auth.models import User
from location.serializers import UserSerializer
from rest_framework import permissions

class LocationListView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    
    def perform_create(self, serializer):
      serializer.save(owner=self.request.user)
      
class LocationDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer