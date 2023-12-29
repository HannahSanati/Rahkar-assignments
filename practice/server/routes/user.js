const express= require('express');
const router= express.Router();
const {GetUser, Register, login}=require("../controllers/user")

//http://localhost:4000/2
router.get ("/getuser", GetUser)
       .post ("/register", Register )
       .post ("/login", login );
       
//we need arrow function to call something

module.exports = router; 