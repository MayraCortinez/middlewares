const router = require('express').Router();
const {index, contact, admin, login, noEntry } = require('../controllers/mainController')
const accessAdmin = require('../middlewares/accessAdmin')

router
    .get('/', index)
    .get('/contact', contact)
    .get('/admin',accessAdmin, admin)
    .get('/login', login)
    .get('/noEntry', noEntry)

module.exports = router