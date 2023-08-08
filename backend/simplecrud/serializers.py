from rest_framework import serializers
from .models import country

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = country
        fields = ('id', 'title', 'description', 'continent')