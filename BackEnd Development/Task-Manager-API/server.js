import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth'
import taskRoute from './routes/task'

const app = express();

app.use(authRoute);

app.use('/tasks', taskRoute);

dotenv.config();