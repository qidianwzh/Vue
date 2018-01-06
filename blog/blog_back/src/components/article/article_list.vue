<template>
     
     <div class="classmain">
         <el-table
          :data="formData"
          border
          style="width: 800px" >
          <el-table-column
            label="标题"
            width="180">
            <template slot-scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.article_name }}</span>
            </template>
          </el-table-column>
         <el-table-column
            label="作者"
            width="180">
            <template slot-scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.editer }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="时间"
            width="180">
            <template slot-scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="nowPage"
          :page-sizes="[2, 5, 10, 15]"
          :page-size="everyrows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.olddata.length">
        </el-pagination>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleOK">确 定</el-button>
        </span>
      </el-dialog>
      </div>

</template>

<script>

export default {
  name: 'add_article',
  data() {
      return {
        olddata:[],
        formData:[],
        everyrows:5,
        nowPage:1,
         dialogVisible: false,
         id:""
      }
    },
    created(){
       this.axios.get("/api/back/article/getArticleList").then((data)=>{
           console.log(data)
              if(data.data.code=="1215"){
                console.log(data.data.data)
                  this.olddata=data.data.data
                 this.formData=this.olddata.slice(0,this.everyrows)
              }
          })
    },
    
     methods: {
       dbclick(row){
          console.log(row)
          this.$router.push({name:"api_list_detail",params:{data:row}})
       },
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({path:"/back/amend_article",query:{id:row.id}})
      },
      
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.everyrows=val;
         this.formData=this.olddata.slice((this.nowPage-1)*this.everyrows,this.everyrows)
      },
      handleCurrentChange(val) {
        this.nowPage=val
        this.formData=this.olddata.slice((val-1)*this.everyrows,this.everyrows*val)
        console.log(this.everyrows)
        console.log(`当前页: ${val}`);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.dialogVisible=true
        this.id=row.id
        this.enname_one=row.enname_one
        this.twoId=row.twoId
          console.log(row)
      },
      handleOK(){
          
            this.axios.post("/api/back/article/deleteArticle",{twoId:this.twoId,enname_one:this.enname_one,id:this.id}).then((data)=>{
                console.log(data)
                if(data.data.code=="1225"){
                  this.$message({
                    showClose: true,
                    message: '恭喜你，删除成功',
                    type: 'success'
                  })
                  this.$router.go(0)
                }else{
                   this.$message({
                    showClose: true,
                    message: '删除失败',
                    type: 'error'
                  })
                }
                
            })
          
          this.dialogVisible=false
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  

}
</script>

<style scoped>
 h3 {
        margin: 20px 0 20px 40px
    }
    
    #editor {
        width: 800px;
    }
</style>
