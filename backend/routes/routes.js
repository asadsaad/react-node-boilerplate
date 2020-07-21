const express = require('express')
const router = express.Router()
const Info = require('../models/user')
const infoController = require('../Controllers/info-controller')



router.get('/',infoController.getAllinfo)
router.get('/:id',infoController.getSingleinfo)
router.post('/',infoController.addinfo)
router.delete('/:id',infoController.deleteinfo)
router.patch('/:id',infoController.updateinfo)

module.exports = router