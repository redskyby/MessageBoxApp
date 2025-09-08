import { Response } from 'express';

class ErrorHandler {
    handleError(res: Response, error: unknown, msg: string) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(500).json({ message: msg });
        } else {
            console.error('Неизвестная ошибка:', error);
            res.status(500).json({ message: 'Неизвестная ошибка' });
        }
    }
}

export default new ErrorHandler();
