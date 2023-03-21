import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../common';

export const validateResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //     return res.status(400).json({msg: errors.array()[0].msg});
  // }
  // next();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }
  next();
};
