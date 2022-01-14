import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

import { USER_TYPES } from '../constants/userTypes';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'An Email address is required for the user to register'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'A password is required for the user to register'],
    minlength: [8, 'Password must be at least 8 characters long'],
  },
  role: {
    type: String,
    enum: USER_TYPES,
    default: 'BUYER',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: [true, 'A name is required for the user to register'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number required'],
    validate: [validator.isMobilePhone, 'Please provide a valid phone number'],
  },
  address: {
    type: String,
    required: [true, 'Address required'],
  },
  profile_image: {
    public_id: String,
    url: String,
    required: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

userSchema.methods.decryptPassword = async function (hashedpassword) {
  const passwordMatched = await bcrypt.compare(hashedpassword, this.password);
  return passwordMatched;
};
export default mongoose.models.User || mongoose.model('User', userSchema);
