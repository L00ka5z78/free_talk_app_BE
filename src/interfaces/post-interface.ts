import mongoose from 'mongoose';
import { ICommentDoc } from './comment-interface';

export interface IPostDoc extends mongoose.Document {
  title: string;
  content: string;
  comments?: Array<ICommentDoc>;
}
export interface ICreatePostDto {
  title: string;
  content: string;
}

export interface IPostModel extends mongoose.Model<IPostDoc> {
  build(dto: ICreatePostDto): IPostDoc;
}
