"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCommentRequirements = exports.createCommentRequirements = exports.updatePostRequirements = exports.createPostRequirements = exports.signInRequirements = exports.signUpRequirements = void 0;
const express_validator_1 = require("express-validator");
exports.signUpRequirements = [
    (0, express_validator_1.check)('email', 'WHOOPS... Insert email')
        .notEmpty()
        .isEmail()
        .normalizeEmail(),
    (0, express_validator_1.check)('password', 'WHOOPS... Password has to be at least 6 characters long')
        .notEmpty()
        .isLength({ min: 6 }),
    // body('email').notEmpty().isEmail().withMessage('Insert valid email'),
    // body('password')
    //   .notEmpty()
    //   .isLength({ min: 6 })
    //   .withMessage('insert valid password'),
];
exports.signInRequirements = [
    (0, express_validator_1.check)('email', 'WHOOPS... Insert email')
        .notEmpty()
        .isEmail()
        .normalizeEmail(),
    (0, express_validator_1.check)('password', 'WHOOPS... Password has to be at least 6 characters long')
        .notEmpty()
        .isLength({ min: 6 }),
];
exports.createPostRequirements = [
    (0, express_validator_1.check)('title', 'WHOOPS... Title is required').notEmpty().trim().escape(),
    (0, express_validator_1.check)('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];
exports.updatePostRequirements = [
    (0, express_validator_1.check)('title', 'WHOOPS... Title is required').notEmpty().trim().escape(),
    (0, express_validator_1.check)('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];
exports.createCommentRequirements = [
    (0, express_validator_1.check)('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];
exports.updateCommentRequirements = [
    (0, express_validator_1.check)('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];
/**might not be tho optimal sollution, if it'll not work chage body to check() */
