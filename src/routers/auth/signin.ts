import { Router } from 'express';
import { signInRequirements, validateResult } from '../../common/index';
import { signInUser } from '../../controlerrs/user-controller';

const router = Router();

router.post('/signin', signInRequirements, validateResult, signInUser);

export { router as signInRouter };
