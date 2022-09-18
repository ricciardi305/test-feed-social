import { Button } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';
import { ListBullets } from 'phosphor-react';

export function FeedHeader() {
	return (
		<HStack
			h={'60px'}
			w='full'
			maxW={'768px'}
			bgColor='#E8E8E8'
			justifyContent={'center'}
			borderRadius={6}
			my={6}>
			<Button
				leftIcon={<ListBullets color='#29325D' size={'1.2rem'} />}
				color='#29325D'
				bgColor={'#E9ECF5'}
				fontWeight='bold'
				fontSize={'1.2rem'}
				_hover={{ transform: 'scale(1.1)', bgColor: '#d5d8e1' }}
				h='60%'
				w={"150px"}>
				Criar Post
			</Button>
		</HStack>
	);
}
