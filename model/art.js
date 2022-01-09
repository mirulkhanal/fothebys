import mongoose from 'mongoose';
import { ART_CATEGORIES } from '../constants/ENUMS';

const artSchema = new mongoose.Schema({
  artist_name: {
    type: String,
    required: [true, 'Artist name is required'],
  },
  year_created: {
    type: Number,
    required: [true, 'Year of production is required'],
  },
  title: {
    type: String,
    required: [true, 'Art title is required'],
  },
  classification: {
    type: String,
    required: [true, 'Art classification is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [500, 'Description must be less than 500 characters'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ART_CATEGORIES,
    message:
      'Category must be one of the following: PAINTING, SCULPTURE, DRAWING, PHOTOGRAPHY, OTHER',
  },
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
  depth: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  material: {
    type: String,
  },
  framed: {
    type: Boolean,
  },
  medium: {
    type: String,
  },
  image_url: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Seller is required'],
  },
  bid_amount: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Art || mongoose.model('Art', artSchema);
