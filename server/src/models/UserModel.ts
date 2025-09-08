import { Model, model, models, Schema } from 'mongoose';

import { IUserDocument } from '../interface/IUserDocument.interface';

const UserSchema = new Schema<IUserDocument>(
    {
        name: {
            type: String,
            required: [true, 'имя обязательно'],
            unique: true,
            trim: true,
        },
        phone: {
            type: String,
            required: [true, 'номер обязателен'],
            trim: true,
        },
        message: {
            type: String,
            required: [true, 'номер обязателен'],
            trim: true,
        },
    },
    { timestamps: true },
);

const UserModel: Model<IUserDocument> = models.User || model('User', UserSchema);

export default UserModel;
