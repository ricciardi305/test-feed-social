import express from 'express';
import 'express-async-errors';

import cors from 'cors';

import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import { handleErrors } from './errors/HandleErrors';
import postRoutes from './routes/post.routes';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Bem vindo!',
	});
});

app.use('/posts', postRoutes);

app.use(handleErrors);

export { app };
