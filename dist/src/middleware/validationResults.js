"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResult = void 0;
const express_validator_1 = require("express-validator");
const common_1 = require("../common");
const validateResult = (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({msg: errors.array()[0].msg});
    // }
    // next();
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return next(new common_1.RequestValidationError(errors.array()));
    }
    next();
};
exports.validateResult = validateResult;
