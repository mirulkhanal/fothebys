import mongoose from 'mongoose';
import Art from '../model/art';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIUtils from '../utils/apiUtils';

const getAllArts = catchAsyncErrors(async (req, res, next) => {
  const totalArts = await Art.countDocuments();

  const apiUtils = new APIUtils(Art.find(), req.query)
    .search()
    .filter()
    .pagination(4);

  const arts = await apiUtils.query;

  res.status(200).json({
    success: true,
    count: arts.length,
    totalCount: totalArts,
    arts,
  });
});

const addArt = catchAsyncErrors(async (req, res) => {
  const art = new Art(req.body);
  await art.save();
  res.status(200).json({
    success: true,
    art,
  });
});

const getArtById = catchAsyncErrors(async (req, res, next) => {
  const art = await Art.findById(req.query.id);

  if (!art) {
    return next(new ErrorHandler('Art not found', 404));
  }

  res.status(200).json({
    success: true,
    art,
  });
});

const updateArtById = catchAsyncErrors(async (req, res) => {
  let art = await Art.findById(req.query.id);

  if (!art) {
    return next(new ErrorHandler('Art not found', 404));
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

const removeArtById = catchAsyncErrors(async (req, res) => {
  let art = await Art.findById(req.query.id);

  if (!art) {
    return next(new ErrorHandler('Art not found', 404));
  }

  await art.remove();

  res.status(200).json({
    success: true,
    message: 'Successfully removed art from the database',
  });
});
export { getAllArts, addArt, getArtById, updateArtById, removeArtById };
