import { Router } from 'express';
import { PostControllers } from '../controllers/post.controller';

import { AppError } from '../errors/AppErrors';

// Tratamente da rerquisição para receber imagens

import multer from 'multer';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/uploads');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname);
	},
});

// const fileFilter = (req, file, cb) => {
// 	if (
// 		file.mimetype === 'image/jpeg' ||
// 		file.mimetype === 'image/png' ||
// 		file.mimetype === 'image/jpg'
// 	) {
// 		cb(null, true);
// 	} else {
// 		cb(null, false);
// 	}
// };

const upload = multer({
	storage: storage,

	fileFilter(req, file, cb) {
		if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
			cb(null, true);
		} else {
			cb(null, false);

			cb(
				new AppError(
					400,
					'The image file must have the extensions .png or .jpg'
				)
			);
		}
	},
});

const postRoutes = Router();

postRoutes.post('/', upload.single('postImage'), PostControllers.store);
postRoutes.get('/', PostControllers.index);
postRoutes.get('/:id', PostControllers.show);
postRoutes.patch('/:id', PostControllers.update);
postRoutes.delete('/:id', PostControllers.delete);

export default postRoutes;
