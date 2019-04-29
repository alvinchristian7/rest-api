const { User, Todo } = require('../models')
// const error = require('../middlewares/catch')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserController{
  static getAll(req,res){
    User.findAll()
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
    User.findOne({where:{id: req.params.id}})
    .then(row=>{
      res.json(row)
      return row
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        msg: "Server lagi ngaco",
        info: err
      })})
  }
  static create(req,res){
    // res.send(req.body)
    User.create({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
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
    User.destroy({where:{id: req.params.id}})
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
    
    User.update({
      username:req.body.username,
      password:req.body.password
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
  static login(req,res){
    const {username,password} = req.body
    // res.send({username,password})
    
    User.findOne({where:{username}})
    .then(row=>{
      // res.send(row)
      if(row){
        const check = bcrypt.compareSync(password,row.password)
        if(check){
          const token = jwt.sign({
            id:row.id,
            username:row.username
          }, "boleh",{algorithm:"HS256",expiresIn:"7d"})
          res.json(token)
        }
        else{
          res.status(400).json({
            msg: 'Invalid username/password'
          })
        }
      }
      else res.status(400).json({
        msg: 'Invalid username/password'
      })
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({
        msg: "Server lagi ngaco",
        info: err
      })})
  }
}

module.exports = UserController