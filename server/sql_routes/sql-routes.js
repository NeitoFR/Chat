var express = require('express'),
sql  = require('./sql-query');

var app = module.exports = express.Router();
app.get('/userInfo', function(req, res) {
  sql.getAllUser(function(err, data){
    if(err){ 
      //console.log('Request : SELECT * FROM USER_TABLE :: ERROR');
      res.status(400).send(err).end();
    }
    else{
      //console.log('Request : SELECT * FROM USER_TABLE :: OK');
      res.status(200).send(data).end();
    }
  });
});

app.get('/userInfo/:user_id', function(req, res) {
  sql.getUserInfo(req.params.user_id, function(err, data){
    if(err){ 
      //console.log('Request : SELECT * FROM USER_TABLE :: ERROR');
      res.status(400).send(err).end();
    }
    else{
      //console.log('Request : SELECT * FROM USER_TABLE :: OK');
      res.status(200).send(data).end();
    }
  });
});  
app.get('/pillInfo/:pill_id', function(req, res) {
  sql.getPillInfo(req.params.pill_id, function(err, data){
    if(err){ 
      //console.log('Request : SELECT * FROM USER_TABLE :: ERROR');
      res.status(400).send(err).end();
    }
    else{
      //console.log('Request : SELECT * FROM USER_TABLE :: OK');
      res.status(200).send(data).end();
    }
  });
});