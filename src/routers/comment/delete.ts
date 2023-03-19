import { Router } from 'express';
import { deleteComment } from '../../controlerrs/comment-controller';

const router = Router();

router.delete(
  '/:commentId/delete/:postId',
  deleteComment
  // async (req: Request, res: Response, next: NextFunction) => {
  //   const { postId, commentId } = req.params;

  //   if (!commentId || !postId) {
  //     const error = new Error(
  //       'post id and comment id are required!'
  //     ) as CustomError;
  //     error.status = 400;
  //     next(error);
  //   }

  //   try {
  //     await Comment.findOneAndRemove({ _id: commentId });
  //   } catch (err) {
  //     next(new Error('comment cannot be updated!'));
  //   }

  //   await Post.findOneAndUpdate(
  //     { _id: postId },
  //     { $pull: { comments: commentId } }
  //   );

  //   res.status(200).json({ success: true });
  // }
);

export { router as deleteCommentRouter };
