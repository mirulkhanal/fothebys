import mongoose from 'mongoose';

const auctionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Auction ||
  mongoose.model('Auction', auctionSchema);
