export interface IPostCreation {
	name: string;
	postType: string;
	postContent: string;
	postImage?: string;
}

export interface IPatchPost {
	id: string;
	name?: string;
	postType?: string;
	postContent?: string;
	postImage?: string;
}
