import { Router } from 'express';
import { signOutUser } from '../../controlerrs/user-controller';

const router = Router();

router.get(
  '/signout',
  signOutUser
  //   async (req: Request, res: Response, next: NextFunction) => {
  //     req.session = null;
  //     res.send({});
  //   }
);

export { router as signOutRouter };
