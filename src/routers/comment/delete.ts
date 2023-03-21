import { Router } from 'express';
import { deleteComment } from '../../controlerrs/comment-controller';

const router = Router();

router.delete('/:commentId/delete/:postId', deleteComment);

export { router as deleteCommentRouter };
