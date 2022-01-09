import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from './catchAsyncErrors';

import { getSession } from 'next-auth/react';
const checkAuthUser = catchAsyncErrors(async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return next(new ErrorHandler('Please login to access this page'));
  }

  req.user = session.user;
  next();
});

export default checkAuthUser;
