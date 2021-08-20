import { React, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { RenderSearchList } from '../components/RenderSearchList';
import axios from 'axios'
import { Image } from "@chakra-ui/react"

export default function list ({anime}) {
  const router = useRouter()
  return (
    <div>
      <Image
        borderRadius="full"
        boxSize="150px"
        src= {anime.Message.results[0].image_url}
        alt= {anime.Message.results[0].title}
      />
      <br></br>
      <div>
        <h1><u>Description</u>: {anime.Message.results[0].synopsis}</h1>
      </div>
      <br></br>
      <div>
        <h2><u>Rating: </u>{anime.Message.results[0].score}</h2>
      </div>
      <br></br>
      <div>
        <a href = {anime.Message.results[0].url}>Learn more about <b><u>{anime.Message.results[0].title}</u></b> </a>
      </div>
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

  console.log(searchResult.Message.results[0].url)

  return {
    props: {anime : searchResult}
  }
}