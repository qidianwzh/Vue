<template>
      <div>
         <div style="width:700px">
<el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <h3>增加文章</h3>
<el-form-item label="文章标题" prop="article_name">
    <el-input type="text" v-model="ruleForm.article_name" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="一级类名" prop="oneId">
  <el-select v-model="ruleForm.oneId" placeholder="请选择" @change="changeClassOne">
    <el-option
      v-for="item in oneClass"
      :key="item.id"
      :label="item.cnname"
      :value="item.id">
    </el-option>
  </el-select>
    
</el-form-item>
<el-form-item label="二级类名" prop="twoId">
  <el-select v-model="ruleForm.twoId" placeholder="请选择" :clearable="true">
    <el-option
      v-for="item in twoClass"
      :key="item.id"
      :label="item.cnname"
      :value="item.id" >
    </el-option>
  </el-select>

 
</el-form-item>
<el-form-item label="是否显示" prop="art_show" >
<el-radio class="radio" v-model="ruleForm.art_show" label="1">是</el-radio>
  <el-radio class="radio" v-model="ruleForm.art_show" label="0">否</el-radio>
</el-form-item>
 <el-form-item label="是否推荐" prop="recommend" >
<el-radio class="radio" v-model="ruleForm.recommend" label="1">是</el-radio>
  <el-radio class="radio" v-model="ruleForm.recommend" label="0">否</el-radio>
</el-form-item>
<el-form-item label="作者" prop="editer">
    <el-input type="text" v-model="ruleForm.editer" auto-complete="off"></el-input>
</el-form-item>
<el-form-item label="导读" prop="" >
    <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="ruleForm.daodu" :autosize='{ minRows: 2, maxRows: 10 }'>
</el-input>
</el-form-item>
<el-form-item label="时间" prop="times" >
     <el-date-picker
      v-model="ruleForm.time"
      type="datetime"
      placeholder="选择日期时间"  format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" @change="changefn">
    </el-date-picker>
</el-form-item>
 <!--editor的div为富文本的承载容器-->
 <el-form-item label="内容" prop="">
       <div id="editor"></div> 
 </el-form-item>
<el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
</el-form-item>
</el-form>
  </div>
       
</div>

</template>

<script>

export default {
  name: 'add_article',
  data () {
    var validatetime = (rule, value, callback) => {

                if (this.timedata === '') {
                    callback(new Error('请选择时间'));
                } else {

                    callback();
                }
            }
    return {
      oneClass:[],
      twoClass:[],
      olddata:[],
      editer:null,
      ruleForm: {
        article_name: "", //文章名字
        oneId: "",
        twoId: "",
        editer: "",
        content: "",
        time: "",
        daodu: "",
        recommend: "0",
        art_show: "0",
        enname_one: ""
      },
      rules2: {
              article_name: [{
                  required: true,
                  message: '请输入文章名称',
                  trigger: 'blur'
              }],
              oneId: [{
                  required: true,
                  message: '请选择一级分类',
                  trigger: 'blur'
              }],
              twoId: [{
                  required: true,
                  message: '请选择二级分类',
                  trigger: 'blur'
              }],
              editer: [{
                  required: true,
                  message: '请输入作者',
                  trigger: 'blur'
              }],
              times: [{
                  validator: validatetime,
                  message: '请选择时间',
                  trigger: 'blur'
              }]
          }
    }
  },
  created(){
    this.axios.get("/api/back/article/class").then((data)=>{
      this.olddata=data.data.data
      console.log(data)
        this.oneClass=data.data.data.oneData
        this.ruleForm.oneId=this.oneClass[0].id
        this.ruleForm.enname_one=this.oneClass[0].enname
        
        // this.twoClass=data.data.data[1]
        this.selectClassTwo()
    })
    
     
  },
  mounted(){
    this.editor = UE.getEditor('editor');
    console.log(this)
  },
  methods:{
      changefn(data){
       
            // this.ruleForm.time=data
      },
    selectClassTwo(){
      
      this.twoClass=[]
      this.olddata.twoData.forEach(function(i) {
          if(i.parent_id==this.ruleForm.oneId){
              this.twoClass.push(i)
          }
      }, this);
    },
    changeClassOne(item){
         this.olddata.oneData.forEach(function(i) {
            if(i.id==item){
                this.ruleForm.enname_one=i.enname
            }
        }, this);
        
        this.selectClassTwo()
    },
     submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid && this.editor.getContent() != "") {
                        this.ruleForm.content = this.editor.getContent()
                        console.log(this.ruleForm)
                            // alert('submit!');

                        this.axios.post("/api/back/article/insert", this.ruleForm).then((data)=>{

                            if (data.data.code == "1213") {

                               this.$message({
                                   type:"success",
                                   message:"恭喜成功"
                               })
                               
                                setTimeout(()=> {
                                    this.$router.go(0)
                                }, 1000)

                            } else {
                                this.$message({
                                   type:"error",
                                   message:"添加失败"
                               })
                            }

                        })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
  },
 
  destroyed(){
      // 将editor进行销毁
        this.editor.destroy();
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
