const router=require('express').Router()
const {getMail,postMail}=require('../controller/mail.controller.js')
const multer=require("multer")

const upload=multer()


router.get('/',getMail)
router.post('/',upload.single('resume'),postMail)
module.exports=router
