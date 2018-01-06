var express = require('express');
var router = express.Router();
var dbquery=require("../../config/connect_db")
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")

const {sqlHandle,readHandle,searchHandle,query}=dbquery
// 获取一级二级分类

router.get("/class",(req,res,next)=>{
    const sqlOneClass=`select * from one_class`
    const sqlTwoClass=`select * from two_class`

      const asyncGetClass= async function () {
         const oneData =await readHandle(sqlOneClass)
         const twoData =await readHandle(sqlTwoClass)
         return {oneData,twoData}
      }
      asyncGetClass().then((data)=>{
        res.send({
          code:"1211",
          msg:"获取类名成功",
          data
        })
      }).catch((err)=>{
          res.send({
            code:"1212",
            msg:"获取类名失败"
          })
      })

})

// 插入文章
router.post("/insert",(req,res,next)=>{
  var sql = `insert into ${req.body.enname_one}(id,oneId,twoId,article_name,editer,content,time,visitors,daodu,imgsrc,recommend,art_show) values('${generateUUID()}','${req.body.oneId}','${req.body.twoId}','${req.body.article_name}','${req.body.editer}','${req.body.content}','${req.body.time}',0,'${req.body.daodu}','${req.body.imgsrc}','${req.body.recommend}','${req.body.art_show}')`
  console.log(sql)
  var updateArticalNum=`update two_class set article_num=article_num+1 where id='${req.body.twoId}'`
    const asyncInsertArticle= async function () {
       await sqlHandle(sql)
       await sqlHandle(updateArticalNum)
       return 
    }
    asyncInsertArticle().then((data)=>{
      res.send({
        code:"1213",
        msg:"插入文章成功"
      })
    }).catch((err)=>{
        res.send({
          code:"1214",
          msg:"插入文章失败"
        })
    })

})
//文章列表接口【获取所有文章】
router.get("/getArticleList", function(req, res, next) {
    var sqlone = `select * from one_class`
    const asyncInsertArticle = async function () {
        const tabelName = await readHandle(sqlone)
        // 多章表sql的拼接(建立视图)
        var selectArtSql = `select * from (`
        tabelName.forEach(function(i, index) {
            if (index < (tabelName.length - 1) ) {
                selectArtSql += `select * from ${i.enname} UNION ALL `
            } else {
                selectArtSql += ` select * from ${i.enname})as tabel_all order by time desc`
            }
        } );
    console.log(selectArtSql)
        return await readHandle(selectArtSql)
    }
    asyncInsertArticle().then((data) => {
        res.send({
            code: "1215",
            msg: '读取文章成功',
            data
        })
    }).catch((err) => {
        res.send({
            code: "1216",
            msg: '读取文章失败',
            err
        })
    })
})
// // 获取所有文章列表
// router.get("/getArticleList",(req,res,next)=>{
//   var sqlone = `select * from one_class`
//   var sqltwo = `select * from two_class`
//   // 拼接查询文章的sql
//   const connectSql=(oneClass)=>{
//        // 根据一级类名拼接sql
//        var selectArtSql = `select * from (`
//        oneClass.forEach(function(i, index) {
//            if (index < (oneClass.length - 1)) {
//                selectArtSql += `select * from ${i.enname} UNION ALL`
//            } else {
//                selectArtSql += ` select * from ${i.enname})as tabel_all order by time desc`
//            }

//        }, this);
//        return selectArtSql
//   }
//   // 将一二级类名的中英文标识添加入文章列表
//   const connectArticle=(data)=>{
//       const {articleData,oneClass,twoClass}=data
//       return  articleData.map(function(i) {
//                   oneClass.forEach(function(j) {
//                       if (j.id == i.oneId) {
//                           i.enname_one = j.enname
//                           i.cnname_one = j.cnname
//                       }
//                   })
//                   twoClass.forEach(function(j) {
//                       if (j.id == i.twoId) {
//                           i.enname_two = j.enname
//                           i.cnname_two = j.cnname
//                       }
//                   })
//                   return i
//               });
       
//   }

//   const asyncGetArticle=async function(){
//       let oneClass=await  readHandle(sqlone)
//       let twoClass=await  readHandle(sqltwo)
//       let articleData=await  readHandle(connectSql(oneClass))
//       return connectArticle({articleData,oneClass,twoClass})
//   }

   
//   asyncGetArticle().then((data)=>{
//       res.send({
//         code:"1221",
//         msg:"读取文章成功",
//         data
//       })
//     }).catch((err)=>{
//         res.send({
//           code:"1222",
//           msg:"读取文章失败"
//         })
//     })
// })
// 修改文章
router.post("/updateArticle",(req,res,next)=>{
  var sql = `update ${req.body.enname_one} set article_name='${req.body.article_name}',editer='${req.body.editer}',content='${req.body.content}',time='${req.body.time}',visitors=${req.body.visitors},daodu='${req.body.daodu}',imgsrc='${req.body.imgsrc}',recommend='${req.body.recommend}',art_show='${req.body.art_show}' where id='${req.body.id}'`
  console.log(sql)
  sqlHandle(sql).then((data)=>{
      res.send({
        code:"1223",
        msg:"修改文章成功"
      })
    }).catch((err)=>{
        res.send({
          code:"1224",
          msg:"修改文章失败"
        })
    })
})
// 删除文章
router.post("/deleteArticle",(req,res,next)=>{
  let deleteSql = `delete from ${req.body.enname_one} where id='${req.body.id}'`
  var updateArticalNum=`update two_class set article_num=article_num-1 where id='${req.body.twoId}'`
  console.log(deleteSql,updateArticalNum)
  const asyncDeleteArticle= async function () {
    await sqlHandle(deleteSql)
    await sqlHandle(updateArticalNum)
    return 
 }
 asyncDeleteArticle().then((data)=>{
      res.send({
        code:"1225",
        msg:"删除文章成功"
      })
    }).catch((err)=>{
        res.send({
          code:"1226",
          msg:"删除文章失败"
        })
    })
 
})

 // 根据id获取文章
 router.get("/getArticleDetail", function(req, res, next) {
  var sqlone = `select * from one_class`
  // 拼接查询文章的sql
  const connectSql=(oneClass)=>{
       // 根据一级类名拼接sql
       var selectArtSql = `select * from (`
       oneClass.forEach(function(i, index) {
           if (index < (oneClass.length - 1)) {
               selectArtSql += `select * from ${i.enname} UNION ALL`
           } else {
               selectArtSql += ` select * from ${i.enname})as tabel_all where id='${req.query.id}' order by time desc`
           }

       }, this);
       return selectArtSql
  }
  // 将一级类名的中英文标识添加入文章列表
  const connectArticle=(data)=>{
    const {articleData,oneClass}=data
    return  articleData.map(function(i) {
                oneClass.forEach(function(j) {
                    if (j.id == i.oneId) {
                        i.enname_one = j.enname
                        i.cnname_one = j.cnname
                    }
                })
               
                return i
            });
     
}
  const asyncGetArticle=async function(){
      let oneClass=await  readHandle(sqlone)
      let articleData=await  readHandle(connectSql(oneClass))
      return connectArticle({articleData,oneClass})
  }

  asyncGetArticle().then((data)=>{
      res.send({
          code: "6012",
          data,
          msg: "查询成功"
      })
  }).catch((err)=>{
      res.send({
          code: "6013",
          data: null,
          msg: "查询失败"
      })
  })
})
module.exports=router