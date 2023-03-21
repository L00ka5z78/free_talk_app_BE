import { Router } from 'express';
import { deletePost } from '../../controlerrs/post-controller';

const router = Router();

router.delete('/delete/:id', deletePost);

export { router as deletePostRouter };
