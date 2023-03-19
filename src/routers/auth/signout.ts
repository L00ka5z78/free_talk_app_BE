import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.get(
  '/signout',
  async (req: Request, res: Response, next: NextFunction) => {
    req.session = null;
    res.send({});
  }
);

export { router as signOutRouter };
