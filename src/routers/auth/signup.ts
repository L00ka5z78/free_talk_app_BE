import { Request, Response, NextFunction, Router } from 'express';
import { signUpUser } from '../../controlerrs/user-controller';
import { signUpRequirements } from '../../middleware/validate';
import { validateResult } from '../../middleware/validationResults';

const router = Router();

router.post(
  '/signup',
  signUpRequirements,
  validateResult,
  signUpUser
  // async (req: Request, res: Response, next: NextFunction) => {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });
  //   if (user) return next(new Error('User already exists'));

  //   const newUser = new User({
  //     email,
  //     password,
  //   });
  //   await newUser.save();

  //   //start cookie session
  //   req.session = {
  //     jwt: jwt.sign(
  //       { email, userId: newUser._id },
  //       config.jsonWebToken.JWT_KEY
  //     ),
  //   };

  //   res.status(201).send(newUser);
  // }
);

export { router as signUpRouter };
