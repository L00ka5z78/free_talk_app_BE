import { Router } from 'express';
import { createCommentRequirements, validateResult } from '../../common';
import { createNewComment } from '../../controlerrs/comment-controller';

const router = Router();

router.post(
  '/new/:postId',
  createCommentRequirements,
  validateResult,
  createNewComment
);

export { router as newCommentRouter };
