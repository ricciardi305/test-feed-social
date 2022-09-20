import { AppDataSource } from '../data-source';
import { IPostCreation } from '../interfaces/post.interface';
import { Post } from '../models/Post';

export default class CreatePostService {
	async execute({ name, postType, postContent }: IPostCreation): Promise<Post> {
		const postRepository = AppDataSource.getRepository(Post);

		const post = new Post();
		post.name = name;
		post.postType = postType;
		post.postContent = postContent;

		postRepository.create(post);

		await postRepository.save(post);

		return post;
	}
}
