"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImageRouter = void 0;
const express_1 = require("express");
const post_controller_1 = require("../../controlerrs/post-controller");
const router = (0, express_1.Router)();
exports.deleteImageRouter = router;
router.delete('/:id/delete/images', post_controller_1.deleteImg);
