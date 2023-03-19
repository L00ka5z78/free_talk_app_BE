import { Router } from 'express';
import { updateComment } from '../../controlerrs/comment-controller';

const router = Router();

router.patch('/update/:id', updateComment);
export { router as updateCommentRouter };
