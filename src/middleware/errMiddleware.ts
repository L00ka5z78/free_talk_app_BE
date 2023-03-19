import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../interfaces/customErr';

export const errMiddleware = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: 'Something went wrong' });
};
