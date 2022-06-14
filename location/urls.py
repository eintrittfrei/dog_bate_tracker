from django.urls import path 
from .views import LocationListView, LoginView 
from .views import LocationDetailView
from .views import UserList
from .views import UserDetail

urlpatterns = [
  path('', LocationListView.as_view()),
  path('<int:pk>/', LocationDetailView.as_view()),
  path('users/', UserList.as_view()),
  path('users/<int:pk>/', UserDetail.as_view()),
  path('login/', LoginView.as_view())
  
]

