import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../interfaces/customErr';

export const notFoundErr = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error('not found...') as CustomError;
  error.status = 404;
  next(error);
};
