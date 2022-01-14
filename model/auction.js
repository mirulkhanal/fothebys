import mongoose from 'mongoose';

const auctionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  date: {
    type: String,
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
  archived: {
    type: Boolean,
    default: false,
  },
  arts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Art' }],
});

export default mongoose.models.Auction ||
  mongoose.model('Auction', auctionSchema);
