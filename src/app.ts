import express from 'express';
import { json, urlencoded } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import {
  newPostRouter,
  deletePostRouter,
  updatePostRouter,
  showPostRouter,
  deleteImageRouter,
  addImageRouter,
  newCommentRouter,
  deleteCommentRouter,
  showCommentRouter,
  updateCommentRouter,
} from './routers';

import {
  currentUser,
  errorHandler,
  requireAuth,
  NotFoundError,
} from './common';

import {
  currentUserRouter,
  signInRouter,
  signUpRouter,
  signOutRouter,
} from './routers';

const app = express();
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
  })
);
app.set('trust proxy', true);
app.use(
  urlencoded({
    extended: false /** added after getting proxy to true 51. */,
    // extended: true,
  })
);
app.use(json());
app.use(cookieSession({ signed: false, secure: false }));

app.use(currentUser);

app.use('/api/post', newPostRouter);
app.use('/api/post', requireAuth, deletePostRouter);
app.use('/api/post', requireAuth, updatePostRouter);
app.use('/api/post', requireAuth, addImageRouter);
app.use('/api/post', requireAuth, deleteImageRouter);
app.use('/api/post', showPostRouter);

app.use('/api/comment', requireAuth, newCommentRouter);
app.use('/api/comment', requireAuth, deleteCommentRouter);
app.use('/api/comment', requireAuth, updateCommentRouter);
app.use('/api/comment', showCommentRouter);

app.use('/', signUpRouter);
app.use('/', signInRouter);
app.use('/', signOutRouter);
app.use('/', currentUserRouter);

app.all('*', (req, res, next) => {
  next(new NotFoundError());
});
app.use(errorHandler);
export { app };
