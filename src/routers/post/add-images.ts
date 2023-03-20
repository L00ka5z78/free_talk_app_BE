import { Router } from 'express';
import { addImg } from '../../controlerrs/post-controller';
import { uploadImages } from '../../common';

const router = Router();

router.post('/:id/add/images', uploadImages, addImg);
// router.delete('/api/post/:id/deleteimages'); //??api normal parth in main file

export { router as addImageRouter };
