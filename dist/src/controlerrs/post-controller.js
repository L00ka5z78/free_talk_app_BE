"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPost = exports.deletePost = exports.updatePost = exports.createNewPost = void 0;
const post_model_1 = require("../models/post-model");
const common_1 = require("../common");
const createNewPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    if (!title || !content) {
        return next(new common_1.BadRequestError('Fill out all required fields, please'));
    }
    const newPost = new post_model_1.Post({ title, content });
    yield newPost.save();
    res.status(201).send(newPost);
});
exports.createNewPost = createNewPost;
// export const createNewPost = async (
//   req: Request,
//   res: Response,
//   next: (err?: Error) => any
// ) => {
//   const { title, content } = req.body;
//   try {
//     const post = await Post.create({
//       title,
//       content,
//     });
//     res.status(201).json({ message: 'Post created successfully!', post });
//   } catch (error: any) {
//     console.error(error.message);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// };
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { content, title } = req.body;
    if (!id) {
        return next(new common_1.BadRequestError('Id is required'));
    }
    let updatedPost;
    try {
        updatedPost = yield post_model_1.Post.findByIdAndUpdate({ _id: id }, { $set: { content, title } }, { new: true });
    }
    catch (err) {
        return next(new common_1.BadRequestError('Post can not be updated'));
    }
    res.status(200).send(updatedPost);
});
exports.updatePost = updatePost;
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return next(new common_1.BadRequestError('Id is required'));
    }
    try {
        yield post_model_1.Post.findOneAndRemove({ _id: id });
    }
    catch (error) {
        next(new Error('Cant delete this post'));
    }
    res.status(200).json({ success: true });
});
exports.deletePost = deletePost;
const showPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        const allPosts = yield post_model_1.Post.find();
        return res.status(200).send(allPosts);
    }
    const post = yield post_model_1.Post.findOne({ _id: id }).populate('comments');
    res.status(200).send(post);
});
exports.showPost = showPost;
