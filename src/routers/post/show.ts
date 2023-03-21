import { Router } from 'express';
import { showPost } from '../../controlerrs/post-controller';

const router = Router();

router.get('/show/:id', showPost);

export { router as showPostRouter };
