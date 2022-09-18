import {
	Avatar,
	Container,
	HStack,
	Image,
	Text,
	useMediaQuery,
	VStack,
} from '@chakra-ui/react';
import autor_avatar from '../../assets/avatar_default.png';
import feedLogo from '../../assets/feed.svg';

interface PostCardProps {
	autor: string;
	postTitle: string;
	createdAt: string;
	postType: string;
	postContent: string;
	postContentImg: string;
}

export function PostCard() {
	const [isSmallerThan430px] = useMediaQuery(['(max-width:425px)']);
	return (
		<>
			<VStack
				w={'full'}
				maxW={'768px'}
				mb={4}
				className='postCard'
				pl='20px'
				pr={'10px'}
				py='8px'
				bgColor='#E8E8E8'
				borderRadius={'8px'}>
				{/* Cabeçalho do post com infos do autor e data de publi */}

				<HStack justifyContent={'flex-start'} w='full' mx={4}>
					<Avatar src={autor_avatar} size='sm' />

					{/* Nome do autor e data de publi */}

					<VStack alignItems={'flex-start'}>
						<Text mb='-8px' fontWeight={'bold'}>
							Nome do Autor
						</Text>

						<Text fontSize={11} position={'relative'}>
							Publicado em 12 de setembro de 2022 as 16:00
						</Text>
					</VStack>
				</HStack>

				<HStack
					h={10}
					justify='flex-start'
					w='full'
					position={'relative'}
					top='-10px'>
					<Image src={feedLogo} boxSize='4' />

					<Text fontWeight={'bold'}>Post</Text>
				</HStack>
				<Container
					maxWidth='full'
					centerContent
					position={'relative'}
					top='-16px'
					pl={-2}>
					proin sed libero enim sed faucibus turpis in eu mi bibendum neque
					egestas congue quisque egestas diam in arcu cursus euismod quis
					viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed
					cras ornare arcu dui vivamus arcu felis bibendum ut tristique et
					egestas quis ipsum suspendisse ultrices gravida dictum fusce ut
					placerat orci nulla pellentesque dignissim enim sit amet venenatis
					urna cursus eget nunc scelerisque viverra mauris in aliquam sem
					fringilla ut morbi tincidunt augue interdum velit euismod in
					pellentesque massa placerat duis ultricies lacus sed turpis tincidunt
					id aliquet risus feugiat in ante metus dictum at tempor
				</Container>
				{/* {props.postContentImg ? <Image src={props.postContentImg} /> : null} */}
				{isSmallerThan430px ? (
					<Image src={autor_avatar} boxSize='2xs' />
				) : (
					<Image src={autor_avatar} boxSize='md' />
				)}
			</VStack>
			<br />
		</>
	);
}
