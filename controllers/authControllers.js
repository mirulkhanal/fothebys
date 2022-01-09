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
  const uploader = await cloudinary.v2.uploader.upload(req.body.profile_image, {
    folder: 'auction/profile_images',
    width: '150',
    crop: 'scale',
  });
  const user = new User({
    ...req.body,
    profile_image: { public_id: uploader.public_id, url: uploader.secure_url },
  });
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
