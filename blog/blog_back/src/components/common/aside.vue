<template>
  <el-menu default-active="2" class="el-menu-vertical-demo self" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>文章操作</template>
          <el-menu-item index="1-1"><router-link to="/back/add_article">添加文章</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/back/article_list">文章列表</router-link></el-menu-item>
        
      </el-submenu>
      
      <el-submenu index="2">
       <template slot="title"><i class="el-icon-message"></i>分类操作</template>
       <el-menu-item index="2-1"><router-link to="/back/add_one_class">一级分类添加</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link to="/back/add_two_class">二级分类添加</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link to="/back/class_list">分类列表</router-link></el-menu-item>
      </el-submenu>
       <el-submenu index="3">
       <template slot="title"><i class="el-icon-message"></i>接口操作</template>
       <el-menu-item index="3-1"><router-link to="/back/api_add">添加接口</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link :to='{path:"/back/api_list",query:{type:"font"}}'>前台接口</router-link></el-menu-item>
          <el-menu-item index="3-3"><router-link :to='{path:"/back/api_list",query:{type:"back"}}'>后台接口</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="4">
       <template slot="title"><i class="el-icon-message"></i>留言板</template>
       <el-menu-item index="4-1"><router-link to="/send_email">留言</router-link></el-menu-item>
          
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
        
    }
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
  .self{
    width: 200px;
  }

</style>
