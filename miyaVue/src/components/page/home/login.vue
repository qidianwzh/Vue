<template>
	<div class="homeContent">
		<div class="homeInputBox">
			<div class="phoneInputBox">
				<span class="inputIcon"></span>
				<input type="text" placeholder="请输入手机号码" class="phoneTest">
			</div>
			<div class="testInputBox">
				<span class="inputIcon"></span>
				<input type="text" placeholder="短信验证码">
				<span class="testCode" @click="getTestCode()">{{testCode}}</span>
			</div>
		</div>
		<div class="loginBtn">登录</div>
		<router-link to="register" class="registerBtn"><i></i>立即注册</router-link>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				testCode : "收取验证码",
				gain : false
			}
		},
		methods : {
			getTestCode(){
				var phoneTest = document.querySelector(".phoneTest"),
					reg=/^1[3,5,7,8,9][0-9]{9}$/,
					arr=[];
				if(reg.test(phoneTest.value)){
					for(var i=0;arr.length<4;i++){
						arr.push(Math.round(Math.random()*9));
					}
					this.testCode=arr.join("");
				}
				
				/*reg = /^(((1[0-9][0-9]{1})|(15[0-9]{1}))+\d{8})$/;
                    for(var i=0;i<inputBox.length;i++){
                        if(inputBox[i].value == ""){
                            alert("不能问空");
                            inputBox[i].focus();
                            return false;
                        }
                    }
                    if(!reg.test(this.text)){
                        alert("请输入正确手机号")
                        return false;
                    }
                    if(this.$refs.nums.innerHTML != this.num){
                        alert("验证码有误")
                        return false;
                    }
                    window.localStorage['phone'] = this.text;
                    if(window.localStorage['phone']){
                        this.$router.push({path:"/my"})
                    }*/

			}
		}
	}
</script>

<style lang="less" scoped>
	.homeContent{
		padding:0.25rem 0.1rem;
		box-sizing:border-box; 
		.homeInputBox{
			width:100%;
			background:#fff;
			border:0.01rem solid #d7d7d7;
			border-radius:4px;
			padding:0 0.12rem;
			box-sizing:border-box;
			div{
				width:100%;
				height:0.45rem;
				display:-webkit-box;
				-webkit-box-pack:center;
				-webkit-box-align:center;
				.inputIcon{
					display:block;
				    width: 0.11rem;
				    height: 0.17rem;
				    margin-left:0.05rem;
				    margin-right:0.15rem;
				    vertical-align:middle;
				}
				input{
					-webkit-box-flex:1;
					display:block;
					height:90%;
					border:0;
					font-size:0.16rem;
					outline:none;
				}
				.testCode{
					width:1rem;
					height:0.34rem;
					border:0.01rem solid #ff4e88;
					color:#ff4e88;
					display:block;
					border-radius:5px;
					line-height:0.34rem;
					text-align:center;
				}
				::-webkit-input-placeholder{
					color:#ccc;
				}
				&.phoneInputBox{
					border-bottom:0.01rem solid #d7d7d7;
					.inputIcon{
						background:url(//img.miyabaobei.com/d1/p3/2016/05/11/85/e4/85e414f1cef78f5435a7c3faba5b4b98.png) no-repeat;
				    	background-size:100% 100%;
					}
				}
				&.testInputBox{
					.inputIcon{
						background:url(//img.miyabaobei.com/d1/p3/2016/05/11/88/56/8856c23348678be79ca536bd244a36ae.png) no-repeat;
				    	background-size:100% 100%;
					}
				}
			}
		}
		.loginBtn{
			width:100%;
			height:0.5rem;
			background:#ff4e88;
			color:#fff;
			text-align:center;
			line-height:0.5rem;
			border-radius:5px;
			margin-top:0.3rem;
			font-size:0.18rem;
		}
		.registerBtn{
			margin-top:0.2rem;
			width:100%;
			display:block;
			i{
				display:inline-block;
			    width: 0.11rem;
			    height: 0.17rem;
			    margin-left:0.05rem;
			    margin-right:0.05rem;
			    vertical-align:middle;
			    background:url(//img.miyabaobei.com/d1/p3/2016/05/12/6f/55/6f5507c946a2f5b15b4c4306b6851988.png) no-repeat;
			    background-size:100% 100%;
			}
		}
	}
</style>