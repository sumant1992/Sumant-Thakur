var express = require('express');
var app = express();
var mongoose = require('mongoose');

var url = "mongodb://localhost:27017/StudentDemo2"


mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on('open',function(){
  console.log("conect to database");
});


app.use(express.json());

const stuRouter = require('./student');
app.use('/stu',stuRouter); 


app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
