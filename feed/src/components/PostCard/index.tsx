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

const texto =
	'proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor';

interface PostCardProps {
	name: string;
	createdAt: string;
	postType: string;
	postContent: string;
	postImage: string;
	id: number;
}

export function PostCard(props: PostCardProps) {
	let [isSmallerThan375px, isSmallerThan430px, isSmallerThan768px] =
		useMediaQuery([
			'(max-width: 375px)',
			'(max-width:425px)',
			'(max-width: 768px)',
		]);

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
				borderRadius={'8px'}
				boxShadow='lg'
				id={String(props.id)}>
				{/* Cabeçalho do post com infos do autor e data de publi */}

				<HStack justifyContent={'flex-start'} w='full' mx={4}>
					<Avatar src={autor_avatar} size='sm' />

					{/* Nome do autor e data de publi */}

					<VStack alignItems={'flex-start'}>
						<Text mb='-8px' fontWeight={'bold'}>
							{props.name}
						</Text>

						<Text fontSize={11} position={'relative'}>
							{props.createdAt}
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

					<Text fontWeight={'bold'}>{props.postType}</Text>
				</HStack>
				<Container
					maxWidth='full'
					centerContent
					position={'relative'}
					top='-16px'
					pl={-2}
					noOfLines={[10, 5]}>
					{props.postContent}
				</Container>
				{/* {props.postContentImg ? <Image src={props.postContentImg} /> : null} */}
				{/* {isSmallerThan430px ? (
					<Image src={props.postImage} boxSize='2xs' />
				) : (
					<Image src={props.postImage} boxSize='md' />
				)} */}
				{props.postImage ? <Image src={props.postImage} boxSize='2xs' /> : null}
			</VStack>
			<br />
		</>
	);
}
