import { Request, Response, NextFunction, Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';

declare global {
  interface JwtPayload {
    email: string;
    userId: string;
  }
  namespace Express {
    interface Request {
      currentUser?: JwtPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  //verify user
  try {
    const payload = jwt.verify(
      req.session?.jwt,
      config.jsonWebToken.JWT_KEY
    ) as JwtPayload;
    req.currentUser = payload;
  } catch (error) {
    return next(error);
  }
  next();
};
