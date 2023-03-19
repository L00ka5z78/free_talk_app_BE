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

app.use('/api/post', newPostRouter);
app.use('/api/post', deletePostRouter);
app.use('/api/post', updatePostRouter);
app.use('/api/post', showPostRouter);

app.use('/api/comment', newCommentRouter);
app.use('/api/comment', deleteCommentRouter);
app.use('/api/comment', updateCommentRouter);
app.use('/api/comment', showCommentRouter);

app.all('*', notFoundErr);
app.use(errMiddleware);
startConnection();

app.listen(8080, () =>
  console.log(
    `Server is ON and running on http://${config.server.HOST}:${config.server.PORT}`
  )
);
