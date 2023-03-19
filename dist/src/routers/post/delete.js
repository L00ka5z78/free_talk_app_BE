"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../../controlerrs/post-controller");
const router = (0, express_1.Router)();
exports.deletePostRouter = router;
router.delete('/delete/:id', post_controller_1.deletePost
// async (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.params;
//   if (!id) {
//     const error = new Error('post id is required!') as CustomError;
//     error.status = 400;
//     next(error);
//   }
//   try {
//     await Post.findOneAndRemove({ _id: id });
//   } catch (err) {
//     next(new Error('post cannot be updated!'));
//   }
//   res.status(200).json({ success: true });
// }
);
