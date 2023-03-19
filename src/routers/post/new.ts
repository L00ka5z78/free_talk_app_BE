import { Router } from 'express';
import { createNewPost } from '../../controlerrs/post-controller';

const router = Router();

router.post('/new', createNewPost);

export { router as newPostRouter };
