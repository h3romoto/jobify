import validator from "validator";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true,    
  },
  specs: {
    os: {
      name: String, ver: Number, trim:true
    },
    ram: Number,
    storage: Number,
    cpu: Number,
  },
  region: {
    type: String,
    trim: true, 
  },
  tier: {
    type: String,
    trim: true, 
  },
  pub_key: {
    type: String,
    trim: true,
  },
});
