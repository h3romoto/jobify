import express from 'express'
const app = express()

// middleware
import notFoungMiddleware from './middlleware/not-found.js'
import errorHandlerMiddleware from './middlleware/error-handler.js'

app.get('/', (req, res) => {
  throw new Error('error my boi')
  res.send('My son, welcome home!')
})

app.use(notFoungMiddleware)
// place error handler here at the bottom
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}`))