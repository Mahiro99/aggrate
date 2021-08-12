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
import { useDisclosure } from "@chakra-ui/react"
import { FcSearch } from "react-icons/fc";

export const Search = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	return (
	  <>
		<Button ref={btnRef} leftIcon={< FcSearch />} colorScheme="blue" variant="ghost" onClick={onOpen}>Search</Button>
		<Drawer
		  isOpen={isOpen}
		  placement="bottom"
		  onClose={onClose}
		  finalFocusRef={btnRef}
		>
		  <DrawerOverlay />
		  <DrawerContent>
			<DrawerCloseButton />
			<DrawerHeader>Your Favorites!</DrawerHeader>
  
			<DrawerBody>
			  <Input placeholder={"Search " + props.category + ' ...'} />
			</DrawerBody>
  
			<DrawerFooter>
			  <Button variant="outline" mr={3} onClick={onClose}>
				Cancel
			  </Button>
			  <Button colorScheme="blue">Search</Button>
			</DrawerFooter>
		  </DrawerContent>
		</Drawer>
	  </>
	)
}

