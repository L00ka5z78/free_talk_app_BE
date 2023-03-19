"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPostRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../../controlerrs/post-controller");
const router = (0, express_1.Router)();
exports.showPostRouter = router;
router.get('/show/:id', post_controller_1.showPost
// async (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.params;
//   if (!id) {
//     const allPosts = await Post.find();
//     return res.status(200).send(allPosts);
//   }
//   const post = await Post.findOne({ _id: id }).populate('comments');
//   res.status(200).send(post);
// }
);
