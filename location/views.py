from rest_framework import mixins
from rest_framework import generics

from .models import Location
from .serializers import LocationSerializer

class LocationListView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
      
class LocationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    