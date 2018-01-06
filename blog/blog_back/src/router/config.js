import router from './index'
import axios from "axios"
router.beforeEach((to,from,next)=>{
  console.log(to)
  if(to.name=="Login"){
    next()
    return
  }
  if(sessionStorage.getItem("userId")==""||sessionStorage.getItem("userId")==undefined||sessionStorage.getItem("userId")==null){
      next("/login")
  }else{
    console.log(sessionStorage.getItem("userId"))
    axios.post("/api/back/user/test",{id:sessionStorage.getItem("userId")}).then((data)=>{
      console.log(data)
      if(data.data.code=="0006"){
        next()
      }else{
        next("/login")
      }
    })
    
  }

})

export default router