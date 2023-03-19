import { Request, Response, NextFunction, Router } from 'express';
import { currentUser } from '../../middleware/current-user';

const router = Router();

router.get(
  '/current-user',
  currentUser,
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ currentUser: req.currentUser });
  }
);

export { router as currentUserRouter };
