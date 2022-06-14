var express = require('express');
var router = express.Router();
var dbConfig = require('../Database/dbConnection');


// router.get('/register', function(req, res, next){

//     res.render('register')

// })
console.log('ewntered registeration')

router.get('/registration', async function (req, res) {
    console.log("en") 
    var getdata = await sqlConfig.getStuData()
    console.log(getdata)
     res.render('Home',{
         data : getdata
         
     })    
 });

router.post('/registratio', function(req, res, next)
{
    
console.log('entered registeration')

    inputData = {
        Name: req.body.Name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password : req.body.password,
        cpassword : req.body.cpassword
    }

    var sql = "select * from registration where email= " ;
    dbConfig.query(sql, [inputData.email], function(err, data, field)
    {
        if(err) throw err
        if(data.length>1){  
            var msg = inputData.email_address+ "was already exist";     
        }
        else 
        if(inputData.confirm_password != inputData.password){
            var msg ="Password & Confirm Password is not Matched";
        }

        else{     
          //INSERT INTO StudentInfo VALUES('" + req.body.Name + "', " + req.body.Age + ")"
            var sql = 'INSERT INTO registration VALUES';
           db.query(sql, inputData, function (err, data) {
              if (err) throw err;
                   });
          var msg ="Your are successfully registered";
         }
         res.render('registration-form',{alertMsg:msg});
        })
        
});

module.exports = router;