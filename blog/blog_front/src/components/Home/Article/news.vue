<template>
        <el-row class="rowall">
                <el-col :span="24" style="border-radius: 4px;">
            
                    <el-row class="classrowone">
                      
                    </el-row>
                    <el-row class="classrow" :span="24" v-for='(item,idx) in datalist' :key='idx'>
                            <p @click="goToDetailFn(item)">
                                
                            <el-col :span="2" class="classrow1">{{idx+1}}</el-col>
                            <el-col :span="14" class="classrow2">{{item.article_name}}</el-col>
                            <el-col :span="6" class="classrow3">{{item.time}}</el-col>
                            </p>
                    </el-row>
                </el-col>
            </el-row>
</template>
<script>
import { mapState,mapActions }  from 'vuex'
import action_type from '../../../store/action_type'
export default {
  computed:{
      ...mapState({
        datalist:(state) => state.articleList,
        dataAll: (state) => state.articleAll
      })
  },
  methods:{
      ...mapActions({
        datalists: action_type.RECOMMENDDATA.actions,
        getArticle: action_type.ARTICLEAll.actions
      }),
      goToDetailFn(i) {
        this.$router.push({path:'/blog_main/detail'})
      }
  },
  beforeMount (){
    this.getArticle()
    this.datalists()
  }
}
</script>
<style scoped>
 
    
  
</style>