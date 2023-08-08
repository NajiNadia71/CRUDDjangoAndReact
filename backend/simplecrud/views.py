from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CountrySerializer
from .models import country
# Create your views here.
class CountryView(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    queryset = country.objects.all()
