import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const {
    HEADDATA, 
    ARTICLEAll, 
    DEFAULTDATA,
    RECOMMENDDATA,
    TOPDATA,NEWDATA,
    BREADCASTDATA,
    HEADCHANGEDATA,
    HEADBREADDATA ,
    HEADONECHANGEDATA,
    SEARCHDATA 
} = action_type
import action_type from './action_type.js'


var store = new Vuex.Store({
    state: {
        headData: null, //头部数据
        articleAll: null,  //所有文章
        articleList: [], //展示的文章数据
        toplist: [],    //点击排行
        newlist: [],    //最新排行
        breadcast: []   //面包屑
    },
    actions: {
        //头部数据的请求
        [HEADDATA.actions]({commit}) {
           return new Promise((resolve,reject) => {
                axios.get('/api/front/article/getNav').then((res) => {
                    commit(HEADDATA.mutations,res) 
                    resolve('ok')
                }).catch((err) => {
                    reject(err)
                })
           })
        },
        //所有文章的请求
        [ARTICLEAll.actions]({commit}) {
           return new Promise((resolve,reject) => {
               axios.get('/api/front/article/getArticleAll').then((res) => {
                   commit(ARTICLEAll.mutations,res)
                   resolve('ok')
               }).catch((err) => {
                   reject(err)
               })
           })
        },
        //请求数据整合actions
        [DEFAULTDATA.actions]({dispatch,commit},_this) {
            //dispatch用来调用actions，commit用来调用mutations
            Promise.all([dispatch(HEADDATA.actions),dispatch(ARTICLEAll.actions)]).then((res) => {
                //自动执行用commit触发mutation
                commit(RECOMMENDDATA.mutations)
                commit(TOPDATA.mutations)
                commit(NEWDATA.mutations)
                // commit(BREADCASTDATA.mutations, "index")     
                setTimeout(() => {
                    _this.loading.close();
                  }, 2000);
                _this.$router.push({path:'/blog'})
            }).catch((err) => {
                console.log(err)
                _this.$router.push({path:'/error'})
            })
        },
         //文章推荐列表
         [RECOMMENDDATA.actions]({ dispatch, commit }, data) {
            let fn  = async function () {
                await dispatch(ARTICLEAll.actions)
                await commit(RECOMMENDDATA.mutations)
                return
            }
            fn()
            // 面包屑首页
            // commit(BREADCASTDATA.mutations, "index")
        },
    },
    mutations: {
        [HEADDATA.mutations](state,res) {
            state.headData = res.data.data
        },
        [ARTICLEAll.mutations](state,res) {
            state.articleAll = res.data.data
            console.log(state.articleAll)
        },
         // 推荐列表 
        [RECOMMENDDATA.mutations](state, name) {
            // console.log(state.articleAll)
            state.articleList = state.articleAll.filter(function(i) {
                return i.recommend == "1"
            })
            // console.log(state.articleList)
        },
        // 点击排行
        [TOPDATA.mutations](state, name) {
            
            let topList=state.articleAll.sort(function(a, b) {
                return a.visitors < b.visitors?1:-1
            })
            console.log(topList)
            state.toplist = topList.slice(0, 5)
            
        },
        // 最新排行
        [NEWDATA.mutations](state, name) {
            state.newlist = state.articleAll.sort(function(a, b) {
                return Date.parse(b.time) - Date.parse(a.time);
                //Date.parse 直接获取时间
            })
            state.newlist = state.newlist.map(function(i) {
                i.time = i.time.substr(0, 10)
                return i
            })
            state.newlist = state.newlist.slice(0, 5)
            console.log(state.newlist)
        },
         // 首页breadcast数组
        // [BREADCASTDATA.mutations](state, data) {
        //     // console.log(state.articleAll)
        //     state.breadcast = [{ cnname: "首页", oneId: null, twoId: null }]
        //     if (data !== "index") {
        //         state.breadcast.push(...data)
        //     }
            // if(data=="search"){
            //     state.breadcast = [{ cnname: "搜索", oneId: null, twoId: null }]
            // }

        //     console.log(state.breadcast)
        // },
    }
})

export default store
