const express= require('express');
const router= express.Router();
const {GetUser}=require("../controllers/user")

//http://localhost:4000/2
router.get ("/:id", GetUser)
//we need arrow function to call something

module.exports = router; 