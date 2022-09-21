import { Request, Response } from 'express';
import CreatePostService from '../services/createPost.service';
import DeletePostService from '../services/deletePost.service';
import { ListOnePostService } from '../services/listOnePost.service';
import { ListPostService } from '../services/listPost.service';
import UpdatePostService from '../services/updatePost.service';

import multer from 'multer';

const upload = multer({ dest: 'public/uploads' });

export class PostControllers {
	static async store(req: Request, res: Response) {
		const { name, postType, postContent } = req.body;
		const postImage = req.file?.path
		
		const createPost = new CreatePostService();

		const post = await createPost.execute({
			name,
			postType,
			postContent,
			postImage
		});

		return res.status(201).json(post);
	}

	static async index(req: Request, res: Response) {
		const postList = new ListPostService();

		const posts = await postList.execute();

		return res.status(200).json(posts);
	}

	static async show(req: Request, res: Response) {
		const { id } = req.params;

		const post = new ListOnePostService();

		const postData = await post.execute(id);

		return res.status(200).json(postData);
	}

	static async update(req: Request, res: Response) {
		const { id } = req.params;
		const { name, postType, postContent } = req.body;

		const post = new UpdatePostService();

		const patchPost = await post.execute({ id, name, postType, postContent });

		return res.status(200).json(patchPost);
	}

	static async delete(req: Request, res: Response) {
		const { id } = req.params;

		const post = new DeletePostService();
		const deletedPost = await post.execute(id);

		return res.status(200).json({ message: 'Post deleted successfully' });
	}
}
