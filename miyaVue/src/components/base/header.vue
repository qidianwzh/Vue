<template>
	<div class="headerPage">
		<header class="headerBar" v-if="barType == 1">
			<div class="iconGroup leftIcon"></div>
			<div class="headerTitle">
				<i class="titleIcon"></i>
				<span class="titleText">{{titleText}}</span>
			</div>
			<div class="iconGroup rightIcon">
				<router-link to="/classify" class="searchIcon"></router-link>
			</div>
		</header>
		<header class="headerBar" v-if="barType == 2">
			<div class="iconGroup leftIcon">
				<router-link to="/index" class="fa fa-angle-left faIcon"></router-link>
			</div>
			<div class="headerSearch">
				<div class="searchBox" v-if="barSearch">
					<input type="text" placeholder="请输入关键字搜索">
				</div>
				<div class="textBox" v-if="barText">
					{{barText}}
				</div>
			</div>
			<div class="iconGroup rightIcon">
				<router-link to="/index" class="fa fa-home faIcon"></router-link>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		props : {
			barType : {
				type : Number
			},
			barText : {
				type : String
			},
			barSearch : {
				type : Boolean
			}
		},
		data (){
			return {
				titleText : "进口母婴正品特卖"
			}
		}
	}
</script>

<style lang="less">
	.headerPage{
		width:100%;
		height:0.44rem;
		.headerBar{
			width:100%;
			height:100%;
			position:relative;
			.headerTitle{
				position:absolute;
				left:0;
				top:0;
				bottom:0;
				right:0;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				.titleIcon{
					width:0.32rem;
					height:0.16rem;
					background:url(https://img.miyabaobei.com/d1/p5/2016/09/23/b3/4e/b34e6d21b2dd580f3a01cec18bb136df133561100.png) no-repeat;
					display:block;
					background-size:100% 100%;
				}
				.titleText{
					display:block;
					color:#000;
					margin-left:0.05rem;
					font-weight:bold;
				}
			}
			.headerSearch{
				width:100%;
				height:100%;
				background:#ff4d8e;
				position:absolute;
				left:0;
				top:0;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				.searchBox{
					width:76%;
					height:0.36rem;
					background:#fff;
					border-radius:5px;
					input{
						color: #999;
						width:90%;
						height:92%;
						border:0;
						margin-left:0.1rem;
						font-size:0.16rem;
						outline:none;
					}
				}
				::-webkit-input-placeholder{
					color:#ccc;
				}
				.textBox{
					color:#fff;
					font-size:0.18rem;
				}
			}
			.iconGroup{
				width:0.44rem;
				height:100%;
				display:-webkit-box;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				z-index:20;
				position:relative;
				&.rightIcon{
					float:right;
				}
				&.leftIcon{
					float: left;
				}
				.searchIcon{
					width:0.24rem;
					height:0.24rem;
					display:block;
					background:url(https://img.miyabaobei.com/d1/p5/2016/09/23/90/cb/90cb5f50e0f82e707c31d09984181a7b181194647.png) center no-repeat;
					background-size:100% 100%;
				}
				.faIcon{
					font-size:0.24rem;
					color:#fff;
				}
			}
		}
	}
</style>