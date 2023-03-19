"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentRouter = void 0;
const express_1 = require("express");
const comment_controller_1 = require("../../controlerrs/comment-controller");
const router = (0, express_1.Router)();
exports.deleteCommentRouter = router;
router.delete('/:commentId/delete/:postId', comment_controller_1.deleteComment
// async (req: Request, res: Response, next: NextFunction) => {
//   const { postId, commentId } = req.params;
//   if (!commentId || !postId) {
//     const error = new Error(
//       'post id and comment id are required!'
//     ) as CustomError;
//     error.status = 400;
//     next(error);
//   }
//   try {
//     await Comment.findOneAndRemove({ _id: commentId });
//   } catch (err) {
//     next(new Error('comment cannot be updated!'));
//   }
//   await Post.findOneAndUpdate(
//     { _id: postId },
//     { $pull: { comments: commentId } }
//   );
//   res.status(200).json({ success: true });
// }
);
