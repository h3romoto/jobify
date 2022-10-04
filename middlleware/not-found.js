const notFoungMiddleware = (req, res) => 
      res.status(404).send('Route does not exist')

export default notFoungMiddleware