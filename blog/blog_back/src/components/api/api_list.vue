<template>
      <div class="classmain">
         <el-table
          :data="formData"
          border
          style="width: 800px" @row-dblclick.self="dbclick">
          <el-table-column
            label="标题"
            width="180">
            <template slot-scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
         <el-table-column
            label="前后端分类"
            width="180">
            <template slot-scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.backorfont }}</span>
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
        <span>删除：{{deleteItem}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleOK">确 定</el-button>
        </span>
      </el-dialog>
      </div>
</template>
<script>
export default {
  name: 'index',
 data() {
      return {
        olddata:[],
        formData:[],
        everyrows:5,
        nowPage:1,
         dialogVisible: false,
         deleteItem:"",
         id:""
      };
    },
    created(){
        
        this.getData()
      
    },
    watch:{
      $route(){
        // console.log(22)
        //   this.$router.go(0)
        this.getData()
      }
    },
     methods: {
       getData(){
         const type=this.$route.query.type
            this.axios.get("/api/back/api/select?type="+type).then((data)=>{
              if(data.data.code=="1021"){
                console.log(data.data.data)
                  this.olddata=data.data.data
                 this.formData=this.olddata.slice(0,this.everyrows)
              }
              
          })
       },
       dbclick(row){
        
          sessionStorage.setItem("apidetail",JSON.stringify(row))
          this.$router.push({name:"api_list_detail"})
       },
      handleEdit(index, row) {
        
        sessionStorage.setItem("apiamend",JSON.stringify(row))
        this.$router.push({path:"/back/api_add",query:{type:"amend"}})
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
        
        this.dialogVisible=true
        this.deleteItem=row.title
        this.id=row.id
          
      },
      handleOK(){
       
        
            this.axios.post("/api/back/api/delete",{id:this.id}).then((data)=>{
                console.log(data)
                if(data.data.code=="1041"){
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
.classmain{
  padding:30px 20px;
}
p{
  font-size: 20px;
  font-weight: bold;
  padding:10px;
}
</style>
