import { React, useState, useEffect } from 'react'
import { Image } from "@chakra-ui/react"
import { Sources } from './Sources'
export const RenderSearchList = (props) => {
	
	// right way to get image from TMDB is using the config api to get base link and size variations and img link can be grabbed from simple search
	const tmdbImageFormat = "https://image.tmdb.org/t/p/w185/"
	const [source, setSource] =  useState(props.tag) 
	const [newData, setNewData] =  useState(props.data) 

	
	const findImage = (data) => {
		if(data.poster_path == null){
			return tmdbImageFormat + data.backdrop_path
		}
		else{
			return tmdbImageFormat + data.poster_path
		}
	}
	
	const handleShowDiffSources = async (source, data) => {
		console.log(source, "source")
		console.log(data, "data in render")
		setSource(source)
		if(data != null)
			setNewData(data.results)
	}
	
	const renderDesc = () => {

		if(source== props.tag){
			console.log("YAY!")
			return (
				props.data.slice(0, props.numberOfitemsShown).map(eachData => (
				
					<div key={eachData.mal_id}>
						<div>Title: {eachData.title}</div>
						<div>Type: {eachData.type}</div>
						<div>Watchers: {eachData.members}</div>
						<Image src={eachData.image_url} />
					</div>
				
				))
			)	
		}
		else{
			console.log("NAY!")
			return (
				newData.slice(0, props.numberOfitemsShown).map(eachData => (
					<div key={eachData.id}>
						<div>Title: {eachData.name}</div>
						<div>Votes: {eachData.vote_count}</div>
						<Image src={findImage(eachData)} />
					</div>
				))
			)
		}
		
	}
	// ideally i should send the data back from backend properly formatted, so not to do this
	return (
		<div>
			<div>
				<Sources handler = {handleShowDiffSources} tag = {props.tag} search = {props.search}/>
				<br></br>
			</div>
			{	
			renderDesc()
			}
		</div>
	);
}
