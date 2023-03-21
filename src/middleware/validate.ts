import { check, validationResult } from 'express-validator';

export const signUpRequirements = [
  check('email', 'WHOOPS... Insert email')
    .notEmpty()
    .isEmail()
    .normalizeEmail(),
  check('password', 'WHOOPS... Password has to be at least 6 characters long')
    .notEmpty()
    .isLength({ min: 6 }),

  // body('email').notEmpty().isEmail().withMessage('Insert valid email'),

  // body('password')
  //   .notEmpty()
  //   .isLength({ min: 6 })
  //   .withMessage('insert valid password'),
];

export const signInRequirements = [
  check('email', 'WHOOPS... Insert email')
    .notEmpty()
    .isEmail()
    .normalizeEmail(),
  check('password', 'WHOOPS... Password has to be at least 6 characters long')
    .notEmpty()
    .isLength({ min: 6 }),
];

export const createPostRequirements = [
  check('title', 'WHOOPS... Title is required').notEmpty().trim().escape(),
  check('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];

export const updatePostRequirements = [
  check('title', 'WHOOPS... Title is required').notEmpty().trim().escape(),
  check('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];

export const createCommentRequirements = [
  check('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];

export const updateCommentRequirements = [
  check('content', 'WHOOPS... Content is required').notEmpty().trim().escape(),
];

/**might not be tho optimal sollution, if it'll not work chage body to check() */
