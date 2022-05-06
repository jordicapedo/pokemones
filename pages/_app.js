import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Layout>
				<Component {...pageProps} />
				<Footer />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
