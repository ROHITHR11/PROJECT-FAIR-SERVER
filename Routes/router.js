const express = require('express')
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

const router = new express.Router()


// REGISTER API

router.post('/register',userController.register)

//login api
router.post('/login',userController.login)
//add project api - route specific middleware
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//HOME PROJECT api
router.get('/get-home-project',projectController.getHomeProject)
//get all project api
router.get('/get-all-project',jwtMiddleware,projectController.getAllProject)
//get user PROJECT api
router.get('/get-user-project',jwtMiddleware,projectController.getUserProject)

//update project
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)

//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)



//updateuser
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)



//exporting router
module.exports = router