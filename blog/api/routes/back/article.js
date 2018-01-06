var express = require('express');
var router = express.Router();
var query=require("../../config/connect_db")
/* GET home page. */
// router.get('/', function(req, res, next) {
//   let callback=(data)=>{
//     res.send(data);
//   }
//   let sql=`select * from user`
//   query(sql,callback)
 
// });

router.get('/', function(req, res, next) {
  
    let sql=`select * from user`
    query(sql).then((data)=>{
    
        res.send(data)
    }).catch((err)=>{
      console.log(err)
      res.send("error:"+err)
    })
   
});
module.exports = router;
