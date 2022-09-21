import { AppDataSource } from '../data-source';
import { AppError } from '../errors/AppErrors';
import { Post } from '../models/Post';

export class ListOnePostService {
	async execute(id: string): Promise<Post> {
		const postRepository = AppDataSource.getRepository(Post);

		const post = await postRepository.findOne({
			where: { id: Number(id) },
		});

		if (!post) {
			throw new AppError(404, 'Post not found');
		}

		return post;
	}
}
