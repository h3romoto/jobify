import express from 'express'
import notFoungMiddleware from './middlleware/not-found.js'

const app = express()


// middleware
notFoungMiddleware

app.get('/', (req, res) => {
  res.send('My son, welcome home!')
})

app.use(notFoungMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}`))