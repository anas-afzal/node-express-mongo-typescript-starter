import mongoose from 'mongoose';
import { config } from '@src/config';

const MONGODB_URL = `mongodb://${config.MONGODB_USERNAME}:${config.MONGODB_PASSWORD}@${config.MONGODB_IP}:${config.MONGODB_PORT}/?authSource=admin`;

export const connectDb = (url?: string) =>
  mongoose.connect(url || MONGODB_URL, {
    retryWrites: true,
    writeConcern: { w: 'majority' },
  });

export const disconnectDb = () => mongoose.disconnect();
