import { Request, Response, NextFunction } from 'express';
import { Comment } from '../models/comment-model';
import { Post } from '../models/post-model';
import { BadRequestError } from '../common';

export const createNewComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userName, content } = req.body;
  const { postId } = req.params;

  if (!content) {
    return next(new BadRequestError('Fill out all required fields, please'));
  }
  const newComment = new Comment({
    userName: userName ? userName : 'anonymous',
    content,
  });
  await newComment.save();

  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId },
    { $push: { comments: newComment } },
    { new: true }
  );

  res.status(201).send(updatedPost);
};

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { commentId, postId } = req.params;
  if (!commentId || postId) {
    return next(new BadRequestError('Id is required'));
  }
  try {
    await Comment.findOneAndRemove({ _id: commentId });
  } catch (error) {
    next(new Error('Cant delete this comment'));
  }
  await Post.findOneAndUpdate(
    { _id: postId },
    { $pull: { comments: commentId } }
  );

  res.status(200).json({ success: true });
};

export const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { content, userName } = req.body;
  if (!id) {
    return next(new BadRequestError('Id is required'));
  }

  let updatedComment;
  try {
    updatedComment = await Comment.findByIdAndUpdate(
      { _id: id },
      { $set: { content, userName } },
      { new: true }
    );
  } catch (err) {
    return next(new BadRequestError('Comment can not be updated'));
    //   error.status = 400;
    //   next(error);
  }
  res.status(200).send(updatedComment);
};

export const showComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  if (!id) {
    const allComments = await Comment.find();
    return res.status(200).send(allComments);
  }
  //   const post = await Comment.findOne({ _id: id }).populate('comments');

  const comment = await Comment.findOne({ _id: id });
  res.status(200).send(comment);
};
