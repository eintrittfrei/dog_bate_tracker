from datetime import datetime, timedelta
from django.http import Http404

from location.permissions import IsOwnerOrReadOnly

from .models import Location
from .serializers import LocationSerializer, UserSerializer
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
      
class LocationListView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, _request):
        locations = Location.objects.all()
        serialized_locations = LocationSerializer(locations, many=True)
        return Response(serialized_locations.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        request.data['owner'] = request.user.id
        serializer = LocationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      
class LocationDetailView(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_object(self, pk):
        try:
            return Location.objects.get(pk=pk)
        except Location.DoesNotExist:
            raise Http404.with_traceback
    
    def get(self, _request, pk, format=None):
        location = self.get_object(pk)
        serializer = LocationSerializer(location)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        location = self.get_object(pk=pk)
        serializer = LocationSerializer(location, data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        location = self.get_object(pk)
        location.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserList(generics.ListAPIView):
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserDetail(generics.RetrieveAPIView):
    permissions=[permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        try: 
          user_to_log_in = User.objects.get(email=email)
        except User.DoesNotExist:
          raise PermissionDenied(detail='Invalid Credentials')
        if not user_to_log_in.check_password(password):
          raise PermissionDenied(detail='Invalid Credentials')
        
        dt = datetime.now() + timedelta(days=7)