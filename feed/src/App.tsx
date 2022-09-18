import { VStack } from '@chakra-ui/react';
import { FeedFooter } from './components/FeedFooter';
import { FeedHeader } from './components/FeedHeader';
import { PostCard } from './components/PostCard';

function App() {
	return (
		<VStack
			bgColor={'#d5d8e1'}
			w='100%'
			h='100%'
			minH={'100vh'}
			alignItems={'center'}
			justifyContent={'flex-start'}
			px={4}
			pb={8}
			fontFamily='Lato, sans-serif'>
			<FeedHeader />
			<PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard />
			<FeedFooter />
		</VStack>
	);
}

export default App;
