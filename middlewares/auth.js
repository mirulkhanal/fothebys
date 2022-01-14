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

const checkAuthRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Unable to access this page as a ${req.user.role}`,
          403
        )
      );
    }
    next();
  };
};
export { checkAuthUser, checkAuthRoles };
