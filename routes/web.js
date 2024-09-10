const express = require('express')
const FrontController = require('../controllers/Frontcontroller')
const AdminController = require('../controllers/admin/AdminController')
const UserController = require('../controllers/UserController')
const EngineerController = require('../controllers/EngineerController')
const ParteditController = require('../controllers/ParteditController')
const checkUserAuth = require('../middleware/auth')
const route  = express.Router()



route.get('/',FrontController.home)
route.get('/register',FrontController.regitser)
route.get('/login',FrontController.login)
// User Controller
 route.post('/userinsert',FrontController.userInsert)
 route.post('/verifylogin',FrontController.verifylogin)
 route.get('/logout',FrontController.logout)

// Admin Controller
route.get('/admin/dashboard',AdminController.dashboard)



// User Controller
route.get('/user/dashboard',checkUserAuth,UserController.dashboard)
route.get('/user/addcomplaint',checkUserAuth,UserController.addcomplaint)
route.post('/user/insertcomplaint',checkUserAuth,UserController.insertcomplaint)
route.get('/user/viewcomplaint/:id',checkUserAuth,UserController.viewcomaplint)
route.get('/user/editcomplaint/:id',checkUserAuth,UserController.editcomplaint)
route.post('/user/updatecomplaint/:id',checkUserAuth,UserController.updatecomplaint)
route.get('/user/printcomplaint/:id',checkUserAuth,UserController.printcomplaint)
// route.get('/user/deletecomplaint/:id',UserController.deletecomplaint)
route.get('/user/delivered',checkUserAuth,UserController.delivery)
route.get('/user/ok',checkUserAuth,UserController.ok)
route.get('/user/okedit/:id',checkUserAuth,UserController.okedit)
route.post('/user/okupdate/:id',UserController.okupdate)
route.get('/user/rwredit/:id',checkUserAuth,UserController.rwredit)
route.post('/user/rwrupdate/:id',UserController.rwrupdate)
route.get('/user/rwrdelivered',checkUserAuth,UserController.rwrdelivered)
route.get('/user/rwr',checkUserAuth,UserController.rwr)
route.get('/user/process',checkUserAuth,UserController.process)
route.get('/user/todaycomplaint',checkUserAuth,UserController.todaycomplaints)
route.get("/user/reportpage",checkUserAuth, UserController.reportsPage);
route.post("/user/reports/month-wise",checkUserAuth, UserController.monthWiseReport);
route.post("/user/reports/date-wise",checkUserAuth, UserController.dateWiseReport);


// Part COntroller
route.get('/user/partdisplay',checkUserAuth,ParteditController.partdisplay)
route.get('/user/editpart/:id',checkUserAuth,ParteditController.partedit)
route.post('/user/updatepart/:id',ParteditController.updatepart)



// engineer Controller
route.get('/engineer/dashboard',EngineerController.dashboardengineer)
route.get('/engineer/addengineer',EngineerController.addengineer)
route.post('/engineer/insertengineer',EngineerController.insertengineer)








module.exports = route