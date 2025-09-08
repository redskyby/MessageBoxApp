import { NextFunction, Request, RequestHandler, Response } from 'express';
import { body, validationResult } from 'express-validator';

import ErrorHandler from '../classes/ErrorHandler';

const messagesMiddleware: RequestHandler[] = [
    body('name').notEmpty().isLength({ min: 2 }).withMessage('Имя не может быть пустым'),
    body('phone').notEmpty().isLength({ min: 8 }).withMessage('Телефон не может быть пустым'),
    body('message').notEmpty().isLength({ min: 2 }).withMessage('Сообщение не может быть пустым'),

    (req: Request, res: Response, next: NextFunction) => {
        if (req.method === 'OPTIONS') {
            return next();
        }
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array().map((error) => error.msg) });
            }

            next();
        } catch (error) {
            ErrorHandler.handleError(res, error, 'Ошибка при валидации данных!');
        }
    },
] as RequestHandler[];

export default messagesMiddleware;
