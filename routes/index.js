const express = require('express')
const router = express.Router()
const todoRoutes = require('./todoRoutes')
const userRoutes = require('./userRoutes')
const UserCont = require('../controllers/userController')

router.use('/users',userRoutes)
router.use('/todos',todoRoutes)
router.post('/signup',UserCont.create)
router.post('/signin',UserCont.login)

module.exports = router