// const Todo = require('../models/todo')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    const session = jwt.verify(req.headers.token, "boleh")
    req.decoded = session
    next()
  }
  else{
    res.status(401).json({
      msg: 'login dulu, baru masuk mas'
    })
  }
}