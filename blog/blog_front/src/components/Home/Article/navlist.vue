<template>
    <div>
         <div class="title">
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        <el-menu-item index="1">个人博客</el-menu-item>
       <el-submenu :index="item.oneClass.cnname" v-for='(item,idx) in getOneClass' :key='idx'>
            <template slot="title">{{item.oneClass.cnname}}</template>
            <el-menu-item 
            v-for='(k, idx) in item.twoClass' 
            :key='idx'
            :index="k.cnname"
            >
            {{k.cnname}}
            </el-menu-item>
        </el-submenu>
        </el-menu>
  </div>
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex'
import action_type from '../../../store/action_type'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        oneClass: ''
      };
    },
    methods: {
        // ...mapActions({
        //         changeList: action_type.HEADCHANGEDATA.actions,
        //         // // 二级分类点击后改变面包屑数组
        //         // headbreadList: action_type.HEADBREADDATA.actions
        //     }),
        ...mapActions({
            getHeadData: action_type.HEADDATA.actions
        }),
         handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
    },
    computed:{
        ...mapState({
            getOneClass:(state) => state.headData
        })
    },
    mounted(){
        this.getHeadData()
        //    this.axios.get('/api/back/class/getClassList').then((res) => {
        //     console.log(res)
        //     this.getOneClass=Array.from(res.data.data)
        // })
    }
}
</script>
