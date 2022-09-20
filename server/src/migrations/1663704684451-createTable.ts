import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTable1663704684451 implements MigrationInterface {
	name = 'createTable1663704684451';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "post" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "postType" character varying(255) NOT NULL, "postContent" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "postImage" character varying(500), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "post"`);
	}
}
