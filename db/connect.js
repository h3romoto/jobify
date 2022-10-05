import mongoose from 'mongoose'

//  returns a promise function
const connectDB = (url) => {
  return mongoose.connect(url)
}

export default connectDB