import mongoose from 'mongoose';
import { IPostDoc } from './post-interface';

export interface IUserDoc extends mongoose.Document {
  email: string;
  password: string;
  posts?: Array<IPostDoc>;
}

export interface ICreateUserDto {
  email: string;
  password: string;
}

export interface IUserModel extends mongoose.Model<IUserDoc> {
  build(dto: ICreateUserDto): IUserDoc;
}
