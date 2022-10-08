import validator from "validator";
import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
    unique: true,
    validate: {
      validator: validator.isEmail, 
      message: 'Please provide a valid email address'
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
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

// custom Mongoose method
UserSchema.methods.createJWT = function() {
  return jwt.sign({id:this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})
}

// hash password before saving it
UserSchema.pre('save', async function() {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt)
  console.log(this.password)

})

export default mongoose.model('User', UserSchema)