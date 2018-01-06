<template>
   <div>
        <h3>个人博客后台管理系统</h3>
        <p>用户姓名：{{username}}</p>
   </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
        username:""
    }
  },
    mounted(){
      console.log(sessionStorage.getItem("userName"))
      this.username=sessionStorage.getItem("userName")
     
    }
}
</script>

<style scoped>
  div{
    height: 50px;
    background: lightblue;
    overflow: hidden;
    line-height:50px;
    padding:0 20px;
  }
  div h3{
    float: left
  }
  div p{
    float: right
  }

</style>
