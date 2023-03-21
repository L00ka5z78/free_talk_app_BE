"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostRouter = void 0;
const express_1 = require("express");
const common_1 = require("src/common");
const post_controller_1 = require("../../controlerrs/post-controller");
const router = (0, express_1.Router)();
exports.updatePostRouter = router;
router.post('/update/:id', common_1.updatePostRequirements, common_1.validateResult, post_controller_1.updatePost
// async (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.params;
//   const { content, title } = req.body;
//   if (!id) {
//     const error = new Error('post id is required') as CustomError;
//     error.status = 400;
//     next(error);
//   }
//   let updatedPost;
//   try {
//     updatedPost = await Post.findOneAndUpdate(
//       { _id: id },
//       { $set: { content, title } },
//       { new: true }
//     );
//   } catch (err) {
//     const error = new Error('post cannot be updated!') as CustomError;
//     error.status = 400;
//     next(error);
//   }
//   res.status(200).send(updatedPost);
// }
);
