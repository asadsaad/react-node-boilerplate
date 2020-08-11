const express = require('express')
const router = express.Router()
const {User} = require('../models/user')
const userController = require('../Controllers/user-controller')
const productController = require('../Controllers/product-controller')

const jwt = require('jsonwebtoken')
const {auth} = require('../auth')




// router.get('/',auth,userController.getAllinfo)
router.get('/logout',auth,userController.logout)


router.get('/:id',userController.getSingleuser)
router.get('/',auth,userController.currenuser)

router.post('/',userController.addinfo)
router.delete('/:id',userController.deleteinfo)
// router.patch('/:id',userController.updateinfo)
router.post('/register',userController.userRegister)
router.post('/login',userController.userlogin)

router.post('/product',auth,productController.addproduct)
router.patch('/:id',auth,productController.updateproduct)




module.exports = router