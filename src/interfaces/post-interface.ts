import mongoose from 'mongoose';
import { ICommentDoc } from './comment-interface';

export interface IPostDoc extends mongoose.Document {
  title: string;
  content: string;
  images: Array<{ src: string }>;
  comments?: Array<ICommentDoc>;
}
export interface ICreatePostDto {
  title: string;
  content: string;
  images: Array<{ src: string }>;
}

export interface IPostModel extends mongoose.Model<IPostDoc> {
  build(dto: ICreatePostDto): IPostDoc;
}
