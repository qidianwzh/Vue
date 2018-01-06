<template>
  <div>
      <!--wrapper start-->
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
                        <h3>
                            Hi, My Name is John Donga
                        </h3>
                    </div>
                    <!--main_tittle start-->
                    <div class="clearfix">
                    </div>
                    <!--main_desc start-->
                    <div class="main_desc">
                        <p>
                            <router-link to='/blog_main'>
                                <h2>进入博客</h2>
                            </router-link>
                        
                        </p>
                    </div>
                    <!--main_desc end-->
                    <div class="clearfix">
                    </div>
                    <!--update start-->
                    <div class="update">
                        <ul>
                                <h2>点击排行</h2>
                            <!-- <li v-for="(item,idx) in articleList" :key="idx">
                                {{item.article_name}}
                                <span>{{item.time}}</span>
                            </li> -->
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
                    <div id="slider-wrapper">
                        <div class="quake-slider">
                            <div class="quake-slider-images">
                               <el-carousel>
                                     <el-carousel-item>
                                    <h3><img src="../../assets/images/slider02.jpg" alt="" /></h3>
                                    </el-carousel-item>
                                     <el-carousel-item>
                                    <h3><img src="../../assets/images/slider03.jpg" alt="" /></h3>
                                    </el-carousel-item>
                                     <el-carousel-item>
                                    <h3><img src="../../assets/images/slider01.jpg" alt="" /></h3>
                                    </el-carousel-item>
                                </el-carousel>
                                
                            </div>
                            <div class="quake-slider-captions">
                            </div>
                        </div>
                    </div>
                </div>
                <!--sidebar end-->
            </div>
            <!--content end-->
        </div>
        <!--mainbody end-->
    </div>
    <!--wrapper end-->
    <div class="clearfix">
    </div>
    <!--footer start-->
    <div id="footer">
        <p>
            <span><a href="#">Copyright</a> © EGrappler. More Templates <a>网页模板</a></span>
        </p>
        <p>
            <span>All Rights Reserved.</span></p>
        <div class="clearfix">
        </div>
    </div>
  </div>
</template>
<script>

export default {
    name: 'carrousel',
    data() {
        return {
           
        }
    },
  
    mounted () {
    //   this.axios.get('/api/back/article/getArticleList').then((res) => {
    //       if(res.data.code == '1215'){
    //           this.articleList = Array.from(res.data.data)
    //       }
      
    //   })
    }
}
</script>
<style>
.nav{
    margin-top: 20px
}
.content{
    display: flex;
    position: relative;
    margin-top: 15px;
}
.leftCont{
    flex: 1;
    width: 100%;
    margin-right: 5px;
    padding-left: 10px
}
.rightBar{
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0 ;
    right: 0;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    margin: 0;
    height: 100%
  }
.el-carousel__item{
    height: 609px
}
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 .el-carousel{
      height: 609px;
  }
  .el-carousel__arrow{
      display: none
  }
</style>
