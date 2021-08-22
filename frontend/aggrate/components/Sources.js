// imdb, mal, tmdb, rt, mdl, metacritic
import { React, useState, useEffect, useRef } from 'react'
import axios from 'axios'

export const Sources = (props) => {

	const sources = ['mal', 'tmdb']

	const handleSubmission =  (valueSource, data) => {
		props.handler(valueSource, data)
	}
	
	const fetchData = async (tag) =>{
			var searchResult;
		  try {
				const res = await axios.get(`http://127.0.0.1:8000/data/${tag}/${props.search}`)
				searchResult = res.data
		  } catch (error) {
				console.log(error)
		  }
		handleSubmission(tag, searchResult)
	}

	const handleChange = (e) =>{
		if(e.target.checked){
			fetchData(e.target.value)
		}
		else{
			handleSubmission(props.tag, null)
		}
	}

	return (
		<div>
				<div id="checkbox-source-group"><b>Source Tab</b></div>
				<div role="group" aria-labelledby="checkbox-source-group">
					{	
						sources.map(name => {
							if(name != props.tag){
								return(
									<div key={name}>
										<label>
											<input type="checkbox" name="checked" value = {name} onChange={e => {handleChange(e)}}/>
											{name}
										</label>
									</div>
								)
							}
						})
					}
				</div>

		</div>
	);
}

{/* 
Multiple checkboxes with the same name attribute, but different
value attributes will be considered a "checkbox group". Formik will automagically
bind the checked values to a single array for your benefit. All the add and remove
logic will be taken care of for you.
*/}

