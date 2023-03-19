"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errMiddleware = void 0;
const errMiddleware = (error, req, res, next) => {
    if (error.status) {
        return res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: 'Something went wrong' });
};
exports.errMiddleware = errMiddleware;
