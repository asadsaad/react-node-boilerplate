const express = require('express')
const router = express.Router()
const User = require('../models/user')
const userController = require('../Controllers/user-controller')



router.get('/',userController.getAllinfo)
router.get('/:id',userController.getSingleinfo)
router.post('/',userController.addinfo)
router.delete('/:id',userController.deleteinfo)
router.patch('/:id',userController.updateinfo)
router.post('/register',userController.userRegister)

module.exports = router