import { Request, Response } from 'express';

import ErrorHandler from '../classes/ErrorHandler';
import { UserInterface } from '../interface/User.interface';
import UserModel from '../models/UserModel';

class messageController {
    async addMessage(req: Request, res: Response): Promise<void> {
        try {
            const { name, phone, message } = req.body;

            const user: UserInterface | null = await UserModel.findOne({ phone }).lean().exec();

            if (user) {
                res.status(409).json({ message: 'Пользователь с таким phone уже существует!' });
                return;
            }

            await UserModel.create({
                name,
                phone,
                message,
            });

            res.status(201).json({
                message: 'Данные сохранены',
            });
        } catch (error) {
            ErrorHandler.handleError(res, error, 'Ошибка на сервере');
        }
    }

    async readMessages(req: Request, res: Response) {
        try {
            const users: UserInterface[] | null = await UserModel.find().lean().exec();

            if (!users) {
                res.status(404).json({ message: 'Пользователь с таким email не существует!' });
                return;
            }

            res.status(200).json({ users });
        } catch (error) {
            ErrorHandler.handleError(res, error, 'Ошибка на сервере');
        }
    }
}

export default new messageController();
