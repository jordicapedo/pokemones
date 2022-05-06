import Logo from './logo'
import NextLink from 'next/link'
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				bg={active ? 'glassTeal' : undefined}
				color={active ? '#202023' : inactiveColor}
				borderRadius={4}
				target={target}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}

const Navbar = props => {
	const { path } = props
	return (
		<Box
			position='fixed'
			as='nav'
			w='100%'
			bg={useColorModeValue('#fffffff40', '#20202380')}
			style={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
			{...props}
		>
			<Container
				display='flex'
				p={2}
				maxW='container.md'
				wrap='wrap'
				align='center'
				justify='space-between'
			>
				<Flex align='center' mr={5}>
					<Heading as='h1' size='lg' letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<LinkItem
						target='_blank'
						href='https://github.com/jordicapedo/pokemones'
						display='flex'
						alignItems='center'
						style={{ gap: 4 }}
						pl={2}
					>
						<IoLogoGithub />
						Source
					</LinkItem>
				</Stack>
				<Box flex={1} align='right'>
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant='ghost'
								aria-label='Options'
							/>
							<MenuList>
								<NextLink
									href='https://github.com/jordicapedo/pokemones'
									passHref
								>
									<MenuItem isExternal={true} as={Link}>
										View Source
									</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar
