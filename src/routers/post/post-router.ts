import { Router } from 'express';
import { createNewPost } from '../../controlerrs/post-controller';
import {
  createPostRequirements,
  uploadImages,
  validateResult,
} from '../../common';

const router = Router();

router.post(
  '/new',
  createPostRequirements,
  validateResult,
  uploadImages,
  createNewPost
);
