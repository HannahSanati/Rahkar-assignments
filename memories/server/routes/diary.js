const express= require('express');
const router= express.Router();
const {getDate, twentyWords, description}=require("../controllers/diary")


router.get ("/getDate", getDate)
       .post ("/twentyWords", twentyWords )
       .post ("/description", description );
       


module.exports = router; 