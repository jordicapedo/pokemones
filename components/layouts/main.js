import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
	return (
		<Box as='main' pb={8}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
				<title>Pokemones - Homepage</title>
			</Head>
			<Navbar router={router} />
			<Container maxW='container.md'>{children}</Container>
		</Box>
	)
}

export default Main
