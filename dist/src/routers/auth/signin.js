"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../../controlerrs/user-controller");
const router = (0, express_1.Router)();
exports.signInRouter = router;
router.post('/signin', user_controller_1.signInUser
// async (req: Request, res: Response, next: NextFunction) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) return next(new Error('Wrong credentials'));
//   //check if password match
//   const isEqual = await authenticationService.comparePassword(
//     user.password,
//     password
//   );
//   if (!isEqual) return next(new Error('Wrong credentials'));
//   //generate token
//   const token = jwt.sign(
//     { email, userId: user._id },
//     config.jsonWebToken.JWT_KEY
//   );
//   //cokkie session start
//   req.session = { jwt: token };
//   res.status(200).send(user);
// }
);
