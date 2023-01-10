const express = require("express")
const router = express.Router()
const{signupUser,loginUser,getUsersByRole}=require("../controllers/user.controller")

//login route
router.post("/login",loginUser)
//signup route
router.post("/signup",signupUser)

// Get All Users
router.get("/users",getUsersByRole)

module.exports=router