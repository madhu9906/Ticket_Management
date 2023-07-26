import { CustomError } from './custom-error';

export class DbConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Failed to connect to database';
  constructor() {
    super('Failed to connect to database');
    Object.setPrototypeOf(this, DbConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
