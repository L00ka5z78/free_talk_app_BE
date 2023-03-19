import mongoose from 'mongoose';
import config from '../config/config';

export const startConnection = async () => {
  try {
    await mongoose.connect(config.mongo.MONGO_URI).then(() => {
      console.log('Mongo database connected');
    });
  } catch (err: any) {
    throw new Error('Connection Failed!');
  }
};
