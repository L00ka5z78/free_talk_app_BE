"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundErr = void 0;
const notFoundErr = (req, res, next) => {
    const error = new Error('not found...');
    error.status = 404;
    next(error);
};
exports.notFoundErr = notFoundErr;
