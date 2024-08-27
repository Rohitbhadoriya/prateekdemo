const express = require('express')
const FrontController = require('../controllers/Frontcontroller')
const AdminController = require('../controllers/admin/AdminController')
const UserController = require('../controllers/UserController')
const route  = express.Router()



route.get('/',FrontController.home)
route.get('/register',FrontController.regitser)
route.get('/login',FrontController.login)
// User Controller
 route.post('/userinsert',FrontController.userInsert)
 route.post('/verifylogin',FrontController.verifylogin)

// Admin Controller
route.get('/admin/dashboard',AdminController.dashboard)



// User Controller
route.get('/user/dashboard',UserController.dashboard)
route.get('/user/addcomplaint',UserController.addcomplaint)
route.post('/user/insertcomplaint',UserController.insertcomplaint)
route.get('/user/viewcomplaint/:id',UserController.viewcomaplint)
route.get('/user/editcomplaint/:id',UserController.editcomplaint)
route.post('/user/updatecomplaint/:id',UserController.updatecomplaint)
route.get('/user/printcomplaint/:id',UserController.printcomplaint)

module.exports = route