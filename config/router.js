const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

router.get('/', controller.getHomepage)
router.all('/addArticle', controller.postNewArticle)
router.get('/article/:id', controller.showOneArticle) 

router.all('/editArticle/:id', controller.updateOneArticle) 

router.get('/deleteArticle/:id', controller.deleteOneArticle) 

module.exports = router






