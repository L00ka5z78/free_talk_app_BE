import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  constructor() {
    super('Database connection failed');
  }
  generateErrors() {
    return [{ message: 'Database connection failed' }];
  }
}
