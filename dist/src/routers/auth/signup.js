"use strict";
// import { Request, Response, NextFunction, Router } from 'express';
// import { User } from '../../models/user-model';
// const router = Router();
// router.post(
//   '/signup',
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (user) return new Error('User already exists');
//     const newUser = new User({
//       email,
//       password,
//     });
//     await newUser.save();
//     res.status(201).send(newUser);
//   }
// );
// export { router as signUpRouter };
