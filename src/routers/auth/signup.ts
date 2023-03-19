import { Request, Response, NextFunction, Router } from 'express';
import { User } from '../../models/user-model';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

const router = Router();

router.post(
  '/signup',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) return next(new Error('User already exists'));

    const newUser = new User({
      email,
      password,
    });
    await newUser.save();

    //start cookie session
    req.session = {
      jwt: jwt.sign(
        { email, userId: newUser._id },
        config.jsonWebToken.JWT_KEY
      ),
    };

    res.status(201).send(newUser);
  }
);

export { router as signUpRouter };
