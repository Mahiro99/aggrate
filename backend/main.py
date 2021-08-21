from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import config


from jikanpy import Jikan
import tmdbsimple as tmdb

tmdb.API_KEY = config.tmdbAPIKey

app = FastAPI()
jikan = Jikan()


origins = [
    "http://localhost:3000",
    "localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get('/data/mal/{searchData}')
async def getBasicAnimeData(searchData):
    searchResult = jikan.search('anime', searchData.lower())
    return searchResult

@app.get('/data/tmdb/{searchData}')
async def getBasicTmdbData(searchData):
    showSearch = tmdb.Search()
    response = showSearch.tv(query = searchData)
    return response


