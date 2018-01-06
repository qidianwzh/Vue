<template>
      <div class="classmain">
          <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width:500px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="接口地址" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
          </el-form-item>
          <el-form-item label="类型" prop="backorfont">
            <el-select v-model="ruleForm.backorfont" placeholder="请选择活动区域">
              <el-option label="前台接口" value="front"></el-option>
              <el-option label="后台接口" value="back"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请求类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择活动区域">
              <el-option label="post" value="post"></el-option>
              <el-option label="get" value="get"></el-option>
              <el-option label="formdata" value="formdata"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请求参数" prop="sendparams">
            <el-input type="textarea" v-model="ruleForm.sendparams" :autosize='{ minRows: 2, maxRows: 10 }'></el-input>
          </el-form-item>
          <el-form-item label="响应数据" prop="getparams">
            <el-input type="textarea" v-model="ruleForm.getparams" :autosize='{ minRows: 2, maxRows: 10 }'></el-input>
          </el-form-item>
         
        </el-form>
      </div>
</template>
<script>
export default {
  name: 'index',
 data() {
      return {
        ruleForm: {
          title: '',
          url: '',
          type: '',
          backorfont: '',
          sendparams: "",
          getparams: "",
        }
      }
    },
    created(){
      this.ruleForm=JSON.parse(sessionStorage.getItem("apidetail"))
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
.textareas{
  height: 100px
}
</style>
