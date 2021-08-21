import { React, useState, useEffect } from 'react'
import { Image } from "@chakra-ui/react"
import { Sources } from './Sources'
export const RenderSearchList = (props) => {
	
	const [showMultiSource, setShowMultiSource] = useState([])
	// right way to get image from TMDB is using the config api to get base link and size variations and img link can be grabbed from simple search
	const tmdbImageFormat = "https://image.tmdb.org/t/p/w185/"
	console.log(props)

	
	const findImage = (data) => {
		if(data.poster_path == null){
			return tmdbImageFormat + data.backdrop_path
		}
		else{
			return tmdbImageFormat + data.poster_path
		}
	}
	
	const handleShowDiffSources = (source) => {
		setShowMultiSource(source.checked)
	}
		
	// ideally i should send the data back from backend properly formatted, so not to do this
	return (
		<div>
			<div>
				<Sources handler = {handleShowDiffSources}/>
				{
					showMultiSource.map(source => 
						(
							<div><u>{source}</u></div>
						)
						
					)
				}
				<br></br>
			</div>
			{
				props.data.slice(0, props.numberOfitemsShown).map(eachData => {
					if(props.tag == 'mal'){
						return (
							<div key={eachData.mal_id}>
								<div>Title: {eachData.title}</div>
								<div>Type: {eachData.type}</div>
								<div>Watchers: {eachData.members}</div>
								<Image src={eachData.image_url} />
							</div>
						)
					}
					else if(props.tag == 'tmdb'){
						return (
							<div key={eachData.id}>
								<div>Title: {eachData.name}</div>
								<div>Total Votes: {eachData.vote_count}</div>
								<Image src={findImage(eachData)} />
							</div>
						)
					}
				})
			}
		</div>
	);
}
