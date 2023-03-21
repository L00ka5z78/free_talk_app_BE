import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { body } from 'express-validator';
import { Post } from '../models/post-model';
import { User } from '../models/user-model';
import { BadRequestError } from '../common';

export const createNewPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, content } = req.body;

  if (!req.file) return next(new BadRequestError('images are required'));

  let images: Array<Express.Multer.File>;
  if (typeof req.files === 'object') {
    images = Object.values(req.files);
  } else {
    images = req.files ? [...req.files] : [];
  }

  if (!title || !content) {
    return next(new BadRequestError('Fill out all required fields, please'));
  } //might remove this and add valitate result, or validate

  const newPost = Post.build({
    title,
    content,
    images: images.map((file: Express.Multer.File) => {
      let sourceObject = {
        // src: `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,

        src: `data:${file.mimetype};base64,${fs
          .readFileSync(path.join('uploadDir' + file.filename))
          .toString('base64')}`,
      };
      fs.unlink(path.join(`upload/ ${file.filename}`), () => {});
      // fs.unlink(path.join('upload/' + file.filename), () =>{})

      return sourceObject;
    }),
  });
  await newPost.save();

  await User.findOneAndUpdate(
    { _id: req.currentUser!.userId } /* error in postman during testing.
    ({ _id: req.currentUser.userId }, { $push: { posts: newPost._id } });    
                           ^ TypeError:Cannot read properties of undefined(reading 'userId*/,
    { $push: { posts: newPost._id } }
  );

  res.status(201).send(newPost);
};

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

export const deleteImg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { imagesIds } = req.body;

  const post = await Post.findOneAndUpdate(
    { _id: id },
    { $pull: { images: { _id: { $in: imagesIds } } } },
    { new: true }
  );
  res.status(200).send(post);
};

export const addImg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!req.file) return next(new BadRequestError('images are required'));

  let images: Array<Express.Multer.File>;
  if (typeof req.files === 'object') {
    images = Object.values(req.files);
  } else {
    images = req.files ? [...req.files] : [];
  }
  const imagesArray = images.map((file: Express.Multer.File) => {
    let sourceObject = {
      // src: `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,

      src: `data:${file.mimetype};base64,${fs
        .readFileSync(path.join('uploadDir' + file.filename))
        .toString('base64')}`,
    };
    fs.unlink(path.join(`upload/ ${file.filename}`), () => {});
    // fs.unlink(path.join('upload/' + file.filename), () =>{})

    return sourceObject;
  });
  const post = await Post.findOneAndUpdate(
    { _id: id },
    { $push: { images: { $each: imagesArray } } },
    { new: true }
  );
  res.status(200).send(post);
};
