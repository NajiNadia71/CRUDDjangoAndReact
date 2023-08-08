from django.contrib import admin

# Register your models here.
from .models import country
class countryAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'continent')

# Register your models here.

admin.site.register(country, countryAdmin)