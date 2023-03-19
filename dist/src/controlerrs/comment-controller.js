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
exports.showComment = exports.updateComment = exports.deleteComment = exports.createNewComment = void 0;
const comment_model_1 = require("../models/comment-model");
const post_model_1 = require("../models/post-model");
const common_1 = require("../common");
const createNewComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, content } = req.body;
    const { postId } = req.params;
    if (!content) {
        return next(new common_1.BadRequestError('Fill out all required fields, please'));
    }
    const newComment = comment_model_1.Comment.build({
        userName: userName ? userName : 'anonymous',
        content,
    });
    yield newComment.save();
    const updatedPost = yield post_model_1.Post.findOneAndUpdate({ _id: postId }, { $push: { comments: newComment } }, { new: true });
    res.status(201).send(updatedPost);
});
exports.createNewComment = createNewComment;
const deleteComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { commentId, postId } = req.params;
    if (!commentId || postId) {
        return next(new common_1.BadRequestError('Id is required'));
    }
    try {
        yield comment_model_1.Comment.findOneAndRemove({ _id: commentId });
    }
    catch (error) {
        next(new Error('Cant delete this comment'));
    }
    const post = yield post_model_1.Post.findOneAndUpdate({ _id: postId }, { $pull: { comments: commentId } }, { new: true });
    if (!post)
        return next(new Error());
    res.status(200).send(post);
});
exports.deleteComment = deleteComment;
const updateComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { content, userName } = req.body;
    if (!id) {
        return next(new common_1.BadRequestError('Id is required'));
    }
    let updatedComment;
    try {
        updatedComment = yield comment_model_1.Comment.findByIdAndUpdate({ _id: id }, { $set: { content, userName } }, { new: true });
    }
    catch (err) {
        return next(new common_1.BadRequestError('Comment can not be updated'));
        //   error.status = 400;
        //   next(error);
    }
    res.status(200).send(updatedComment);
});
exports.updateComment = updateComment;
const showComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        const allComments = yield comment_model_1.Comment.find();
        return res.status(200).send(allComments);
    }
    //   const post = await Comment.findOne({ _id: id }).populate('comments');
    const comment = yield comment_model_1.Comment.findOne({ _id: id });
    res.status(200).send(comment);
});
exports.showComment = showComment;
