import mongoose from 'mongoose';
import {
  IPostDoc,
  IPostModel,
  ICreatePostDto,
} from '../interfaces/post-interface';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [{ src: { type: String, required: true } }],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});
postSchema.statics.build = (createPostDto: ICreatePostDto) =>
  new Post(createPostDto);

export const Post = mongoose.model<IPostDoc, IPostModel>('Post', postSchema);
