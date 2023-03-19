"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCommentRouter = void 0;
const express_1 = require("express");
const comment_controller_1 = require("../../controlerrs/comment-controller");
const router = (0, express_1.Router)();
exports.updateCommentRouter = router;
router.patch('/update/:id', comment_controller_1.updateComment);
