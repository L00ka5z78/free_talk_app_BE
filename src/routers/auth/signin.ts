import { Request, Response, NextFunction, Router } from 'express';
import { User } from '../../models/user-model';
import { authenticationService } from '../../common/index';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

const router = Router();

router.post(
  '/signin',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return next(new Error('Wrong credentials'));

    //check if password match
    const isEqual = await authenticationService.comparePassword(
      user.password,
      password
    );
    if (!isEqual) return next(new Error('Wrong credentials'));
    //generate token
    const token = jwt.sign(
      { email, userId: user._id },
      config.jsonWebToken.JWT_KEY
    );
    //cokkie session start
    req.session = { jwt: token };
    res.status(200).send(user);
  }
);

export { router as signInRouter };
