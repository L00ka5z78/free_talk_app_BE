import { Router } from 'express';
import { deleteImg } from '../../controlerrs/post-controller';

const router = Router();

router.delete('/:id/delete/images', deleteImg);

// router.delete('/post/:id/delete/images', deleteImg);
// router.delete('/api/post/:id/delete/images'); //??api normal parth in main file

export { router as deleteImageRouter };
