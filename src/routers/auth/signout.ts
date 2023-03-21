import { Router } from 'express';
import { signOutUser } from '../../controlerrs/user-controller';

const router = Router();

router.get('/signout', signOutUser);

export { router as signOutRouter };
