import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from '@src/utils/appError';

export const httpErrorHandler = (error: AppError | ZodError, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      status: 400,
      errors: error.errors,
    });
  } else {
    const status = error.status || 500;
    const message = error.message || 'something went wrong';
    res.status(status).json({ status, message });
  }
};

export const pathErrorHandler = (req: Request, res: Response) => {
  res.status(404).json({ status: 404, message: 'path not found' });
};
