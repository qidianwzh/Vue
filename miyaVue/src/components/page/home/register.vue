<template>
	<div class="homePage">
		<header-bar  :barType="2" :barText="headerText"></header-bar>
		<div class="homeContent">
			<div class="homeInputBox">
				<div class="phoneInputBox">
					<span class="inputIcon"></span>
					<input type="text" placeholder="请输入手机号码" v-model="telePhone">
				</div>
				<div class="passInputBox">
					<span class="inputIcon"></span>
					<input type="password" placeholder="请输入六位数字密码"  v-model="password">
				</div>
				<div class="testInputBox">
					<span class="inputIcon"></span>
					<input type="text" placeholder="短信验证码"  v-model="testCode">
					<button class="testCode" :class="flag?'countDown':''" @click="getTestCode($event)">{{testCodeText}}</button>
				</div>
			</div>
			<div class="loginBtn" @click="register()">注册</div>
		</div>
		<div class="maskBox" v-if="flg">
			<div class="maskMain">
				<div class="maskMsg">{{maskMsg}}</div>
				<div class="maskBtn">
					<div class="cancelBtn" @click="btn()">取消</div>
					<div class="confirmBtn" @click="btn()">确定</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	export default {
		data (){
			return { 
				headerText : "注册",
				testCodeText : "收取验证码", 
				flag : false,
				flg : false,
				telePhone : "",
				password : "",
				numCode : "",
				testCode : "",
				maskMsg : "验证码",
				registerMsgArr : [],
				registerTrue : ""
			}
		},
		components : {
			headerBar : headerBar
		},
		methods : {
			getTestCode(e){
				var phoneReg=/^1[3,5,7,8,9][0-9]{9}$/,
					passReg=/^[0-9]{6}$/,
					num=60,
					arr=[];
				if(phoneReg.test(this.telePhone) && passReg.test(this.password)){
					this.flag = true;
					this.flg = true;
					for(var i=0;arr.length<4;i++){
						arr.push(Math.round(Math.random()*9));
					}
					this.numCode = arr.join("");
					this.maskMsg = "验证码 "+this.numCode;
					var timer = setInterval(function(){
	                    num -- ;
	                    e.target.innerHTML = num+"秒后重新获取";
	                    e.target.disabled = true;
	                     if(num == 0){
	                        clearInterval(timer);
	                        e.target.disabled = false;
	                        e.target.innerHTML = "重新发送验证码";
	                    }
	                },1000);
				}else{
					this.flg = true;
					this.maskMsg = "信息输入错误"
				}
			},
			btn(){
				this.flg = false;
			},
			register(){
				if(this.telePhone != "" && this.password != ""){
					if(this.testCode == this.numCode){
						var registerMsg = {
							phone : this.telePhone,
							password : this.password
						}
						this.$store.commit('addUserMsg',registerMsg);
						this.registerTrue = "/home"
					}else{
						this.flg = true;
						this.maskMsg = "验证码输入错误"
					}
				}else{
					this.flg = true;
					this.maskMsg = "信息不能为空"
				}
			}
		}
	}
</script>

<style lang="less">
	.homePage{
		width:100%;
		height:100%;
		background:#f3f4f8;
		position:relative;
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
						width:1.2rem;
						height:0.34rem;
						border:0.01rem solid #ff4e88;
						color:#ff4e88;
						display:block;
						border-radius:5px;
						line-height:0.34rem;
						text-align:center;
						background:#fff;
						outline:none;
						&.countDown{
							background:#ccc;
							border:0.01rem solid #ccc;
							color:#fff;
						}
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
					&.passInputBox{
						border-bottom:0.01rem solid #d7d7d7;
						.inputIcon{
							background:url(//img.miyabaobei.com/d1/p3/2016/05/11/88/56/8856c23348678be79ca536bd244a36ae.png) no-repeat;
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
		.maskBox{
			position:absolute;
			left:0;
			top:0;
			right:0;
			bottom:0;
			background:rgba(0,0,0,0.3);
			.maskMain{
				width:80%;
				height:30%;
				background:#fff;
				position:absolute;
				left:10%;
				top:30%;
				border-radius:40px;
				.maskMsg{
					height:0.4rem;
					text-align:center;
					color:#ff4e88;
					font-size:0.22rem;
					line-height:0.4rem;
					margin-top:0.2rem;
				}
				.maskBtn{
					padding:0.4rem 0.3rem 0;
					div{
						width:1rem;
						height:0.45rem;
						border-radius:10px;
						line-height:0.45rem;
						text-align:center;
						&.cancelBtn{
							float: left;
							border:0.01rem solid #ff4e88;
							background:#fff;
							color:#ff4e88;
						}
						&.confirmBtn{
							float:right;
							background:#ff4e88;
							color:#fff;
						}
					}
				}
			}
		}
	}
</style>