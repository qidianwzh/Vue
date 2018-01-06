<template>
      <div class="classmain">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <p>一级分类列表</p>
              <el-form-item label="一级中文类名" prop="cnname_two">
                  <el-select v-model="ruleForm2.oneId" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.cnname"
                      :value="item.id">
                    </el-option>
                  </el-select>
              </el-form-item>
            
            <p>二级分类列表</p>
            <el-form-item label="二级中文类名" prop="cnname_two">
              <el-input type="text" v-model="ruleForm2.cnname_two" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="二级英文标识" prop="enname_two">
              <el-input type="text" v-model="ruleForm2.enname_two" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
      </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入英文姓名'));
        } else {
          if (/^[a-zA-Z]{4,12}$/.test(value)) {
            callback();
          }else{
              callback(new Error('请输入正确的英文姓名'));
          }
          
        }
      };
    return {
        ruleForm2: {
            enname_two:"",
            cnname_two:"",
            oneId:""
        },
        options:[],
        rules2: {
          enname_one: [
            { validator: validatePass, trigger: 'blur' }
          ],
           enname_two: [
            { validator: validatePass, trigger: 'blur' }
          ],
         
        }
    }
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2)
           this.axios.post("/api/back/class/insertTwoClass",this.ruleForm2).then((data)=>{
             console.log(data)
             if(data.data.code=="1123"){
                 this.$message({
                    showClose: true,
                    message: '恭喜你，提交成功',
                    type: 'success'
                  });
             }else{
                this.$message({
                    showClose: true,
                    message: '提交失败',
                    type: 'error'
                  });
             }
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
          
          this.axios.get("/api/back/class/getOneClass").then((data)=>{
            console.log(data)
              this.options=data.data.data
          })
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
