import { React, useRef } from 'react'
import { Input } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
  } from "@chakra-ui/react"
import { FormControl } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { FcSearch } from "react-icons/fc";
import { FaImdb } from "react-icons/fa";
import { useFormik } from 'formik';
import { useRouter } from 'next/router'
import Image from 'next/image'

export const Search = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const router = useRouter(0)
	const openingField = useRef()

	const handleSearch = useFormik({
		initialValues: {
			search: ''
		},
		onSubmit: values => {
			return (
				router.push({
					pathname: '/shows',
					query: {
						tag: props.category,
						search : values.search
					},
				  })
			)
		},
	});

	const handleEnterOnSubmit = (event) =>{
		if(event.key == 'Enter'){
			console.log(event)
			handleSearch.handleSubmit()
		}
	}

	return (
	  <>
		<Button 
			leftIcon={props.category == 'tmdb' ? <Image src = '/tmdb.svg' width='16' height ='16'/> : <Image src = '/mal.png' width='16' height ='16' /> } 
			colorScheme="blue" 
			variant="ghost" 
			onClick={onOpen}>Search
		</Button>
		<Drawer
		  isOpen={isOpen}
		  placement="bottom"
		  onClose={onClose}
		  initialFocusRef={openingField}
		>
		  <DrawerOverlay />
		  <DrawerContent>
			<DrawerCloseButton />
			<DrawerHeader>Search for your {props.category == 'tmdb' ? 'favourite Movies/TV Shows' : 'favourite Animes'}</DrawerHeader>
  
			<DrawerBody>
				<FormControl onKeyPress = {handleEnterOnSubmit}>
					<Input 
						id="search"
						placeholder={"Search " + props.category + ' ...'} 
						ref={openingField}
						onChange={handleSearch.handleChange}
						value={handleSearch.values.search}
					/>
				</FormControl>
			</DrawerBody>
			<DrawerFooter>
			  <Button variant="outline" mr={3} onClick={onClose}>
				Cancel
			  </Button>
			  <Button type="submit" colorScheme="blue" onClick={handleSearch.handleSubmit}>Search</Button>
			</DrawerFooter>
		  </DrawerContent>
		</Drawer>
	  </>
	)
}

