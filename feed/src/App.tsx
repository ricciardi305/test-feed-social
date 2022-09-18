import {  VStack } from '@chakra-ui/react';
import { FeedFooter } from './components/FeedFooter';
import { FeedHeader } from './components/FeedHeader';

function App() {
	return (
		<VStack bgColor={'#E9ECF5'} w='100%' h='100vh' alignItems={"center"} justifyContent={"flex-start"} px={4}>
			<FeedHeader />
			<FeedFooter />
		</VStack>
	);
}

export default App;
