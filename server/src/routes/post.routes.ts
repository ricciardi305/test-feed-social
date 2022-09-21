import { Router } from 'express';
import { PostControllers } from '../controllers/post.controller';

const postRoutes = Router();

postRoutes.post('/', PostControllers.store);
postRoutes.get('/', PostControllers.index);
postRoutes.get('/:id', PostControllers.show);

export default postRoutes;
