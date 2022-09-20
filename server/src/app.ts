import express from 'express';
import 'express-async-errors';

import cors from 'cors';

import swaggerUI from 'swagger-ui-express';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Bem vindo!',
	});
});

export { app };
