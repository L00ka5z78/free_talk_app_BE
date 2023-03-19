import mongoose from 'mongoose';
import {
  ICommentDoc,
  ICreateCommentDto,
  ICommentModel,
} from '../interfaces/comment-interface';

const commentSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
});

commentSchema.statics.build = (createCommentDto: ICreateCommentDto) =>
  new Comment(createCommentDto);

export const Comment = mongoose.model<ICommentDoc, ICommentModel>(
  'Comment',
  commentSchema
);
