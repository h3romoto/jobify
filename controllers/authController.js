import User from '../models/User.js'

const register = async (req, res) => {
  try {
    const user = User.create(req.body)
    res.status(201).json({ user })
  } catch (error) {
    res.status(500).json({ msg: 'Something is not right'})
  }
}
const login = (req, res) => {
  res.send('user login')
}
const updateUser = (req, res) => { 
  res.send('update user')
}

export { register, login, updateUser  }