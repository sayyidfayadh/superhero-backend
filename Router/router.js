const express=require('express')
const router=express.Router()
const nodemail=require("../Controllers/nodeMailer")
const multerConfig = require('../Middlewares/Multer')
const { submitGrievance, getallgrievance, getAllUsergrievance, updateStatus } = require('../Controllers/grievanceController')
const jwtMiddleware = require('../Middlewares/JWT')
const { login, register } = require('../Controllers/userController')
router.post("/login",login)
router.post("/register",register)
router.post("/submit",jwtMiddleware,multerConfig.array('evidence'),submitGrievance)
router.get("/getusersubs",jwtMiddleware,getAllUsergrievance)
//admin
router.get("/fetchallgrievance",getallgrievance)
router.patch("/updatestatus/:id/:status",updateStatus)

//nodemailer
router.post('/send-mail',nodemail.nodemail)

module.exports=router