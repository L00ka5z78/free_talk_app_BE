"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRequirements = void 0;
const express_validator_1 = require("express-validator");
exports.signUpRequirements = [
    //   body('email').not().isEmpty().isEmail().withMessage('Insert valid email'),
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('Insert valid email'),
    (0, express_validator_1.body)('password')
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage('insert valid password'),
];
/**might not be tho optimal sollution, if it'll not work chage body to check() */
