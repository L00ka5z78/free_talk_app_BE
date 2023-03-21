"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCommentRouter = void 0;
const express_1 = require("express");
const common_1 = require("../../common");
const comment_controller_1 = require("../../controlerrs/comment-controller");
const router = (0, express_1.Router)();
exports.newCommentRouter = router;
router.post('/new/:postId', common_1.createCommentRequirements, common_1.validateResult, comment_controller_1.createNewComment
// async (req: Request, res: Response, next: NextFunction) => {
//   const { userName, content } = req.body;
//   const { postId } = req.params;
//   if (!content) {
//     const error = new Error('content is required!') as CustomError;
//     error.status = 400;
//     return next(error);
//   }
//   const newComment = new Comment({
//     userName: userName ? userName : 'anonymous',
//     content,
//   });
//   await newComment.save();
//   const updatedPost = await Post.findOneAndUpdate(
//     { _id: postId },
//     { $push: { comments: newComment } },
//     { new: true }
//   );
//   res.status(201).send(updatedPost);
// }
);
