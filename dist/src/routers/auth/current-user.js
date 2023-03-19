"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserRouter = void 0;
const express_1 = require("express");
const current_user_1 = require("../../middleware/current-user");
const user_controller_1 = require("../../controlerrs/user-controller");
const router = (0, express_1.Router)();
exports.currentUserRouter = router;
router.get('/current-user', current_user_1.currentUser, user_controller_1.currUser
//   async (req: Request, res: Response, next: NextFunction) => {
//     res.status(200).send({ currentUser: req.currentUser });
//   }
);
