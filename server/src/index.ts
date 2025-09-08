import { config } from 'dotenv';
config();
import express, { Express } from 'express';
import cors from "cors"

import connectDB from './db/mongodb';
import routes from './routes';

const app: Express = express();
const port: number = parseInt(process.env.PORT!, 10) || 8000;

app.use(cors())
app.use(express.json());
app.use('/api/', routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
