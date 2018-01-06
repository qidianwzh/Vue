<template>
  <div>
       <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/blog' }">
        首页<span></span>
        </el-breadcrumb-item>
     </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data () {
      return {
        oneName:'',
        twoName: '' 
      }
  }
}
</script>
<style>
.el-breadcrumb__inner, .el-breadcrumb__inner a {
    color:#fff !important
}
</style>
