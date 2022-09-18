import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';
import autor_avatar from '../../assets/avatar_default.png';

interface PostCardProps {
	autor: string;
	postTitle: string;
	createdAt: string;
	postType: string;
	postContent: string;
}

export function PostCard() {
	return (
		<VStack w={'full'}>
            {/* Cabeçalho do post com infos do autor e data de publi */}
			<HStack justifyContent={'flex-start'} w='full' mx={4}>
				<Avatar src={autor_avatar} size='sm' />
				<VStack position={"relative"}>
					<Text mb="-10px">Nome do Autor</Text>
					<Text fontSize={'0.7rem'} position={'relative'} left="-12px">
						Publicado em ...
					</Text>
				</VStack>
			</HStack>
		</VStack>
	);
}
