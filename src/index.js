var express = require('express');
var app = express();
var router = express.Router();
var sql = require("mssql");
var dbConfig = require('../Database/dbConnection');
var sqlConfig = require('../Database/sqlConfig')
debugger


router.get('/', async function (req, res) {
   console.log("en") 
   var getdata = await sqlConfig.getStuData()
   console.log(getdata)
    res.render('Home',{
        data : getdata
    })    
});


router.get('/delete/:id', async function (req, res) {
    console.log("enn") 
    var deldata = await sqlConfig.deleteStuData(req)
     if(deldata > 0)
     {
    res.redirect('/');  
     }
    else
    {
      console.log("Somthing went wrong")
    }  
 });

 router.post('/insert', async function (req, res) {

    var adddata = await sqlConfig.insertStuData(req)
     if(adddata > 0)
     {
    res.redirect('/');  
     }
    else
    {
      console.log("Somthing went wrong")
    }  
 });
 
 
 router.get('/editStudent/:id',async function (req, res) {

    var getdata = await sqlConfig.editStuData(req)
       res.render('edit',{
         edit : getdata
     })    
 });


 router.post('/updateStudent/:id',async function (req, res) {
    console.log("update") 
    var updatedata = await sqlConfig.updateStuData(req)   
    // console.log(updatedata) 
     res.redirect('/')    
 });
 


module.exports = router;  