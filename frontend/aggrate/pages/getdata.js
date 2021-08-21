import { React, useState} from 'react'
import axios from 'axios'
import { Button } from "@chakra-ui/react"
import { RenderSearchList } from '../components/RenderSearchList'




export default function getdata ({data, tag}) {
  const [numberOfitemsShown, setNumberOfitemsShown] = useState(3)

  const showMore = () => {
    setNumberOfitemsShown(numberOfitemsShown+3)
  }

  return (
    <div>
      <RenderSearchList data = {data} tag = {tag} numberOfitemsShown={numberOfitemsShown} />
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

export async function getServerSideProps(context) {
  const { query } = context
  var searchResult;
  try {
    const res = await axios.get(`http://127.0.0.1:8000/data/${query.tag}/${query.search}`)
    searchResult = res.data
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      data : searchResult.results,
      tag: query.tag
    }
  }
}

