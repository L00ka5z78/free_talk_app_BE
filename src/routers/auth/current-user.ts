import { Router } from 'express';
import { currentUser } from '../../middleware/current-user';
import { currUser } from '../../controlerrs/user-controller';

const router = Router();

router.get('/current-user', currentUser, currUser);

export { router as currentUserRouter };
