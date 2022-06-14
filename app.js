'use strict';

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./src/index')

const hbs = require('hbs')
//const register = require('./templates/register.hbs')
debugger
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

const viewPath = path.join(__dirname, './templates')
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))
const partialPath = path.join(__dirname, './templates/partials')
hbs.registerPartials(partialPath)                    

app.set('view engine', 'hbs')
app.set('views', viewPath)

//var sqlConfig = require('./Database/sqlConfig')

app.use(bodyParser.json())
app.use('/',  routes);
//app.use('/', register);



// app.get('/edit', (req, res) => {
//     res.render('edit')
//   }) 

app.get('/login', (req, res) => {
    res.render('login')
  }) 

app.get('/create', (req, res) => {
  res.render('create')
})

 app.get('/register', (req, res) => {
  res.render('register')
})


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});