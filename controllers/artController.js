import Art from '../model/art';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIUtils from '../utils/apiUtils';
import cloudinary from 'cloudinary';

const getAllArts = catchAsyncErrors(async (req, res, next) => {
  const apiUtils = new APIUtils(
    Art.find({ archived: false }),
    req.query
  ).filter();

  const arts = await apiUtils.query;
  if (!arts) {
    return next(new ErrorHandler('No arts available at the moment', 404));
  }

  res.status(200).json({
    success: true,
    arts,
  });
});

const getAdminArts = catchAsyncErrors(async (req, res, next) => {
  const arts = await Art.find();
  if (!arts) {
    return next(new ErrorHandler('No arts available at the moment', 404));
  }

  res.status(200).json({
    success: true,
    arts,
  });
});
const addArt = catchAsyncErrors(async (req, res) => {
  let art;
  if (req.body.image_url) {
    const uploader = await cloudinary.v2.uploader.upload(req.body.image_url, {
      folder: 'auction/art_images',
    });
    art = new Art({
      ...req.body,
      image_url: {
        public_id: uploader.public_id,
        url: uploader.secure_url,
      },
    });
  } else {
    art = new Art(req.body);
  }

  await art.save();
  res.status(200).json({
    success: true,
    art,
  });
});

const getArtById = catchAsyncErrors(async (req, res, next) => {
  const art = await Art.findById(req.query.id);
  console.debug('Bakcned controller');
  console.debug(req.query.id);
  if (!art) {
    return next(new ErrorHandler('Art not found', 404));
  }

  res.status(200).json({
    success: true,
    art,
  });
});

const updateArtById = catchAsyncErrors(async (req, res, next) => {
  let art;

  if (req.body.image_url) {
    console.log(req.body.image_url);
    await cloudinary.v2.uploader.destroy(art.image_url.public_id);
    const uploader = await cloudinary.v2.uploader.upload(req.body.image_url, {
      folder: 'auction/art_images',
    });
  }

  art = await Art.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    art,
  });
});

const removeArtById = catchAsyncErrors(async (req, res, next) => {
  let art = await Art.findById(req.query.id);

  if (!art) {
    return next(new ErrorHandler('Art not found', 404));
  }
  if (req.body.image_url) {
    await cloudinary.v2.uploader.destroy(art.image_url.public_id);
  }
  await art.remove();

  res.status(200).json({
    success: true,
    message: 'Successfully removed art from the database',
  });
});
export {
  getAllArts,
  addArt,
  getArtById,
  updateArtById,
  removeArtById,
  getAdminArts,
};
