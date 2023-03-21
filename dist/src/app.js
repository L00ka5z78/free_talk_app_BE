"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cookie_session_1 = __importDefault(require("cookie-session"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./routers");
const common_1 = require("./common");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({
    origin: '*',
    optionsSuccessStatus: 200,
}));
app.set('trust proxy', true);
app.use((0, body_parser_1.urlencoded)({
    extended: false /** added after getting proxy to true 51. */,
    // extended: true,
}));
app.use((0, body_parser_1.json)());
app.use((0, cookie_session_1.default)({ signed: false, secure: false }));
app.use(common_1.currentUser);
//requireAuth causes error in postman: sth went wrong from my custom err
app.use('/api/post', routers_1.newPostRouter);
app.use('/api/post', common_1.requireAuth, routers_1.deletePostRouter);
app.use('/api/post', common_1.requireAuth, routers_1.updatePostRouter);
app.use('/api/post', common_1.requireAuth, routers_1.addImageRouter);
app.use('/api/post', common_1.requireAuth, routers_1.deleteImageRouter);
app.use('/api/post', routers_1.showPostRouter);
app.use('/api/comment', common_1.requireAuth, routers_1.newCommentRouter);
app.use('/api/comment', common_1.requireAuth, routers_1.deleteCommentRouter);
app.use('/api/comment', common_1.requireAuth, routers_1.updateCommentRouter);
app.use('/api/comment', routers_1.showCommentRouter);
app.all('*', (req, res, next) => {
    next(new common_1.NotFoundError());
});
app.use(common_1.errorHandler);
