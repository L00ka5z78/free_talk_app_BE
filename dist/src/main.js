"use strict";
// import express from 'express';
// import { json, urlencoded } from 'body-parser';
// import cookieSession from 'cookie-session';
// import cors from 'cors';
// import {
//   newPostRouter,
//   deletePostRouter,
//   updatePostRouter,
//   showPostRouter,
//   deleteImageRouter,
//   addImageRouter,
//   newCommentRouter,
//   deleteCommentRouter,
//   showCommentRouter,
//   updateCommentRouter,
// } from './routers';
// import { startConnection } from './utils/dbConnection';
// import config from './config/config';
// import {
//   currentUser,
//   errorHandler,
//   requireAuth,
//   NotFoundError,
// } from './common';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.use(
//   cors({
//     origin: '*',
//     optionsSuccessStatus: 200,
//   })
// );
// app.set('trust proxy', true);
// app.use(
//   urlencoded({
//     extended: false /** added after getting proxy to true 51. */,
//     // extended: true,
//   })
// );
// app.use(json());
// app.use(cookieSession({ signed: false, secure: false }));
// app.use(currentUser);
// //requireAuth causes error in postman: sth went wrong from my custom err
// app.use('/api/post', newPostRouter);
// app.use('/api/post', requireAuth, deletePostRouter);
// app.use('/api/post', requireAuth, updatePostRouter);
// app.use('/api/post', requireAuth, addImageRouter);
// app.use('/api/post', requireAuth, deleteImageRouter);
// app.use('/api/post', showPostRouter);
// app.use('/api/comment', requireAuth, newCommentRouter);
// app.use('/api/comment', requireAuth, deleteCommentRouter);
// app.use('/api/comment', requireAuth, updateCommentRouter);
// app.use('/api/comment', showCommentRouter);
// app.all('*', (req, res, next) => {
//   next(new NotFoundError());
// });
// app.use(errorHandler);
const dbConnection_1 = require("./utils/dbConnection");
const config_1 = __importDefault(require("./config/config"));
const app_1 = require("./app");
(0, dbConnection_1.startConnection)();
app_1.app.listen(8080, () => console.log(`Server is ON and running on http://${config_1.default.server.HOST}:${config_1.default.server.PORT}`));
