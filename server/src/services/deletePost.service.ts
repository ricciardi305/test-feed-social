import { AppDataSource } from '../data-source';
import { AppError } from '../errors/AppErrors';
import { Post } from '../models/Post';

export default class DeletePostService {
	async execute(id: string): Promise<boolean> {
		const postRepository = AppDataSource.getRepository(Post);

		const findPost = await postRepository.findOneBy({ id: Number(id) });

		if (findPost) {
			await postRepository.delete(findPost.id);
			return true;
		}

		throw new AppError(404, 'Post Not Found');
	}
}
