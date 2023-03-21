"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPostRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../../controlerrs/post-controller");
const common_1 = require("../../common");
const router = (0, express_1.Router)();
exports.newPostRouter = router;
router.post('/new', common_1.createPostRequirements, common_1.validateResult, 
// uploadImages,
post_controller_1.createNewPost);
