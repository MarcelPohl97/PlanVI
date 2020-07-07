from django.shortcuts import render
from django.http import JsonResponse
from bs4 import BeautifulSoup
import requests
import json

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'scrape':'/scrapeAnime/'
    }

    return Response(api_urls)

@api_view(['POST'])
def scrapeAnime(request):
    try:
        #Get POST data from Javascript frontend client
        URL = request.data.get("title")
        headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'}
        #Send Request to URL
        page = requests.get(URL, headers=headers)#serienstream.sx
        omdbapi = requests.get("http://www.omdbapi.com/?apikey=75046c65&t=arrow").json()#omdbapi to get rating
        rating = omdbapi["imdbRating"]#get rating from json response
        #Scrape serienstream.sx
        soup = BeautifulSoup(page.text, "html.parser")
        title = soup.find("div", class_="series-title").span.get_text()#get the title
        genre = soup.find("a", class_="genreButton").get_text()#get genre
        season_episode = soup.find_all("a", class_="active")#get season and episode both of them are a tags and contain the active tag
        season = season_episode[0].get_text() # Season comes before Episode
        episode = season_episode[1].get_text() # Episode comes after Season
        #add every scraped/fetched data to an array 
        data = {
            "title" : title,
            "genre" : genre,
            "season" : season,
            "episode" : episode,
            "rating" : rating
        }
    except:
        data = {
            "title" : title,
            "genre" : genre,
            "season" : season,
            "episode" : "",
            "rating" : rating
        }
    #return that data to frontend javascript
    return Response(data)
