import User from '../model/user';
// import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import cloudinary from 'cloudinary';

// setup up cloudinary for image upload
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
export const registerUser = catchAsyncErrors(async (req, res) => {
  let user;
  if (req.body.profile_image) {
    const uploader = await cloudinary.v2.uploader.upload(
      req.body.profile_image,
      {
        folder: 'auction/profile_images',
        width: '150',
        crop: 'scale',
      }
    );
    user = new User({
      ...req.body,
      profile_image: {
        public_id: uploader.public_id,
        url: uploader.secure_url,
      },
    });
  } else {
    user = new User(req.body);
  }

  await user.save();
  res.status(200).json({
    success: true,
    user,
  });
});

export const getAuthUser = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const getAllUsers = catchAsyncErrors(async (req, res) => {
  const users = await User.find();
  // console.log(users);
  if (!users) {
    return next(new ErrorHandler('User not found', 404));
  }
  res.status(200).json({
    success: true,
    users,
  });
});

export const deleteUser = catchAsyncErrors(async (req, res) => {
  const userID = req.query.id;

  await User.findByIdAndDelete(userID);

  res.status(200).json({
    success: true,
  });
});
