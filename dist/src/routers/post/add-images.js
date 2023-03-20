"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImageRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../../controlerrs/post-controller");
const common_1 = require("../../common");
const router = (0, express_1.Router)();
exports.addImageRouter = router;
router.post('/:id/add/images', common_1.uploadImages, post_controller_1.addImg);
