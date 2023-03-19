import { Router } from 'express';
import { showComment } from '../../controlerrs/comment-controller';

const router = Router();

router.patch('/show/:id', showComment);
export { router as showCommentRouter };
