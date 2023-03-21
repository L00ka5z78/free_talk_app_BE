import { Router } from 'express';
import { signUpUser } from '../../controlerrs/user-controller';
import { signUpRequirements } from '../../middleware/validate';
import { validateResult } from '../../middleware/validationResults';

const router = Router();

router.post('/signup', signUpRequirements, validateResult, signUpUser);

export { router as signUpRouter };
