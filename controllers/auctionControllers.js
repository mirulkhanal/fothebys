import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middlewares/catchAsyncErrors';
import APIUtils from '../utils/apiUtils';
import Auction from '../model/auction';
import Art from '../model/art';

const getAllAuctions = catchAsyncErrors(async (req, res, next) => {
  const apiUtils = new APIUtils(Auction.find(), req.query).search();

  const auctions = await apiUtils.query;
  if (!auctions) {
    return next(new ErrorHandler('No auctions available at the moment', 404));
  }

  res.status(200).json({
    success: true,
    auctions,
  });
});

const getArtsByAuctionId = catchAsyncErrors(async (req, res, next) => {
  const auction = await Auction.findById(req.query.id);
  let { arts } = auction;

  if (!arts && arts.length < 0) {
    return next(new ErrorHandler('No arts in the auction', 404));
  }

  const filteredArts = [];
  for (let art of arts) {
    const auctionArt = await Art.findById(art._id);
    filteredArts.push(auctionArt);
  }
  res.status(200).json({
    success: true,
    arts: filteredArts,
  });
});

const addAuction = catchAsyncErrors(async (req, res) => {
  const auction = new Auction(req.body);
  await auction.save();
  res.status(200).json({
    success: true,
    auction,
  });
});

const getAuctionById = catchAsyncErrors(async (req, res, next) => {
  const auction = await Auction.findById(req.query.id);

  if (!auction) {
    return next(new ErrorHandler('Auction not found', 404));
  }

  res.status(200).json({
    success: true,
    auction,
  });
});

const updateAuctionById = catchAsyncErrors(async (req, res, next) => {
  let auction = await Auction.findById(req.query.id);

  if (!auction) {
    return next(new ErrorHandler('Art not found', 404));
  }

  auction = await Auction.findByIdAndUpdate(
    req.query.id,
    req.body,
    { $push: { arts: req.body.artId } },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    auction,
  });
});

const removeAuctionById = catchAsyncErrors(async (req, res, next) => {
  let auction = await Auction.findById(req.query.id);

  if (!auction) {
    return next(new ErrorHandler('Auction not found', 404));
  }

  await auction.remove();

  res.status(200).json({
    success: true,
    message: 'Successfully removed auction from the database',
  });
});

const removeArtsFromAuction = catchAsyncErrors(async (req, res, next) => {
  const auction = await Auction.findById(req.query.id);
  const artId = req.body.art_id;
  let { arts } = auction;

  if (!arts && arts.length < 0 && !arts.includes(artId)) {
    return next(new ErrorHandler('No arts in the auction', 404));
  }
  arts.remove(artId);
  await Auction.findByIdAndUpdate(req.query.id, { arts });

  res.status(200).json({
    success: true,
    arts,
  });
});

const addArtsToAuction = catchAsyncErrors(async (req, res, next) => {
  const auction = await Auction.findById(req.query.id);
  const art = await Art.findById(req.body.art_id);
  let { arts } = auction;

  if (!arts && arts.length < 0 && arts.includes(art._id)) {
    return next(new ErrorHandler('Art is already in the auction', 404));
  }
  arts.push(art._id);
  await auction.update({ arts });

  res.status(200).json({
    success: true,
    arts,
  });
});
export {
  getAllAuctions,
  getArtsByAuctionId,
  addAuction,
  getAuctionById,
  updateAuctionById,
  removeAuctionById,
  removeArtsFromAuction,
  addArtsToAuction,
};
