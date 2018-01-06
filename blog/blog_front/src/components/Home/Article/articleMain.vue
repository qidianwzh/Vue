<template>
  <div>
       <div id="wrapper">
        <!--mainbody start-->
        <div id="mainbody">
            <div id="logo">
                <a href="#"></a>
            </div>
            <!--content start-->
            <div id="content">
                <!--leftsidebar start-->
                <div id="leftsidebar">
                    <!--main_tittle start-->
                    <div class="main_tittle">
                        <h2>
                            全栈搜索</h2>
                        <div class="search">
                            <el-input
                            placeholder="请输入内容"
                            v-model="searchVal"
                            clearable
                            class="searIpt"
                            >
                            </el-input>
                            <el-button type="primary" icon="el-icon-search" @click='search(searchVal)'>搜索</el-button>
                        </div>
                    </div>
                    <!--main_tittle start-->
                    <div class="clearfix">
                    </div>
                    <!--main_desc start-->
                    <div class="main_desc">
                    </div>
                    <!--main_desc end-->
                    <div class="clearfix">
                    </div> 
                    <!--update start-->
                    <div class="update">
                            <h2>最新文章</h2>
                        <ul>
                            <news></news>
                        </ul>
                    </div>
                    <div class="copyrights">Collect from <a>模板之家</a></div>
                    <!--update end-->
                    <div class="clearfix">
                    </div>
                    <!--about start-->
                    <div class="about">
                        <h2>
                            About this site</h2>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                            <a>EGrappler.com</a> Lorem ipsum dolor sit amet.
                            Lorem ipsum <a href="#">EGrappler</a> Lorem ipsum dolor sit amet.</p>
                    </div>
                    <!--about end-->
                </div>
                <!--leftsidebar end-->
                <!--navigation start-->
                <div id="navigation">
                    <div class="nav">
                        <ul>
                            <li><a href="#" class="active"><span>Home</span></a></li>
                            <li>|</li>
                            <li><a href="about.html"><span>About</span></a></li>
                            <li>|</li>
                            <li><a href="work.html"><span>Work</span></a></li>
                            <li>|</li>
                            <li><a href="contact.html"><span>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
                <!--navigation end-->
                <!--sidebar start-->
                
                <div id="sidebar">
                    <router-view></router-view>
                </div>
                
                <!-- <List></List> -->
                <!--sidebar end-->
            </div>
            <!--content end-->
        </div>
        <!--mainbody end-->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import action_type from '../../../store/action_type'
import News from './news.vue'
export default {
  data () {
      return {
            activeIndex: '1',
            activeIndex2: '1',
            oneClass: '',
            searchVal: '',
            everyrows:5,
            nowPage:1,
            formData:[],
        }
  },
  components: {
        News,
       
  }
}
</script>
<style scoped>
#logo{
    display: none
}
.search{
    display: flex;
    margin-top: 20px;
}
.searIpt{
    width: 80%;
    margin-right: 5px
}
.update ul {
    margin-top: 5px
}
</style>
