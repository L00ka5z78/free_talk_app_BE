"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./routers");
const dbConnection_1 = require("./utils/dbConnection");
const config_1 = __importDefault(require("./config/config"));
const notFoundErr_1 = require("./middleware/notFoundErr");
const errMiddleware_1 = require("./middleware/errMiddleware");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    optionsSuccessStatus: 200,
}));
app.use((0, body_parser_1.urlencoded)({
    extended: true,
}));
app.use((0, body_parser_1.json)());
app.use('/api/post', routers_1.newPostRouter);
app.use('/api/post', routers_1.deletePostRouter);
app.use('/api/post', routers_1.updatePostRouter);
app.use('/api/post', routers_1.showPostRouter);
app.use('/api/comment', routers_1.newCommentRouter);
app.use('/api/comment', routers_1.deleteCommentRouter);
app.use('/api/comment', routers_1.updateCommentRouter);
app.use('/api/comment', routers_1.showCommentRouter);
app.all('*', notFoundErr_1.notFoundErr);
app.use(errMiddleware_1.errMiddleware);
(0, dbConnection_1.startConnection)();
app.listen(8080, () => console.log(`Server is ON and running on http://${config_1.default.server.HOST}:${config_1.default.server.PORT}`));
