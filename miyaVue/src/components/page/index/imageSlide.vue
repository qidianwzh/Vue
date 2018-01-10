<template>
	<div class="imageSlidePage">
		<div class="slideTitle">
			<p>今日特价<span>每日十点上新</span></p>
		</div>
		<div class="imageBox" v-if="imageData" v-for="item in imageData">
			<div class="imageContent" v-for="imageItem in item">
				<div class="pics">
					<img :src="imageItem.outletPic" alt="">
				</div>
				<div class="picsList">
					<a href="javascript:;" v-for="picItem in imageItem.outletsItems" class="listItem">
						<div class="picBox">
							<router-link  class="itemPic" 
								:to="{name:'details',params:{id:picItem.id,name:picItem.name,saleP:picItem.sale_price,market:picItem.market_price}}" 
								:style="{backgroundImage:'url('+picItem.itemPic+')'}">
							</router-link>
						</div>
						<p class="picText">{{picItem.name}}</p>
						<p class="picPrict">
							<span class="marketPrice">￥{{picItem.sale_price}}</span>
							<span class="salePrice">￥{{picItem.market_price}}</span>
						</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props : {
			imageData : {
				type : Array
			}
		}
	}
</script>

<style lang="less">
	.imageSlidePage{
		width:100%;
		.slideTitle{
			height:0.4rem;
			width:100%;
			background:#f8f8f8;
			padding:0 0.1rem;
			box-sizing:border-box;
			p{
				color:#000;
				line-height:0.4rem;
				span{
					color:#666;
					line-height:0.4rem;
					font-size:0.12rem;
					margin-left:0.08rem;
				}
				&:before{
					display: inline-block;
				    vertical-align: middle;
				    position: relative;
				    top: -2px;
				    content: '';
				    margin-right: 3px;
				    width: 20px;
				    height: 20px;
				    background:url(https://img.miyabaobei.com/d1/p4/2016/09/23/5e/ff/5eff7c11f9747793520ee91ae1591d53134191891.png) no-repeat;
				    background-size: auto 20px;
				}
			}
		}
		.imageContent{
			width:100%;
			background:#fff;
			.pics{
				width:100%;
				img{
					width:100%;
					display:block;
				}
			}
			.picsList{
				padding:0.1rem;
				box-sizing:border-box;
				display:-webkit-box;
				overflow:auto;
				.listItem{
					width:25%;
					display:block;
					margin:0 0.05rem;
					.picBox{
						width:100%;
						border:0.01rem solid #ccc;
						padding-top: 100%;
    					position: relative;
						.itemPic{
							width: 100%;
						    display: block;
						    box-sizing: border-box;
						    background-size: 100% 100%;
						    padding:0.05rem 0.1rem;
						    position:absolute;
						    left:0;
						    top:0;
						    bottom:0;
						    right:0;
						}
					}
					.picText{
						font-size:0.12rem;
						color:#000;
						display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					    overflow: hidden;
					    min-height: 0.3rem;
					    margin-top: 0.05rem;
					    text-align:center;
					}
					.picPrict{
						width:100%;
						display:-webkit-box;
						-webkit-box-pack:center;
						line-height:0.2rem;
						margin-top:0.05rem;
						.marketPrice{
							color:#fa4b9b;
							display:block;
							margin-right:0.05rem;
						}
						.salePrice{
							color:#ccc;
							font-size:0.12rem;
							display:block;
							text-decoration:line-through;
						}
					}
				}
			}
		}
	}
</style>