import User from '../models/User.js'

const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ user })
  } catch (error) {
    // pass to error handler 
    next(error)
  }
}


const login = (req, res) => {
  res.send('user login')
}


const updateUser = (req, res) => { 
  res.send('update user')
}

export { register, login, updateUser  }