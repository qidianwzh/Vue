<template>
<div>
<!-- 头部导航 -->
 <div class='title'>
     <navList></navList>
 </div>
 <!-- 面包屑 -->
  <div class='titleList'>
     <breadCast></breadCast>
  </div>
<!-- 主要内容 -->
  <articleMain></articleMain>
<!--wrapper end-->
  <div class="clearfix">
  </div>
<!--footer start-->
  <div id="footer">
   <footers></footers>
  </div>
</div>
</template>
<script>
import navList from './navlist.vue'
import articleMain from './articleMain.vue'
import breadCast from './breadCast.vue'
import footers from './footer.vue'
  export default {
    data() {
      return {
        oneClass: ''
      };
    },
    components: {
        navList,
        articleMain,
        breadCast,
        footers
    },
    methods: {
       
    },
    mounted () {
        console.log('获取树状类名')
    } 
  }
</script>
<style scoped>
.titleList {
  position: absolute;
  top: 133px;
  left: 20px
}
</style>
