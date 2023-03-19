"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPostRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../../controlerrs/post-controller");
const router = (0, express_1.Router)();
exports.newPostRouter = router;
router.post('/new', post_controller_1.createNewPost);
