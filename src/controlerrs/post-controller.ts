import { CustomError } from '../interfaces/customErr';
import { Request, Response, NextFunction } from 'express';
import { Post } from '../models/post-model';
import { BadRequestError } from '../common';

export const createNewPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return next(new BadRequestError('Fill out all required fields, please'));
  }
  const newPost = new Post({ title, content });
  await newPost.save();
  res.status(201).send(newPost);
};

// export const createNewPost = async (
//   req: Request,
//   res: Response,
//   next: (err?: Error) => any
// ) => {
//   const { title, content } = req.body;
//   try {
//     const post = await Post.create({
//       title,
//       content,
//     });
//     res.status(201).json({ message: 'Post created successfully!', post });
//   } catch (error: any) {
//     console.error(error.message);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// };

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { content, title } = req.body;
  if (!id) {
    return next(new BadRequestError('Id is required'));
  }

  let updatedPost;
  try {
    updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      { $set: { content, title } },
      { new: true }
    );
  } catch (err) {
    return next(new BadRequestError('Post can not be updated'));
  }
  res.status(200).send(updatedPost);
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return next(new BadRequestError('Id is required'));
  }
  try {
    await Post.findOneAndRemove({ _id: id });
  } catch (error) {
    next(new Error('Cant delete this post'));
  }
  res.status(200).json({ success: true });
};

export const showPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  if (!id) {
    const allPosts = await Post.find();
    return res.status(200).send(allPosts);
  }
  const post = await Post.findOne({ _id: id }).populate('comments');

  res.status(200).send(post);
};
