import validator from "validator";
import mongoose from "mongoose";

const  UserSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Please provide your name'], 
    minlength: 3, 
    maxlength: 20, 
    trim: true,
  },
  email: {
    type: String, 
    required: [true, 'Please provide your email'],
    validate: {
      validator: validator.isEmail, 
      message: 'Please provide a valid email address'
    },
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please provide a password'],
    minlength: 6, 
  },
  lastName: {
    type: String, 
    maxlength: 20, 
    trim: true,
    default: ' ',
  },
  location: {
    type: String, 
    trim: true,
    maxlength: 20, 
    default: ' ',
  },
})

export default mongoose.model('User', UserSchema)