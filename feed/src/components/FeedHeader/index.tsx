import { Button } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';
import { ListBullets } from 'phosphor-react';

export function FeedHeader() {
	return (
		<HStack
			h={'80px'}
			w='full'
			maxW={'1024px'}
			bgColor='#E8E8E8'
			justifyContent={'center'}
			borderRadius={6}
			my={8}>
			<Button
				leftIcon={<ListBullets color='#29325D' size={"1.2rem"} />}
				color='#29325D'
				bgColor={'#E9ECF5'}
				fontWeight='bold'
				fontSize={"1rem"}
				_hover={{ transform: 'scale(1.1)' }}
				h='60%'
				w={200}>
				Criar Post
			</Button>
		</HStack>
	);
}
