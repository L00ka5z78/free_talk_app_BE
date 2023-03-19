import { Request, Response, NextFunction } from 'express';
import config from '../config/config';
import jwt from 'jsonwebtoken';
import { User } from '../models/user-model';
import { authenticationService, BadRequestError } from '../common';

export const signUpUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) return next(new BadRequestError('User already exists'));

  const newUser = new User({
    email,
    password,
  });
  await newUser.save();

  //start cookie session
  req.session = {
    jwt: jwt.sign({ email, userId: newUser._id }, config.jsonWebToken.JWT_KEY),
  };

  res.status(201).send(newUser);
};

export const signInUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return next(new BadRequestError('Wrong credentials'));

  //check if password match
  const isEqual = await authenticationService.comparePassword(
    user.password,
    password
  );
  if (!isEqual) return next(new BadRequestError('Wrong credentials'));
  //generate token
  const token = jwt.sign(
    { email, userId: user._id },
    config.jsonWebToken.JWT_KEY
  );
  //cokkie session start
  req.session = { jwt: token };
  res.status(200).send(user);
};

export const signOutUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.session = null;
  res.send({});
};

export const currUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).send({ currentUser: req.currentUser });
};
