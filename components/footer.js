import { Box } from '@chakra-ui/react'

const Footer = () => {
	return (
		<Box align='center' opacity={0.4} fontSize='sm' mt={24}>
			&copy; {new Date().getFullYear()} Jordi Capellades. All Rights Reserved.
		</Box>
	)
}

export default Footer
