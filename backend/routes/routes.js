const express = require('express')
const router = express.Router()
const {User} = require('../models/user')
const userController = require('../Controllers/user-controller')
const jwt = require('jsonwebtoken')
const {auth} = require('../auth')




router.get('/',auth,userController.getAllinfo)
router.get('/logout',auth,userController.logout)

router.get('/:id',userController.getSingleinfo)
router.post('/',userController.addinfo)
router.delete('/:id',userController.deleteinfo)
router.patch('/:id',userController.updateinfo)
router.post('/register',userController.userRegister)
router.post('/login',userController.userlogin)



module.exports = router