"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../../controlerrs/user-controller");
const router = (0, express_1.Router)();
exports.signUpRouter = router;
router.post('/signup', user_controller_1.signUpUser
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
