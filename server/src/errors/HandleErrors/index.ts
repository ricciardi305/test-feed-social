import { NextFunction, Request, Response } from 'express';
import { AppError } from '../AppErrors';

export const handleErrors = (
	err: any,
	req: Request,
	res: Response,
	_: NextFunction
) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			status: 'error',
			statusCode: err.statusCode,
			message: err.message,
		});
	}

	return res.status(500).json({
		status: 'error',
		message: 'Internal Server Error',
	});
};
