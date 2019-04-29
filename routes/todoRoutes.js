const express = require('express')
const router = express.Router()
const TodoCont = require('../controllers/todoController')
const UserCont = require('../controllers/userController')

const { User, Todo } = require('../models')

const Authorize = require('../middlewares/authorize')
const Authenticate = require('../middlewares/authenticate')

router.get('/', TodoCont.getAll)

router.post('/', Authenticate, TodoCont.create)

router.get('/:id', Authenticate, Authorize, TodoCont.getOne)
router.delete('/:id', Authenticate, Authorize, TodoCont.delete)
router.put('/:id', Authenticate, Authorize, TodoCont.update)
router.patch('/:id', Authenticate, Authorize, TodoCont.update)

module.exports = router