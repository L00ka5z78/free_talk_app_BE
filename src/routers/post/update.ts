import { Router } from 'express';
import { updatePostRequirements, validateResult } from '../../common';

import { updatePost } from '../../controlerrs/post-controller';

const router = Router();

router.post('/update/:id', updatePostRequirements, validateResult, updatePost);

export { router as updatePostRouter };
