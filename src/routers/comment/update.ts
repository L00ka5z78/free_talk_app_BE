import { Router } from 'express';
import { updateCommentRequirements, validateResult } from 'src/common';
import { updateComment } from '../../controlerrs/comment-controller';

const router = Router();

router.patch(
  '/update/:id',
  updateCommentRequirements,
  validateResult,
  updateComment
);
export { router as updateCommentRouter };
