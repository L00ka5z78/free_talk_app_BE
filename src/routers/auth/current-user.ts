import { Router } from 'express';
import { currentUser } from '../../middleware/current-user';
import { currUser } from '../../controlerrs/user-controller';

const router = Router();

router.get(
  '/current-user',
  currentUser,
  currUser
  //   async (req: Request, res: Response, next: NextFunction) => {
  //     res.status(200).send({ currentUser: req.currentUser });
  //   }
);

export { router as currentUserRouter };
