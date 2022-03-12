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
        

