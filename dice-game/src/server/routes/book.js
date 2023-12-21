const express= require('express');
const router= express.Router();
const {GetBooks}=require("../controllers/book")

//http://localhost:4000/2
router.get ("/:id", GetBooks)
//we need arrow function to call something

module.exports = router; 