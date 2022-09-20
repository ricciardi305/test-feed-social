import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column({ nullable: false, length: 255 })
	name: string;

	@Column({ nullable: false, length: 255 })
	postType: string;

	@Column({ nullable: false, type: 'text' })
	postContent: string;

	@CreateDateColumn({
		name: 'created_at',
	})
	createdAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
	})
	updatedAt: Date;

	@Column({ nullable: false, length: 500 })
	postImage: string;

	constructor() {}
}
