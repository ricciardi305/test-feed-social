import { Post } from '../models/Post';

export type IPostCreation = Omit<
	Post,
	'id' | 'createdAt' | 'updatedAt' | 'postImage'
>;
