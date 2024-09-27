import express, { Application } from 'express';
import bookRoutes from './routes/bookRoutes';
import dotenv from 'dotenv';
import './db';
import cors from 'cors';

dotenv.config({ path: '../.env' });

const app: Application = express();
const port: number = parseInt(process.env.BACKEND_PORT || '3001', 10);
const fe_port: number = parseInt(process.env.FRONTEND_PORT || '3000', 10)

app.use(express.json());

app.use(cors({
    origin: `http://localhost:${fe_port}`,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use('/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
