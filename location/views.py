# from telnetlib import STATUS
# from urllib import response
# from django.shortcuts import render
# from django.http import HttpResponseRedirect
# from .models import Location_form

# Create your views here.

# class BateListView():
  
#   def get(self, request_):
    
#       location_form = Location_form.Objects.all()
      
    

# def get_location(request):
#     if request.method == 'POST':
#       form = Location_form(request.POST)
#       if form.is_valid():
#         data = {
#           'date_time' : form.cleaned_data['date_time'],
#           'city' : form.cleaned_data['city'],
#           'post_code' : form.cleaned_data['post_code'],
#           'street' : form.cleaned_data['street'],
#           'house_number' : form.cleaned_data['house_number'],
#           'land_mark' : form.cleaned_data['land_mark'],
#           'description' : form.cleaned_data['description'],
#           'image' : form.cleaned_data['image'],
#         }
#         form.save()
#         #process data here 
#         return HttpResponseRedirect('/Thanks!/')
#       else :
#             form = location_form()
            
#       return render(request, 'location.html', {'form': form})
        


