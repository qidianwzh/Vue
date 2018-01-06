var dbquery=require("../../config/connect_db")
var express = require("express")
var router = express.Router()
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")
const moment = require('moment'); //数据库时间转js时间格式

const {sqlHandle,readHandle,searchHandle,query}=dbquery
    // 头部导航数据查询
router.get("/getNav", function(req, res, next) {
    var sqlone = "select * from one_class"
    var sqltwo = "select * from two_class"
    const asyncGetClass=async function(){
        let oneClass=await  readHandle(sqlone)
        let twoClass=await  readHandle(sqltwo)

        return {oneClass,twoClass}
    }

    asyncGetClass().then((data)=>{
        let resdata = []
        const {oneClass,twoClass}=data
        oneClass.forEach(function(i) {
            let everydata = {
                onedata: i,
                twodata: []
            }
            twoClass.forEach(function(j) {
                if (i.id == j.parent_id) {
                    everydata.twodata.push(j)
                }
            })

            resdata.push(everydata)
        })
        console.log(resdata)
        res.send({
            code: "6010",
            data: resdata,
            msg: "查询成功"
        })
    }).catch((err)=>{
        res.send({
            code: "6011",
            data: null,
            msg: "查询失败"
        })
    })
})

    // 获取所有文章查询
router.get("/getArticleAll", function(req, res, next) {
    var sqlone = `select * from one_class`
    var sqltwo = `select * from two_class`
    // 拼接查询文章的sql
    const connectSql=(oneClass)=>{
         // 根据一级类名拼接sql
         var selectArtSql = `select * from (`
         oneClass.forEach(function(i, index) {
             if (index < (oneClass.length - 1)) {
                 selectArtSql += `select * from ${i.enname} UNION ALL`
             } else {
                 selectArtSql += ` select * from ${i.enname})as tabel_all where art_show=1 order by time desc`
             }
 
         }, this);
         return selectArtSql
    }
    // 将一二级类名的中英文标识添加入文章列表
    const connectArticle=(data)=>{
        const {articleData,oneClass,twoClass}=data
        console.log(articleData)
        return  articleData.map(function(i) {
                    oneClass.forEach(function(j) {
                        if (j.id == i.oneId) {
                            i.enname_one = j.enname
                            i.cnname_one = j.cnname
                        }
                    })
                    twoClass.forEach(function(j) {
                        if (j.id == i.twoId) {
                            i.enname_two = j.enname
                            i.cnname_two = j.cnname
                        }
                    })
                    return i
                });
         
    }

    const asyncGetArticle=async function(){
        let oneClass=await  readHandle(sqlone)
        let twoClass=await  readHandle(sqltwo)
        let articleData=await  readHandle(connectSql(oneClass))
        return connectArticle({articleData,oneClass,twoClass})
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
            msg: "查询失败",
            err
        })
    })

})



// 根据不同的一级类名获取相应的二级类名
router.post("/getClassTwo", function(req, res, next) {
        var sql = `select * from two_class where parent_id='${req.body.oneId}'`
        readHandle(sqlone).then((data)=>{
            res.send({
                code: "6020",
                msg: "数据查询成功",
                data
            })
        }).catch((err)=>{
            res.send({
                code: "6021",
                msg: "数据查询失败"
            })
        })
    })

    // 根据id获取文章
router.get("/getArticle", function(req, res, next) {
    var sqlone = `select * from one_class`
    // 拼接查询文章的sql
    const connectSql=(oneClass)=>{
         // 根据一级类名拼接sql
         var selectArtSql = `select * from (`
         oneClass.forEach(function(i, index) {
             if (index < (oneClass.length - 1)) {
                 selectArtSql += `select * from ${i.enname} UNION ALL`
             } else {
                 selectArtSql += ` select * from ${i.enname})as tabel_all where id='${req.query.id}' and art_show=1 order by time desc`
             }
 
         }, this);
         return selectArtSql
    }
    // 更新文章读取量
    const connectUpdataSql=(oneClass)=>{
        if(articleData.length>0){
            let sql=`CREATE VIEW all_article_table(id,visitors) AS SELECT id,visitors FROM `
            oneClass.forEach((i,index)=>{
                sql+=`${i.enname} `
            })
           
        }
    }
    const asyncGetArticle=async function(){
        let oneClass=await  readHandle(sqlone)
        let articleData=await  readHandle(connectSql(oneClass))
        // let articleData=await  sqlHandle(connectUpdataSql(oneClass))
        return articleData
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

module.exports = router;