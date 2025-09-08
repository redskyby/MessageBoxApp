import { config } from 'dotenv';
config();
import mongoose from 'mongoose';

const connectDB = async (): Promise<boolean> => {
    try {
        const mongoUri = process.env.MONGO_URL;

        if (!mongoUri) {
            console.error('MONGODB_URI is not defined');
            return false;
        }

        await mongoose.connect(mongoUri);
        console.log('Mongodb connected');
        return true;
    } catch (e) {
        console.error('Ошибка подключения к базе данных:', e);
        return false;
    }
};

export default connectDB;
