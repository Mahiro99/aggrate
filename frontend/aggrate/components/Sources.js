// imdb, mal, tmdb, rt, mdl, metacritic
import { React, useState, useEffect } from 'react'
import { Image } from "@chakra-ui/react"
import { Formik, Field, Form } from 'formik';
import { Button } from "@chakra-ui/react"

export const Sources = (props) => {

	const handleSubmission = (valueSource) => {
		props.handler(valueSource)
	}

	return (
		<div>
			<Formik
				initialValues={
					{
						checked: [],
					}
				}
				onSubmit={async (values) => {
					handleSubmission(values)
				}}
    	>
				{() => (
					<Form>
						{/* 
							Multiple checkboxes with the same name attribute, but different
							value attributes will be considered a "checkbox group". Formik will automagically
							bind the checked values to a single array for your benefit. All the add and remove
							logic will be taken care of for you.
						*/}
						<div id="checkbox-source-group"><b>Source Tab</b></div>
						<div role="group" aria-labelledby="checkbox-source-group">
							<label>
								<Field type="checkbox" name="checked" value="mal" />
								MAL
							</label>
							<label>
								<Field type="checkbox" name="checked" value="tmdb" />
								TMDB
							</label>
							<label>
								<Field type="checkbox" name="checked" value="rt" />
								RT
							</label>
						</div>

						<Button type="submit">Submit</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
