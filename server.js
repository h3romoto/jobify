import dotenv from 'dotenv'
import express from 'express'
const app = express()

dotenv.config()

// db and authenticator
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRoutes from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middlleware/not-found.js'
import errorHandlerMiddleware from './middlleware/error-handler.js'

app.use(express.json())

app.get('/', (req, res) => {
  // throw new Error('error my boi')
  res.send('My son, welcome home!')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRoutes)

app.use(notFoundMiddleware)
// place error handler here at the bottom
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error);
  }
}

start()