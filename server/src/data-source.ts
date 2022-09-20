import 'reflect-metadata';
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const devDataSourceOptions: DataSourceOptions = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	logging: true,
	ssl: false,
	synchronize: false,
	entities: ['src/models/*/*.ts'],
	migrations: ['src/migrations/*.ts'],
};

let currentDataSourceOptions = devDataSourceOptions;

export const AppDataSource = new DataSource(currentDataSourceOptions);

if (process.env.NODE_ENV !== 'test') {
	AppDataSource.initialize()
		.then(() => {
			console.log('Data source initialized');
		})
		.catch((err) =>
			console.log('Error during the Data source initialization', err)
		);
}
