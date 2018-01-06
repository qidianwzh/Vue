<template>
  <div class="load">
      <div>
          <headerC></headerC>
          <div class="main">
            <asideC class="left"></asideC>
            <router-view class="right"></router-view>
          </div>
        </div>
  
</div>
</template>

<script>

  import Aside from "./common/aside"
  import Head from "./common/head"
export default {
  name: 'Main',
  data () {
    return {
       
    }
  },
  components:{
    asideC:Aside,
    headerC:Head
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  overflow: hidden
}
.main .left{
  float: left
}
.main .right{
  float: left;

}
</style>
