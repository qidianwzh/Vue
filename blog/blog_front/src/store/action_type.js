module.exports = {
    //头部数据
    HEADDATA: {
        actions: 'HEADDATA_AC',
        mutations: 'HEADDATA_MU'
    },
    //文章原数据
    ARTICLEAll: {
        actions: 'ARTICLEALL_AC',
        mutations: 'ARTICLEALL_MU'
    },
    //数据请求action整合
    DEFAULTDATA: {
        actions: 'DEFAULTDATA_AC',
        mutations: 'DEFAULTDATA_MU'
    },
      // 搜索
      SEARCHDATA: {
        actions: "SEARCHDATA_AC",
        mutations: "SEARCHDATA_MU"
    },
    // 过滤推荐文章[首页推荐文章，自动执行]
    RECOMMENDDATA: {
        actions: "RECOMMENDDATA_AC",
        mutations: "RECOMMENDDATA_MU"
    },
    // 过滤点击排行
    TOPDATA: {
        actions: "TOPDATA_AC",
        mutations: "TOPDATA_MU"
    },
    // 过滤最新排行
    NEWDATA: {
        actions: "NEWDATA_AC",
        mutations: "NEWDATA_MU"
    },
    // 面包屑数组的取值
    BREADCASTDATA: {
      actions: "BREADCASTDATA_AC",
      mutations: "BREADCASTDATA_MU"
    },
    // header导航点击更变数据
    HEADCHANGEDATA: {
      actions: "HEADCHANGEDATA_AC",
      mutations: "HEADCHANGEDATA_MU"
    },
    // 头部二级分类点击时面包屑数组的取值
    HEADBREADDATA: {
      actions: "HEADBREADDATA_AC",
      mutations: "HEADBREADDATA_MU"
    },
    // 面包屑中点击一级分类改变面包屑数量和显示文章数量
    HEADONECHANGEDATA: {
      actions: "HEADONECHANGEDATA_AC",
      mutations: "HEADONECHANGEDATA_MU"
    }
}