<template>
	<div class="cartPage">
		<header-bar  :barType="2" :barText="headerText"></header-bar>
		<div class="cratEmptyContent">
			<div class="cratImgTab">
				<img src="https://img.miyabaobei.com/d1/p5/2016/11/14/35/92/35923045c62da157432add71ffcea861189139729.png" alt="">
			</div>
			<p class="cartTextTab">您的购物车是空的哦！</p>
			<div class="cartBtnTab">
				<router-link to="/index" class="lookBtn">随便看看</router-link>
				<router-link to="/home" class="loginBtn">去登录</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	export default {
		data (){
			return { 
				headerText : "购物车"
			}
		},
		components : {
			headerBar : headerBar
		}
	}
</script>

<style lang="less">
	.cartPage{
		width:100%;
		height:100%;
		background:#f3f4f8;
		.cratEmptyContent{
			width:100%;
			display:-webkit-box;
			-webkit-box-orient:vertical;
			-webkit-box-align:center;
			.cratImgTab{
				width:25%;
				margin-top:0.25rem;
				img{
					display:block;
					width:100%;
				}
			}
			.cartTextTab{
				margin-top:0.15rem;
				color:#999;
				font-size:0.13rem;
			}
			.cartBtnTab{
				width:75%;
				height:0.5rem;
				margin-top:0.3rem;
				display:-webkit-box;
				-webkit-box-pack:justify;  
				a{
					width:1.1rem;
					height:0.38rem;
					text-align:center;
					line-height:0.38rem;
					font-size:0.15rem;
					display:block;
					&.lookBtn{
						background:#ff4e88;
						color:#fff;
					}
					&.loginBtn{
						background:#fff;
						color:#666;
					}
				}
			}
		}
	}
</style>