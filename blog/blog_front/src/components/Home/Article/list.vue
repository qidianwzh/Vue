<template>
    <div id="sidebar">
                <el-table 
                :data="tableData"
                stripe
                style="width: 100%"
                class='tableList'
                >
                <el-table-column
                prop="date"
                label="标题"
                width="180">
                <template slot-scope="scope">

                <span>{{ scope.row.article_name }}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="分类"
                width="180">
                    <template slot-scope='scope'>
                        <span>scope.row.cnname_one</span>
                    </template>
                </el-table-column>
                <el-table-column
                prop="address"
                label="作者">
                <template slot-scope='scope'>
                    <span>{{scope.row.article_name}}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="address"
                label="发布时间">
                <template slot-scope='scope'>
                    <span>{{scope.row.time}}</span>
                </template>
                </el-table-column>
            </el-table>
                <!-- <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="nowPage"
                :page-sizes="[2, 5, 10, 15]"
                :page-size="everyrows"
                layout="total, sizes, prev, pager, next, jumper"
                :total="this.tableData.length">
                </el-pagination> -->
        </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import action_type from '../../../store/action_type'
export default{
    methods: {
      ...mapActions({
        getArticle: action_type.ARTICLEAll.actions
      }),
    //    handleSizeChange(val) {
    //     console.log(`每页 ${val} 条`);
    //     this.everyrows=val;
    //      this.formData=this.tableData.slice((this.nowPage-1)*this.everyrows,this.everyrows)
    //   },
    //   handleCurrentChange(val) {
    //     this.nowPage=val
    //     this.formData=this.tableData.slice((val-1)*this.everyrows,this.everyrows*val)
    //     console.log(this.everyrows)
    //     console.log(`当前页: ${val}`);
    //   },
    //   search(val) {
    //       console.log(val)
    //   }
    },
    computed: {
        ...mapState({
            tableData: (state) => state.articleAll
        })
    },
    mounted() {
         this.getArticle()
    }
}
</script>
<style>
.tableList{
    height: 609px
}
</style>