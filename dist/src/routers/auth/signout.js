"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOutRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../../controlerrs/user-controller");
const router = (0, express_1.Router)();
exports.signOutRouter = router;
router.get('/signout', user_controller_1.signOutUser
//   async (req: Request, res: Response, next: NextFunction) => {
//     req.session = null;
//     res.send({});
//   }
);
