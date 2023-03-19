import mongoose from 'mongoose';

export interface ICommentDoc extends mongoose.Document {
  userName: string;
  content: string;
}
export interface ICreateCommentDto {
  userName: string;
  content: string;
}

export interface ICommentModel extends mongoose.Model<ICommentDoc> {
  build(dto: ICreateCommentDto): ICommentDoc;
}
