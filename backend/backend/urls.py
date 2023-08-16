from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from simplecrud import views


router = routers.DefaultRouter()
router.register(r'Countrys', views.CountryView, 'country')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
