const config=require("./config")
const mysql=require("mysql")
const moment = require('moment'); //数据库时间转js时间格式
// const query=(sql,callback)=>{
//     let connect=mysql.createConnection(config.dev_sql_config)
//     connect.on("err",(err)=>{console.log(err)})
//     connect.query(sql,(err,rows,fields)=>{
//       if(err){
//         console.log(err) 
//         return
//       }
//       callback(rows)
//       connect.end()
//     })
// }

//// promise
let connection=mysql.createPool(config.dev_sql_config)
const query=(sql)=>{
  return new Promise((resolve,reject)=>{
    connection.getConnection((err,connect)=>{
      connect.query(sql,(sqlerr,rows,fields)=>{
        if(err){
          console.log(err) 
          reject(err)
          return
        }
        resolve(rows)
        connect.release()
      })
    })
  })
}


// async
// let connection=mysql.createPool(config.dev_sql_config)
// const query=async function (sql) {
      
//       return await new Promise((resolve,reject)=>{
//           connection.getConnection((err,connect)=>{
//             connect.query(sql,(sqlerr,rows,fields)=>{
//             connect.release()
//             if(err){
//               console.log(err)
//               reject(err) 
//               return
//             }
//             resolve(rows) 
//           })
//         })
        
//       })
// }

// 异步的query



// 读取操作
const readHandle=(sql)=>{
  return new Promise((resolve,reject)=>{
    query(sql).then((data)=>{
        // 转换时间；
        data=data.map((i)=>{
          i.time=moment(i.time).format('YYYY-MM-DD HH:mm:ss')
          return i
        })
         resolve(data)
      }).catch((err)=>{
        console.log(err)
        reject(err)
      })
  })
}
// 检索判断数据库是否有此值
const searchHandle=(sql)=>{
  return new Promise((resolve,reject)=>{
    query(sql).then((data)=>{
        // 转换时间；
        if(data.length>0){
          reject("有值")
        }else{
          resolve("无值")
        }
      }).catch((err)=>{
        console.log(err)
        reject(err)
      })
  })
}
// 检索判断数据库是否有此值(有值为true)
const searchHandleNormal=(sql)=>{
  return new Promise((resolve,reject)=>{
    query(sql).then((data)=>{
        // 转换时间；
        if(data.length>0){
         resolve("有值")
        }else{
          reject("无值")
        }
      }).catch((err)=>{
        console.log(err)
        reject(err)
      })
  })
}
// 其他数据库操作
const sqlHandle=(sql)=>{
  return new Promise((resolve,reject)=>{
    query(sql).then((data)=>{
        // 转换时间；
        if(data.affectedRows>0){
          resolve("ok")
        }else{
          reject("err")
        }
      }).catch((err)=>{
        console.log(err)
        reject(err)
      })
  })
}
module.exports={
  sqlHandle,
  readHandle,
  searchHandle,
  searchHandleNormal,
  query
}