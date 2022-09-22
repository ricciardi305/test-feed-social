import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Avatar,
	Button,
	Container,
	HStack,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Modal,
	Text,
	useDisclosure,
	useMediaQuery,
	VStack,
} from '@chakra-ui/react';
import autor_avatar from '../../assets/avatar_default.png';
import feedLogo from '../../assets/feed.svg';
import { DotsThreeOutline, Trash, FileText } from 'phosphor-react';
import { ModalUpdate } from '../ModalUpdate';

interface PostCardProps {
	name: string;
	createdAt: string;
	postType: string;
	postContent: string;
	postImage: string;
	id: number;
	loadPosts: () => void;
}

export function PostCard(props: PostCardProps) {
	let [isSmallerThan375px, isSmallerThan430px, isSmallerThan768px] =
		useMediaQuery([
			'(max-width: 375px)',
			'(max-width: 425px)',
			'(max-width: 768px)',
		]);
	const { onOpen, isOpen, onClose } = useDisclosure();

	const newDate = new Date(props.createdAt);

	const formatterDate = Intl.DateTimeFormat('pt-BR', {
		dateStyle: 'long',
	});

	const formatterTime = Intl.DateTimeFormat('pt-BR', {
		timeStyle: 'short',
	});

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

				<HStack w='full' mx={4} justify={'space-between'}>
					<HStack>
						<Avatar src={autor_avatar} size='sm' />

						{/* Nome do autor e data de publi */}

						<VStack alignItems={'flex-start'}>
							<Text mb='-8px' fontWeight={'bold'} color='#545B7D'>
								{props.name}
							</Text>

							<Text fontSize={11} position={'relative'} color='#545B7D'>
								{`Publicado em ${formatterDate.format(
									newDate
								)} às ${formatterTime.format(newDate)}`}
							</Text>
						</VStack>
					</HStack>
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label='Options'
							icon={<DotsThreeOutline />}
							variant='outline'
							h={6}
							_hover={{ transform: 'scale(1.1)', borderColor: '#29325D' }}
						/>
						<MenuList
							p='1'
							minWidth='150px'
							border='1px'
							borderColor={'#8191C7'}
							boxShadow='lg'>
							<MenuItem
								icon={<Trash size={20} weight='light' color='#8191C7' />}
								color='#8191C7'
								border='1px'
								borderColor={'#8191C7'}
								rounded='md'
								mb='4px'
								onClick={onOpen}>
								Editar
							</MenuItem>
							<MenuItem
								icon={<FileText size={20} weight='light' color='#8191C7' />}
								color='#8191C7'
								border='1px'
								borderColor={'#8191C7'}
								rounded='md'>
								Deletar
							</MenuItem>
						</MenuList>
					</Menu>
				</HStack>

				<HStack
					h={10}
					justify='flex-start'
					w='full'
					position={'relative'}
					top='-10px'>
					<Image src={feedLogo} boxSize='4' />

					<Text fontWeight={'bold'} color='#545B7D'>
						{props.postType}
					</Text>
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
				{props.postImage ? (
					<Image
						src={`http://localhost:3000/${props.postImage}`}
						boxSize='2xs'
					/>
				) : null}
				<Modal isOpen={isOpen} onClose={onClose} motionPreset='scale'>
					<ModalUpdate
						loadPosts={props.loadPosts}
						onClose={onClose}
						id={String(props.id)}
						name={props.name}
						postType={props.postType}
						postContent={props.postContent}
					/>
				</Modal>
			</VStack>
			<br />
		</>
	);
}
