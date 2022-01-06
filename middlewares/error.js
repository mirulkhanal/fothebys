import ErrorHandler from '../utils/errorHandler';

export default function (err, req, res, next) {
  err.statusCode = err.statusCode || 500;

  if (err.name === 'OverwriteModelError') {
    err = new ErrorHandler('Refresh server to avoid overiding model', 501);
  }

  if (err.name === 'CastError') {
    err = new ErrorHandler('Invalid ID', 404);
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    err = new ErrorHandler(messages, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    err,
    message: err.message,
    stack: err.stack,
  });
}
