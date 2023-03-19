import { Request, Response, NextFunction } from 'express';
import { NotAuthorized } from '../common';

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) return next(new NotAuthorized());
  next();
};
