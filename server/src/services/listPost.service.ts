import { AppDataSource } from '../data-source';
import { Post } from '../models/Post';

export class ListPostService {
	async execute(): Promise<Post[]> {
		const postRepository = AppDataSource.getRepository(Post);

		const posts = await postRepository.find();

		return posts.reverse();
	}
}
