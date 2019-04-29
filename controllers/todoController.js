const { User, Todo } = require('../models')
// const errorHandiling = require('../middlewares/catch')

class TodoController{
  static getAll(req,res){
    Todo.findAll()
    .then(rows=>{
      res.json(rows)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        msg: "Server lagi ngaco",
        info: err
      })})
  }
  static getOne(req,res){
    Todo.findOne({where:{id: req.params.id}})
    .then(row=>{
      res.json(row)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        msg: "Server lagi ngaco",
        info: err
      })})
  }
  static create(req,res){
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      UserId: req.body.UserId
    },{returning: true})
    .then((row)=>{
      res.json(row)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        msg: "Server lagi ngaco",
        info: err
      })})
  }
  static delete(req,res){
    Todo.destroy({where:{id: req.params.id}})
    .then(row=>{
      res.json(row)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        msg: "Server lagi ngaco",
        info: err
      })})
  }
  static update(req,res){
    Todo.update({
      title:req.body.title,
      description:req.body.description
    },{
      where:{id: req.params.id},
      returning: true
    })
    .then(row=>{
      res.json(row)
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        msg: "Server lagi ngaco",
        info: err
      })})
  }
}

module.exports = TodoController