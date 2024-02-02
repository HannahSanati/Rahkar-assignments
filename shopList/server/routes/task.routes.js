const express=require('express')
const router=express.Router()
const {adddata,senddata,donedata,deletdata,editedata, updatedata}=require('../controllers/task.Controller')
router.post('/addtitle',adddata)
      .get('/senddatas',senddata)
      .get('/done/:id',donedata)
      .get('/dalet/:id',deletdata)
      .get('/edite/:id',editedata)
      .put('/update/:id',updatedata)
module.exports=router