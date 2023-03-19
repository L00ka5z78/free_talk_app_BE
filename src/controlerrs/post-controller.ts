import { Request, Response, NextFunction } from 'express';
import { Post } from '../models/post-model';
import { User } from '../models/user-model';
import { BadRequestError } from '../common';
import { IUserDoc } from '../interfaces/user-interface';

export const createNewPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return next(new BadRequestError('Fill out all required fields, please'));
  }
  const newPost = Post.build({ title, content });
  await newPost.save();

  await User.findOneAndUpdate(
    { _id: req.currentUser!.userId } /* error in postman during testing.
    ({ _id: req.currentUser.userId }, { $push: { posts: newPost._id } });    
                           ^ TypeError:Cannot read properties of undefined(reading 'userId*/,
    { $push: { posts: newPost._id } }
  );

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
  } catch (err) {
    next(new Error('Cant delete this post'));
  }
  const user = await User.findOneAndUpdate(
    { _id: req.currentUser!.userId },
    { $pull: { posts: id } },
    { new: true }
  );
  if (!user) return next(new Error());

  res.status(200).send(user);
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
