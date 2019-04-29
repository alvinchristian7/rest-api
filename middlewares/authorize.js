const Todo = require('../models').Todo

module.exports = (req, res, next) => {
  // console.log(req.decoded,req.params.id)
  Todo.findOne({where:{id:req.params.id}})
  .then(row=>{
    if(req.decoded.id == row.UserId){
      next()
    }
    else{
      res.status(401).json({
        msg: 'Not Authorized'
      })
    }
  })
  .catch(err=>{
    res.status(400).json({
      msg: "Todo gak ketemu"
    })
  })
}