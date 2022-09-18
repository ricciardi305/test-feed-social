import { HStack, Text } from '@chakra-ui/react';

export function FeedFooter() {
	return (
		<HStack
			h={'70px'}
			w='full'
			maxW={'768px'}
			bgColor='#E8E8E8'
			justifyContent={'center'}
			borderRadius={6}
			mx={8}>
			<Text fontSize={'1rem'} color='#9A9EB2' textAlign={'center'}>
				Não existem mais itens a serem exibidos
			</Text>
		</HStack>
	);
}
