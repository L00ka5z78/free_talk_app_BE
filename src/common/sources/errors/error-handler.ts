import { Request, Response, NextFunction, Router } from 'express';
import { CustomError } from './custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.generateErrors() });
  }
  res.status(500).json({ errors: [{ message: 'something went wrong' }] });
};
