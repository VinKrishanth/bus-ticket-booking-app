import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouters from './routes/authRoutes.js';
import homeRoutes from "./routes/home.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.use("/", homeRoutes);
app.use('/api/auth', authRouters);

app.listen(port, () => console.log(`Server started on port ${port}`));