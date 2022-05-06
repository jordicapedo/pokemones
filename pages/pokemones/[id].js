import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Heading, Image, Button } from '@chakra-ui/react'

const Pokemon = ({ data }) => {
	const router = useRouter()
	console.log(router)

	if (router.isFallback) {
		return <p>Cargando</p>
	}

	return (
		<Box align='center' pt={24}>
			<Heading as='h2'>{data.name}</Heading>
			<Image src={data.sprites.front_default} width={200} height={200} />
			<NextLink href='/' passHref>
				<Button colorScheme='teal'>Volver al inicio</Button>
			</NextLink>
		</Box>
	)
}

export default Pokemon

export const getStaticProps = async ({ params }) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
	const data = await response.json()
	console.log(data)
	return { props: { data } }
}

export const getStaticPaths = async () => {
	const paths = [{ params: { id: '1' } }, { params: { id: '2' } }]
	return {
		paths,
		fallback: true,
	}
}
