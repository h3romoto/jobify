import dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
const app = express()
dotenv.config()

// db and authenticator
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRoutes from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

if (process.env.NODE_ENV != 'production') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Titambire!')
})

app.get('/api/v1', (req, res) => {
  res.send({msg:'API!'})
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