import { CustomError } from '../interfaces/customErr';
import { Request, Response, NextFunction } from 'express';
import { Post } from '../models/post-model';

export const createNewPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, content } = req.body;

  if (!title || !content) {
    const error = new Error(
      'Fill out all required fields, please'
    ) as CustomError;
    error.status = 400;
    return next(error);
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
    const error = new Error('Id is required') as CustomError;
    error.status = 400;
    next(error);
  }

  let updatedPost;
  try {
    updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      { $set: { content, title } },
      { new: true }
    );
  } catch (err) {
    const error = new Error('Post can not be updated') as CustomError;
    error.status = 400;
    next(error);
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
    const error = new Error('Id is required') as CustomError;
    error.status = 400;
    next(error);
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
