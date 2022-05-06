import NextLink from 'next/link'
import {
	Box,
	Heading,
	Grid,
	GridItem,
	Link,
	Center,
	Button,
} from '@chakra-ui/react'

const Pokemon = ({ pokemon }) => {
	const id = pokemon.url
		.split('/')
		.filter(x => x)
		.pop()
	return (
		<NextLink href={`/pokemones/${id}`}>
			<Button mb={3} colorScheme='teal' variant='ghost'>
				{pokemon.name}
			</Button>
		</NextLink>
	)
}

export default function Pokemones({ pokemones }) {
	return (
		<Box align='center' pt={24}>
			<Heading as='h1' mb={8}>
				Pokemons
			</Heading>
			<Grid templateColumns='repeat(auto-fit, minmax(200px, 1fr))'>
				{pokemones.map(pokemon => (
					<GridItem key={pokemon.name}>
						<Center>
							<Pokemon pokemon={pokemon} />
						</Center>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export const getStaticProps = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=90')
	const data = await response.json()
	console.log(data)

	return {
		props: { pokemones: data.results },
	}
}
