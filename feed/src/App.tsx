import { VStack } from '@chakra-ui/react';
import { FeedFooter } from './components/FeedFooter';
import { FeedHeader } from './components/FeedHeader';
import { PostCard } from './components/PostCard';

function App() {
	return (
		<VStack
			bgColor={'#E9ECF5'}
			w='100%'
			h='100vh'
			alignItems={'center'}
			justifyContent={'flex-start'}
			px={4}>
			<FeedHeader />
			<PostCard />
			<FeedFooter />
		</VStack>
	);
}

export default App;
