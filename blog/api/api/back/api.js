var express = require('express');
var router = express.Router();
var dbquery=require("../../config/connect_db")
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")

const {sqlHandle,readHandle,query}=dbquery
// 添加接口
router.post('/insert', function(req, res, next) {
  var sql = `insert into apilist(id,title,url,type,sendparams,getparams,backorfont,time) 
  values('${generateUUID()}','${req.body.title}','${req.body.url}','${req.body.type}','${req.body.sendparams}','${req.body.getparams}','${req.body.backorfont}','${creatTime()}')`
    
  sqlHandle(sql).then((data)=>{
        console.log(data)
          res.send({
            code:1011,
            msg:"数据插入成功"
          })
    }).catch((err)=>{
      console.log(err)
      res.send({
        code:1012,
        msg:"数据插入失败"
      })
    })
});


// 获取接口列表
router.get('/select', function(req, res, next) {
  
  var sql = `select * from apilist where backorfont='${req.query.type}'`
  readHandle(sql).then((data)=>{
        console.log(data)
        res.send({
          code:1021,
          msg:"数据读取成功",
          data
        })
    }).catch((err)=>{
      console.log(err)
      res.send({
        code:1022,
        msg:"数据读取失败",
        err:err
      })
    })
});

// 接口文档修改

router.post('/update', function(req, res, next) {
  
  var sql = `update apilist set title='${req.body.title}',url='${req.body.url}',type='${req.body.type}',sendparams='${req.body.sendparams}',getparams='${req.body.getparams}',backorfont='${req.body.backorfont}',time='${creatTime()}' where id='${req.body.id}'`
  sqlHandle(sql).then((data)=>{
        res.send({
          code:1031,
          msg:"数据更改成功",
        })
    }).catch((err)=>{
      console.log(err)
      res.send({
        code:1032,
        msg:"数据更改失败",
        err:err
      })
    })
});
// 接口文档的删除
router.post('/delete', function(req, res, next) {
  
  var sql = `delete from apilist where id='${req.body.id}'`
  sqlHandle(sql).then((data)=>{
        console.log(data)
        res.send({
          code:1041,
          msg:"数据删除成功",
        })
    }).catch((err)=>{
      console.log(err)
      res.send({
        code:1042,
        msg:"数据删除失败",
        err:err
      })
    })
});
module.exports = router;