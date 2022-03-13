from http.client import NOT_FOUND
from re import L
from urllib import response
from xml.dom import NotFoundErr
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

from .models import Location
from .serializers import LocationSerializer

class LocationListView(APIView):

    def get(self, _request):
        location = Location.objects.all()
        serialized_location = LocationSerializer(location, many=True)
        return Response(serialized_location.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        location_to_add = LocationSerializer(data=request.data)
        if location_to_add.is_valid():
            location_to_add.save()
            return Response(location_to_add.data, status=status.HTTP_201_CREATED)
        return Response(location_to_add.errors, status=status.HTTP_400_BAD_REQUEST)
      
class LocationDetailView(APIView):
    
    def get_object(self, pk):
      try:
        return Location.objects.get(pk=pk)
      except Location.DoesNotExist:
        raise Http404
      
    def get(self, _request, pk, format=None):
      location_one = self.get_object(pk)
      serializer = LocationSerializer(location_one)
      return Response(serializer.data)