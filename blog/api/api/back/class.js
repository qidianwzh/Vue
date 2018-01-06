var express = require('express');
var router = express.Router();
var dbquery=require("../../config/connect_db")
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")

const {
  sqlHandle,
  readHandle,
  searchHandle, 
  searchHandleNormal,   
  query
  }=dbquery
// 插入一级类名
router.post("/insertOneClass",(req,res,next)=>{
      const oneid=generateUUID()
       //    一级分类英文标识sql查询
      var sqltest1 = `select id from one_class where enname='${req.body.enname_one}'`
      // 二级分类英文标识sql查询
      var sqltest2 = `select id,article_num from two_class where enname='${req.body.enname_two}'`
      // 一级分类插入数据sql
      const sqlinsert1 = `insert into one_class(id,enname,cnname,time) values('${oneid}','${req.body.enname_one}','${req.body.cnname_one}','${creatTime()}')`
      // 二级分类插入数据sql
       const sqlinsert2 = `insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${generateUUID()}','${oneid}','${req.body.enname_two}','${req.body.cnname_two}',0,'${creatTime()}')`
        // 创建文章表
    const createTable = `CREATE TABLE ${req.body.enname_one} (LIST INT(11) UNIQUE NOT NULL AUTO_INCREMENT, id VARCHAR(255) UNIQUE PRIMARY KEY, oneId VARCHAR(255), twoId VARCHAR(255), article_name VARCHAR(255), editer VARCHAR(255), content LONGTEXT, time DATETIME, visitors INT, daodu VARCHAR(255), imgsrc VARCHAR(255), recommend TINYINT, art_show TINYINT);`
      // Promise.all([sqlHandle(sqlinsert1),sqlHandle(sqlinsert2)]).then(()=>{
      //     res.send({
      //       code:"1111",
      //       msg:"数据插入成功"
      //     })
      // }).catch((err)=>{
      //   console.log(err)
      //   res.send({
      //     code:"1112",
      //     msg:"数据插入失败",
      //     err
      //   })
      // })

      const asyncInsertClassOne= async function (params) {
          const searchOne= await searchHandle(sqltest1)
          const searchTwo= await searchHandle(sqltest2)
          const insertStateOne= await sqlHandle(sqlinsert1)
          const insertStateTwo= await sqlHandle(sqlinsert2)
          const createTableState=await query(createTable)
          return "ok"
      }
      asyncInsertClassOne().then((data)=>{
              res.send({
                code:"1111",
                msg:"数据插入成功"
              })
      }).catch((err)=>{
        res.send({
              code:"1112",
              msg:"数据插入失败",
              err
            })
      })
})
// 获取一级分类列表
router.get("/getOneClass",(req,res,next)=>{
    const sql=`select * from one_class`
    readHandle(sql).then((data)=>{
      res.send({
        code:"1121",
        msg:"获取一级类名成功",
        data
      })
    }).catch((err)=>{
      res.send({
        code:"1122",
        msg:"获取一级类名失败"
      })
    })
})
// 插入二级分类
router.post("/insertTwoClass",(req,res,next)=>{
   // 二级分类英文标识sql查询
   var sqltest2 = `select id,article_num from two_class where enname='${req.body.enname_two}'`
   // 二级分类插入数据sql
   const sqlinsert2 = `insert into two_class(id,parent_id,enname,cnname,article_num,time) values('${generateUUID()}','${req.body.oneId}','${req.body.enname_two}','${req.body.cnname_two}',0,'${creatTime()}')`
   const asyncInsertClassTne= async function (params) {
          const searchTwo= await searchHandle(sqltest2)
          const insertStateTwo= await sqlHandle(sqlinsert2)
          return "ok"
      }
      asyncInsertClassTne().then((data)=>{
              res.send({
                code:"1123",
                msg:"数据插入成功"
              })
      }).catch((err)=>{
        res.send({
              code:"1124",
              msg:"数据插入失败",
              err
            })
      })
})


// 获取二级分类列表
router.get("/getTwoClass",(req,res,next)=>{
  const sql=`select * from two_class`
  readHandle(sql).then((data)=>{
    res.send({
      code:"1131",
      msg:"获取二级类名成功",
      data
    })
  }).catch((err)=>{
    res.send({
      code:"1132",
      msg:"获取二级类名失败"
    })
  })
})
[{oneClass:{},twoList:[]}]

// 获取树状结构的分类列表
router.get("/getClassList",(req,res,next)=>{
  const sqlOne=`select * from one_class`
  const sqlTwo=`select * from two_class`

  const asyncGetClass= async function (params) {
    const classOneList= await readHandle(sqlOne)
    const classTwoList= await readHandle(sqlTwo)
    return {classOneList,classTwoList}
}
asyncGetClass().then((data)=>{
      let result=[]
      data.classOneList.forEach((i)=>{
          let obj={
            oneClass:i,
            twoClass:[]
          }
          data.classTwoList.forEach((j)=>{
            if(i.id==j.parent_id){
              obj.twoClass.push(j)
            }
          })
          result.push(obj)
        })

        res.send({
          code:"1135",
          msg:"数据获取成功",
          data:result
        })
    }).catch((err)=>{
      res.send({
            code:"1136",
            msg:"数据获取失败",
            err
          })
    })
  
})



// 修改一级类名
router.post("/amendClassOne",(req,res,next)=>{
   // 修改一级分类
   var updatesql = `update one_class set enname='${req.body.enname_one}',cnname='${req.body.cnname_one}',time='${creatTime()}' where id='${req.body.id}'`
    // 修改文章表
    var amendTable = `alter table ${req.body.oldenname_one} rename ${req.body.enname_one}`
  console.log(updatesql)
  console.log(amendTable)

  const asyncGetClass= async function (params) {
      const classOneList= await sqlHandle(updatesql)
      const classTwoList= await query(amendTable)
      return "ok"
  }
  asyncGetClass().then((data)=>{
        res.send({
          code:"1137",
          msg:"一级分类修改成功"
        })
    }).catch((err)=>{
      res.send({
            code:"1138",
            msg:"一级分类修改失败",
            err
          })
    })
  
})


// 修改二级类名
router.post("/amendClassTwo",(req,res,next)=>{
  // 修改二级分类
  var updatesql = `update two_class set enname='${req.body.enname}',cnname='${req.body.cnname}',time='${creatTime()}' where id='${req.body.id}'`
  console.log(updatesql)
sqlHandle(updatesql).then((data)=>{
       res.send({
         code:"1139",
         msg:"二级分类修改成功"
       })
   }).catch((err)=>{
     res.send({
           code:"1140",
           msg:"二级分类修改失败",
           err
         })
   })
})

// 删除一级类名
router.post("/deleteClassOne",(req,res,next)=>{

  const sqlone = `delete from one_class where id='${req.body.id}'`
  const sqltwo = `delete from two_class where parent_id='${req.body.id}'`
  const sqlarticle = `DROP TABLE ${req.body.enname_one}`
  

  const asyncDeleteOne= async function (params) {
      const deleteOne= await sqlHandle(sqlone)
      const deleteTwo= await sqlHandle(sqltwo)
      const dropTable= await query(sqlarticle)
      return "ok"
  }
  asyncDeleteOne().then((data)=>{
        res.send({
          code:"1141",
          msg:"一级分类删除成功"
        })
    }).catch((err)=>{
      res.send({
            code:"1142",
            msg:"一级分类删除失败",
            err
          })
    })

})

// 删除二级类名
router.post("/deleteClassTwo",(req,res,next)=>{
    // 在二级分类中删除当前分类
    var sqltwo = `delete from two_class where id='${req.body.twoId}'`
    // 在二级分类中查询是否还有当前一级分类中的数据
    var selecttwo = `select * from two_class where parent_id='${req.body.oneId}'`
        // console.log(selecttwo)
        // 如果在二级分类中还有当前一级分类的数据，则在文章表中删除相应二级分类的数据
    var sqlarticle = `delete from ${req.body.enname_one}  where twoId='${req.body.twoId}'`


    // 如果在二级分类中无当前一级分类的数据，则在删除当前一级分类，以及删除当前一级分类的表
    var sqlone = `delete from one_class where id='${req.body.oneId}'`
    var sqldrop = `DROP TABLE ${req.body.enname_one}`


    const asyncDeleteTwo= async function (params) {
      const deleteTwo= await sqlHandle(sqltwo)
      const TwoClassArr= await query(selecttwo)

      if(TwoClassArr.length>0){
      
        const deleteArticle= await query(sqlarticle)
        return "ok"
      }else{
        const deleteOne= await sqlHandle(sqlone)
        const dropTable= await query(sqldrop)
        return "ok"
      }
      
      
  }
    asyncDeleteTwo().then((data)=>{
          res.send({
            code:"1143",
            msg:"二级分类删除成功"
          })
      }).catch((err)=>{
        res.send({
              code:"1144",
              msg:"二级分类删除失败",
              err
            })
      })
  })

module.exports=router