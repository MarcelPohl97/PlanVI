from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="apiOverview"),
    path('scrapeanime/', views.scrapeAnime, name="scrapeanime")
]