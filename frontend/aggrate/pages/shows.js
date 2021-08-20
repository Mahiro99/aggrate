import { React, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { RenderSearchList } from '../components/RenderSearchList';
import axios from 'axios'

export default function list ({anime}) {
  const router = useRouter()
  return (
    <a href= {anime.Message.results[0].url}>Learn more about <b><u>{router.query.search}</u></b></a>
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