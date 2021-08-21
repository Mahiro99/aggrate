from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import config


from jikanpy import Jikan
import tmdbsimple as tmdb

tmdb.API_KEY = config.tmdbAPIKey


app = FastAPI()
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


jikan = Jikan()

@app.get('/data/{searchData}')
async def root(searchData):
    smth = getBasicAnimeData(searchData)
    # smth = getBasicTmdbData()
    return {"Message" : smth}


def getBasicAnimeData(searchData):
    searchResult = jikan.search('anime', searchData.lower())

    return searchResult

def getBasicTmdbData():
    showSearch = tmdb.Search()
    response = showSearch.tv(query = 'naruto')
    return 

# Structure Search of just the name
    # --> an array of search.results
        #     mal_id	666
        #     url	"https://myanimelist.net/anime/666/JoJo_no_Kimyou_na_Bouken"
        #     image_url	"https://cdn.myanimelist.net/images/anime/1171/106036.jpg?s=09307fb4b030b5e6f578c6ba6cbf84ab"
        #     title	"JoJo no Kimyou na Bouken"
        #     airing	false
        #     synopsis	""
        #     type	"OVA"
        #     episodes	6
        #     score	7.36
        #     start_date	"1993-11-19T00:00:00+00:00"
        #     end_date	"1994-11-18T00:00:00+00:00"
        #     members	88143
        #     rated	"R"

# Structure review extension of an anime
    # --> array of anime.reviews
        #     mal_id	5805
        #     url	"https://myanimelist.net/reviews.php?id=5805"
        #     type	null
        #     helpful_count	799
        #     date	"2008-06-25T21:10:00+00:00"
        #     reviewer	
        #     url	"https://myanimelist.net/profile/theeggman85"
        #     image_url	"https://cdn.myanimelist.net/images/userimages/64068.jpg?t=1625014800"
        #     username	"theeggman85"
        #     episodes_seen	220
        #     scores	
            #     overall	7
            #     story	6
            #     animation	6
            #     sound	10
            #     character	6
            #     enjoyment	7
        #     content	""

# Structure of a whole anime object
    # mal_id	20
    # url	"https://myanimelist.net/anime/20/Naruto"
    # image_url	"https://cdn.myanimelist.net/images/anime/13/17405.jpg"
    # trailer_url	"https://www.youtube.com/embed/j2hiC9BmJlQ?enablejsapi=1&wmode=opaque&autoplay=1"
    # title	"Naruto"
    # title_english	"Naruto"
    # title_japanese	"ナルト"
    # title_synonyms	
        # 0	"NARUTO"
    # type	"TV"
    # source	"Manga"
    # episodes	220
    # status	"Finished Airing"
    # airing	false
    # aired	
        # from	"2002-10-03T00:00:00+00:00"
        # to	"2007-02-08T00:00:00+00:00"
        # prop	
            # from	
                # day	3
                # month	10
                # year	2002
            # to	
                # day	8
                # month	2
                # year	2007
        # string	"Oct 3, 2002 to Feb 8, 2007"
    # duration	"23 min per ep"
    # rating	"PG-13 - Teens 13 or older"
    # score	7.94
    # scored_by	1435934
    # rank	627
    # popularity	8
    # members	2177401
    # favorites	59317
    # synopsis	""
    # background	""
    # premiered	"Fall 2002"
    # broadcast	"Thursdays at 19:30 (JST)"
    # related	
        # Adaptation	
        # 0	
        # mal_id	11
        # type	"manga"
        # name	"Naruto"
        # url	"https://myanimelist.net/manga/11/Naruto"
        # Side story	
        # 0	
        # mal_id	442
        # type	"anime"
        # name	"Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!"
        # url	"https://myanimelist.net/anime/442/Naruto_Movie_1__Dai_Katsugeki_Yuki_Hime_Shinobu_Houjou_Dattebayo"
        # 1	
        # mal_id	594
        # type	"anime"
        # name	"Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!"
        # url	"https://myanimelist.net/anime/594/Naruto__Takigakure_no_Shitou_-_Ore_ga_Eiyuu_Dattebayo"
        # 2	
        # mal_id	761
        # type	"anime"
        # name	"Naruto: Akaki Yotsuba no Clover wo Sagase"
        # url	"https://myanimelist.net/anime/761/Naruto__Akaki_Yotsuba_no_Clover_wo_Sagase"
        # 3	
        # mal_id	936
        # type	"anime"
        # name	"Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!"
        # url	"https://myanimelist.net/anime/936/Naruto_Movie_2__Dai_Gekitotsu_Maboroshi_no_Chiteiiseki_Dattebayo"
        # 4	
        # mal_id	1074
        # type	"anime"
        # name	"Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!"
        # url	"https://myanimelist.net/anime/1074/Naruto_Narutimate_Hero_3__Tsuini_Gekitotsu_Jounin_vs_Genin_Musabetsu_Dairansen_Taikai_Kaisai"
        # 5	
        # mal_id	2144
        # type	"anime"
        # name	"Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo!"
        # url	"https://myanimelist.net/anime/2144/Naruto_Movie_3__Dai_Koufun_Mikazuki_Jima_no_Animaru_Panikku_Dattebayo"
        # 6	
        # mal_id	7367
        # type	"anime"
        # name	"Naruto: The Cross Roads"
        # url	"https://myanimelist.net/anime/7367/Naruto__The_Cross_Roads"
        # Sequel	
        # 0	
        # mal_id	1735
        # type	"anime"
        # name	"Naruto: Shippuuden"
        # url	"https://myanimelist.net/anime/1735/Naruto__Shippuuden"
    # producers	
        # 0	
        # mal_id	16
        # type	"anime"
        # name	"TV Tokyo"
        # url	"https://myanimelist.net/anime/producer/16/TV_Tokyo"
        # 1	
        # mal_id	17
        # type	"anime"
        # name	"Aniplex"
        # url	"https://myanimelist.net/anime/producer/17/Aniplex"
        # 2	
        # mal_id	1365
        # type	"anime"
        # name	"Shueisha"
        # url	"https://myanimelist.net/anime/producer/1365/Shueisha"
    # licensors	
        # 0	
        # mal_id	119
        # type	"anime"
        # name	"VIZ Media"
        # url	"https://myanimelist.net/anime/producer/119/VIZ_Media"
    # studios	
        # 0	
        # mal_id	1
        # type	"anime"
        # name	"Studio Pierrot"
        # url	"https://myanimelist.net/anime/producer/1/Studio_Pierrot"
    # genres	
        # 0	
        # mal_id	1
        # type	"anime"
        # name	"Action"
        # url	"https://myanimelist.net/anime/genre/1/Action"
        # 1	
        # mal_id	2
        # type	"anime"
        # name	"Adventure"
        # url	"https://myanimelist.net/anime/genre/2/Adventure"
        # 2	
        # mal_id	4
        # type	"anime"
        # name	"Comedy"
        # url	"https://myanimelist.net/anime/genre/4/Comedy"
        # 3	
        # mal_id	31
        # type	"anime"
        # name	"Super Power"
        # url	"https://myanimelist.net/anime/genre/31/Super_Power"
        # 4	
        # mal_id	17
        # type	"anime"
        # name	"Martial Arts"
        # url	"https://myanimelist.net/anime/genre/17/Martial_Arts"
        # 5	
        # mal_id	27
        # type	"anime"
        # name	"Shounen"
        # url	"https://myanimelist.net/anime/genre/27/Shounen"
    # opening_themes	
        # 0	
        # 1	
        # 2	
        # 3
        # 4
        # 5	
        # 6	
        # 7	
        # 8	
    # ending_themes	
        # 0
        # 1
        # 2
        # 3
        # 4
        # 5
        # 6
        # 7
        # 8
        # 9
        # 10
        # 11
        # 12
        # 13
        # 14
    # jikan_url	"https://api.jikan.moe/v3/anime/20"
