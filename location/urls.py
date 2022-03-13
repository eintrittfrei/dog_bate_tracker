from django.urls import path 
from .views import LocationListView 
from .views import LocationDetailView

urlpatterns = [
  path('', LocationListView.as_view()),
  path('<int:pk>/', LocationDetailView.as_view()),
]