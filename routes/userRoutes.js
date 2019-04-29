const express = require('express')
const router = express.Router()
const UserCont = require('../controllers/userController')

router.get('/',UserCont.getAll)
router.get('/:id',UserCont.getOne)
router.post('/',UserCont.create)
router.delete('/:id',UserCont.delete)
router.put('/:id',UserCont.update)

module.exports = router