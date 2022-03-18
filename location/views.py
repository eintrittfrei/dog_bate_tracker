from rest_framework import generics

from location.permissions import IsOwnerOrReadOnly

from .models import Location
from .serializers import LocationSerializer, UserSerializer
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import permissions

class LocationListView(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    
    def perform_create(self, serializer):
      serializer.save(owner=self.request.user)
      
class LocationDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly , 
                          IsOwnerOrReadOnly]
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer