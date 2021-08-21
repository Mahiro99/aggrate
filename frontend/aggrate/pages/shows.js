import { React, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { RenderSearchList } from '../components/RenderSearchList';
import axios from 'axios'
import { Image } from "@chakra-ui/react"

export default function list ({anime}) {
  return (
    <div>
      {
        anime.map(res => {
          {console.log(res)}
            return(
              // Each child in a list should have a unique "key" prop
              <Image
                borderRadius="full"
                boxSize="150px"
                src= {res.image_url}
                alt= {res.title}
              />
            )
        })
      }
    </div>
  )


}

export async function getServerSideProps(context) {
  const { query } = context
  var searchResult;
  try {
    const res = await axios.get(`http://127.0.0.1:8000/data/${query.search}`)
    searchResult = res.data
  } catch (error) {
    console.log(error)
  }

  return {
    props: {anime : searchResult.Message.results}
  }
}

{/*  */}