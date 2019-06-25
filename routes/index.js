var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var record = require('../models/information');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aapka Swagat Hai!' });
});
router.get('/edit', function(req, res, next) {
  record.find({_id:req.query.id},function(err,result){
    res.render('edit', { title: 'Kripya Apna Record Edit Kre !','query':req.query.id,'result':result});
  });
});
router.get('/showRecords', function(req, res, next) {
  record.find({},function(err,result){
    if (err) throw err;
    res.render('showRecords', { title: 'Yeh Hai Aapke Records','response':result });
  });
});
router.post('/update',function(req,res,next){
  var _id = {_id:req.query.id};
  var name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var data = {
     name:name,
     password:password,
     email:email,
     mobile:mobile
   };
  record.update(_id,data,function(err,res){
    if (err) throw err;
    console.log('record updated');
  });
  res.render('index',{ title: 'Aapka Swagat Hai!' });
});

router.get('/del',function(req,res,next){
  var _id = {_id:req.query.id};
  record.remove(_id,function(err,result){
    if(err) throw err;
  });
  res.render('index',{title:'Aapka Swagat Hai !'});
});
 router.post('/save',function(req,res,next){
   var name = req.body.name;
   var password = req.body.password;
   var email = req.body.email;
   var mobile = req.body.mobile;
   var data = {
     name:name,
     password:password,
     email:email,
     mobile:mobile
   };
   record.create(data,function(err,res){
     if(err) throw err;
     console.log('record saved');
   });
   res.render('index',{title:'Aapka Swagat Hai!'})
 });

module.exports = router;
