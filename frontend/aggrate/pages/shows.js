import { React, useState} from 'react'
import axios from 'axios'
import { Image } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"



export default function list ({anime, tag}) {
  const [numberOfitemsShown, setNumberOfitemsShown] = useState(3)
  const [title, setTitle] = useState('')

  const showMore = () => {
    setNumberOfitemsShown(numberOfitemsShown+3)
  }
  const tmdbImageFormat = "https://image.tmdb.org/t/p/w500/"

  // Warning: Each child in a list should have a unique "key" prop.
  // what if total number of item is less than 3?
  const itemsToShow = 
    anime.slice(0, numberOfitemsShown).map(eachAnime => {
      return (
        <Image
          borderRadius="full"
          boxSize="150px"
          src= {tag == 'mal' ?  eachAnime.image_url : tmdbImageFormat + eachAnime.poster_path}
          alt= 'poster images'
        />
      )
    });

  return (
    <div>
      {itemsToShow}
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={showMore}
      >
        Expand
      </Button>
    </div>
  )
}

// right way to get image from TMDB is using the config api to get base link and size variations and img link can be grabbed from simple search

export async function getServerSideProps(context) {
  const { query, req, res } = context
  var searchResult;
  try {
    const res = await axios.get(`http://127.0.0.1:8000/data/${query.tag}/${query.search}`)
    searchResult = res.data
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      anime : searchResult.results,
      tag: query.tag
    }
  }
}

