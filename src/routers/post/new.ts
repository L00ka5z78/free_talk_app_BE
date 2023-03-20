import { Router } from 'express';
import { createNewPost } from '../../controlerrs/post-controller';
import { uploadImages } from '../../common';

const router = Router();

router.post('/new', uploadImages, createNewPost);

export { router as newPostRouter };
