<template>
	<div class="homePage">
		<header-bar  :barType="2" :barText="headerText"></header-bar>
		<login-content v-if="!flag"></login-content>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	import loginContent from "@/components/page/home/login"
	export default {
		data (){
			return { 
				headerText : "登录蜜芽"
			}
		},
		components : {
			headerBar : headerBar,
			loginContent : loginContent
		},
		created () {
			this.loginFlag()
		},
		methods : {
			loginFlag(){
				if(window.localStorage['phone']){
	                this.flag = true;
	            }else{
	                this.flag = false;
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
	}
</style>