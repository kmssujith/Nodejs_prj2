const { rejects } = require("assert");
const { response } = require("express");
var sql = require("mssql");
const { resolve } = require("path");
var dbConfig = require('../Database/dbConnection');

 function getStuData() {
     return new Promise((resolve,rejects)=>{
        sql.connect(dbConfig.dbConnection()).then(() => {
                console.log("entered in getstudata")
                 sql.query("SELECT * FROM StudentInfo;", (err, res) => {
                    if (err)
                        console.log(err);        
                   
              console.log( res.recordset)
                    resolve(res.recordset);
                });
            }).catch(err => {
                console.log("error at getstudata : " + err)
            })
     })
    }

     function deleteStuData (req) {
         console.log(req.params)
        return new Promise((resolve,rejects)=>{
           sql.connect(dbConfig.dbConnection()).then(() => {
                   console.log("entered in deletestudata")
                    sql.query("DELETE FROM StudentInfo WHERE ID = " + req.params.id, (err, res) => {
                       if (err)
                           console.log(err);       
                    console.log
                    //resolve(res.redirect('/'));
                       resolve( res.rowsAffected)
                   });
               }).catch(err => {
                   console.log("error at getstudata : " + err)
               })
            })
        }

        
     function insertStuData (req) {
        console.log(req.params)
       return new Promise((resolve,rejects)=>{
          sql.connect(dbConfig.dbConnection()).then(() => {
             var name = sql.query("SELECT Name FROM StudentInfo;")
         
                 console.log("entered in insertstudata")
                  sql.query("INSERT INTO StudentInfo VALUES('" + req.body.Name + "', " + req.body.Age + ")", (err, res) => {
                      if (err)
                          console.log(err);       
                   console.log
                   //resolve(res.redirect('/'));
                      resolve( res.rowsAffected)
                  });
              }).catch(err => {
                  console.log("error at getstudata : " + err)
              })
           })
       }

       function editStuData(req) {
        return new Promise((resolve,rejects)=>{
           sql.connect(dbConfig.dbConnection()).then(() => {
                   console.log("entered in getstudata")
                    sql.query("SELECT * FROM StudentInfo WHERE ID = " + req.params.id, (err, res) => {
                       if (err)
                           console.log(err);    
                                                     
                       resolve(res.recordset);
                   });
               }).catch(err => {
                   console.log("error at getstudata : " + err)
               })
        })
       }                                                                      

       function updateStuData(req) {
        return new Promise((resolve,rejects)=>{
           sql.connect(dbConfig.dbConnection()).then(() => {
                   console.log("entered in getstudata")
                    sql.query("UPDATE StudentInfo SET [Name] = '" + req.body.Name + "', Age = " + req.body.Age + " WHERE ID = " + req.params.id, (err, res) => {
                       if (err)
                           console.log(err);    
                                       
                       resolve(res.recordset);
                          });
               }).catch(err => {
                   console.log("error at getstudata : " + err)
               })
        })
       }              

module.exports ={ getStuData, deleteStuData, insertStuData, editStuData, updateStuData };