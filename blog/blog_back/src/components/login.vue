<template>
  <div class="load">
    <ul id="from">
      <li><h4 id="pleaselogin">请登陆</h4></li>
      <li v-focus="name">
          <input type="text" id="user" v-model.lazy="name.value" placeholder="请输入用户名" @blur="changeState(name)">
      </li>
      <li v-focus="pw">
          <input type="password" id="psw" placeholder="请输入密码" v-model.lazy="pw.value" @blur="changeState(pw)">
      </li>
      <el-button type="success" id="log" @click="submit">登陆</el-button>
    </ul>
  
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        name:{
          value:"",
          reg:/^[a-zA-Z]{4,10}$/,
          msg:"您输入的用户名格式不对",
          state:false,
          required:true
        },
        pw:{
          value:"",
          reg: /^[a-zA-Z0-9]\w{5,17}$/,
          msg: "您输入的密码格式不正确",
          state:false,
          required:false
        }
    }
  },
  methods:{
    changeState(item){
        item.state=true
    },
    submit(){
      const nameVal=this.name.value
      const pwVal=this.pw.value
      if(nameVal!=""&&pwVal!=""&&nameVal!=undefined&&pwVal!=undefined){
        let params={name:nameVal,password:pwVal}
        this.axios.post("/api/back/user/login",params).then((data)=>{
            console.log(data)
            if(data.data.code=="0003"){
              this.$message({
                showClose: true,
                message: data.data.msg,
                type: 'success'
              });
              sessionStorage.setItem("userId",data.data.userId)
              sessionStorage.setItem("userName",data.data.name)
              this.$router.push("/back/main")
            }else{
              this.$message({
                showClose: true,
                message: data.data.msg,
                type: 'error'
              });
            }
        })
      }
        
    }
  },
  directives: {
    focus:{
      componentUpdated(el,binding){
          // 清空提示
          let clearDom=()=>{
            let $pp=el.getElementsByTagName("p")[0];
            if($pp!=undefined){  
              el.removeChild($pp)
            }
          }
          // 验证格式，
          let test_dom=()=>{
            clearDom()
           if(!binding.value.reg.test(binding.value.value)){
              let $p=document.createElement("p")
              $p.innerHTML=binding.value.msg
              $p.style.fontSize="12px"
              $p.style.textAlign="center"
              $p.style.color="red"
              el.appendChild($p)
            }
          }
          // 检测是否为空
          let testNull=()=>{
            clearDom()
           if(binding.value.value==""){
            testRequired()
            
            }else{
              test_dom()
            }
          }
          // 检测是否为必填
          let testRequired=()=>{
              if(binding.value.required){
                let $p=document.createElement("p")
                $p.innerHTML="不能为空"
                $p.style.fontSize="12px"
                $p.style.textAlign="center"
                $p.style.color="red"
                el.appendChild($p)
                
              }
          }


          // 是否获取过焦点
          let testState=()=>{
            if(binding.value.state){
              testNull()
            }
          }
          testState()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#from {
		width: 400px;
		height: 300px;
		border: 1px solid #ccc;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 10px;
	}

	h4 {
		font-weight: normal;
		text-align: center;
		font-size: 24px;
		padding: 10px 0;
		margin:0;
	}

	input {
		width: 80%;
		height: 40px;
		display: block;
		margin: 0 auto;
		border-radius: 15px;
		border: none;
		box-sizing: border-box;
		padding: 0 10px;
		outline: none;
		border:1px solid #ccc;
	}
li{
	margin:15px;
}
	p {
		width: 70%;
		margin: 3px auto;
		height: 20px;
		line-height: 20px;
		color: #f00;
	}

	#log {
		width: 80%;
		display: block;
		margin: 20px auto;
		background:orange;
		border:0;
		outline: none;
	}

	#pleaselogin {
		padding: 20px 0;
	}

</style>
