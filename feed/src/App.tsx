import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FeedFooter } from './components/FeedFooter';
import { FeedHeader } from './components/FeedHeader';
import { PostCard } from './components/PostCard';
import { api } from './services/api';

interface PostProps {
	created_at: string;
	id: number;
	name: string;
	postContent: string;
	postImage: string;
	postType: string;
	updatedAt: string;
}

function App() {
	const [posts, setPosts] = useState<PostProps[]>([]);

	const loadPosts = () => {
		api.get('/posts').then((res) => {
			res.data.reverse();
			setPosts(res.data);
		});
	};

	useEffect(() => {
		loadPosts();
	}, []);

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
			fontFamily='Lato, sans-serif'
			color='#545B7D'>
			<FeedHeader loadPosts={loadPosts} />
			{posts.map((post) => (
				<PostCard
					key={post.id}
					name={post.name}
					id={post.id}
					created_at={post.created_at}
					postContent={post.postContent}
					postType={post.postType}
					postImage={post.postImage}
					loadPosts={loadPosts}
				/>
			))}
			<FeedFooter />
		</VStack>
	);
}

export default App;
