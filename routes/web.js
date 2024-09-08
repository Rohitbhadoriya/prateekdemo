const express = require('express')
const FrontController = require('../controllers/Frontcontroller')
const AdminController = require('../controllers/admin/AdminController')
const UserController = require('../controllers/UserController')
const EngineerController = require('../controllers/EngineerController')
const ParteditController = require('../controllers/ParteditController')
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
route.get('/user/deletecomplaint/:id',UserController.deletecomplaint)
route.get('/user/delivered',UserController.delivery)
route.get('/user/ok',UserController.ok)
route.get('/user/okedit/:id',UserController.okedit)
route.post('/user/okupdate/:id',UserController.okupdate)

route.get('/user/rwr',UserController.rwr)
route.get('/user/process',UserController.process)

route.get('/user/todaycomplaint',UserController.todaycomplaints)
route.get('/user/partdisplay',ParteditController.partdisplay)
route.get('/user/editpart/:id',ParteditController.partedit)
route.post('/user/updatepart/:id',ParteditController.updatepart)



// engineer Controller
route.get('/engineer/dashboard',EngineerController.dashboardengineer)
route.get('/engineer/addengineer',EngineerController.addengineer)
route.post('/engineer/insertengineer',EngineerController.insertengineer)








module.exports = route