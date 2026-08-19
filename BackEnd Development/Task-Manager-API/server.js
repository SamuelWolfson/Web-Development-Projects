import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoMemoryServer } from 'mongodb-memory-server';

import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';
import taskRoutes from './routes/task.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
    console.log(`Connected to In-Memory MongoDB successfully!`);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
}

startServer();