import { Request, Response } from 'express';
import CreatePostService from '../services/createPost.service';

export class PostControllers {
	static async store(req: Request, res: Response) {
		const { name, postType, postContent } = req.body;

		const createPost = new CreatePostService();

		const post = await createPost.execute({
			name,
			postType,
			postContent,
		});

		return res.status(201).json(post);
	}
}
