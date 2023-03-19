import express from 'express';
import { json, urlencoded } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
import {
  newPostRouter,
  deletePostRouter,
  updatePostRouter,
  showPostRouter,
  newCommentRouter,
  deleteCommentRouter,
  showCommentRouter,
  updateCommentRouter,
} from './routers';
import { startConnection } from './utils/dbConnection';
import config from './config/config';
import { notFoundErr } from './middleware/notFoundErr';
import { errMiddleware } from './middleware/errMiddleware';
import { currentUser, requireAuth } from './common';

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
    extended: false /** added after etting proxy to true 51. */,
    // extended: true,
  })
);
app.use(json());
app.use(cookieSession({ signed: false, secure: false }));

app.use(currentUser);

//requireAuth causes error in postman: sth went wrong from my custom err
app.use('/api/post', newPostRouter);
app.use('/api/post', requireAuth, deletePostRouter);
app.use('/api/post', requireAuth, updatePostRouter);
app.use('/api/post', showPostRouter);

app.use('/api/comment', requireAuth, newCommentRouter);
app.use('/api/comment', requireAuth, deleteCommentRouter);
app.use('/api/comment', requireAuth, updateCommentRouter);
app.use('/api/comment', showCommentRouter);

app.all('*', notFoundErr);
app.use(errMiddleware);
startConnection();

app.listen(8080, () =>
  console.log(
    `Server is ON and running on http://${config.server.HOST}:${config.server.PORT}`
  )
);
