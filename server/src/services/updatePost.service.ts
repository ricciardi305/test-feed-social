import { AppDataSource } from '../data-source';
import { AppError } from '../errors/AppErrors';
import { Post } from '../models/Post';

export interface IPatchPost {
	id: string;
	name?: string;
	postType?: string;
	postContent?: string;
	postImage?: string;
}

export default class UpdatePostService {
	async execute(props: IPatchPost): Promise<Post> {
		const postRepository = AppDataSource.getRepository(Post);

		const patchPost = await postRepository.findOne({
			where: { id: Number(props.id) },
		});

		if (!patchPost) {
			throw new AppError(404, 'No post found');
		}

		if (props.name) {
			patchPost.name = props.name;
		}
		if (props.postType) {
			patchPost.postType = props.postType;
		}

		if (props.postContent) {
			patchPost.postContent = props.postContent;
		}

		await postRepository.save(patchPost);

		return patchPost;
	}
}
