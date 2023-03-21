import { body, validationResult } from 'express-validator';

export const signUpRequirements = [
  //   body('email').not().isEmpty().isEmail().withMessage('Insert valid email'),
  body('email').notEmpty().isEmail().withMessage('Insert valid email'),

  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('insert valid password'),
];
/**might not be tho optimal sollution, if it'll not work chage body to check() */
