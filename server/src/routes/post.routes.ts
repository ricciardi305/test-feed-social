import { Router } from 'express';
import { PostControllers } from '../controllers/post.controller';

const postRoutes = Router();

postRoutes.post('/', PostControllers.store);

export default postRoutes;
