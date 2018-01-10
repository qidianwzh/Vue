<template>
	<div class="detailsPage">
		<header-bar :barType="2" :barText="headerText"></header-bar>
		<div class="detailsContent">
			<banner-bar></banner-bar>
			<div class="detailsMain">
				<div class="detailsName">
					<a href="javascript:;">{{detailsBrand}}</a>
					<span>{{detailsName}}</span>
				</div>
				<div class="detailsPrice">
					<p class="detailSalePrice">￥<span>{{salePrice}}</span></p>
					<p class="detailMarketPrice">￥<span>{{marketPrice}}</span></p>
				</div>
				<div class="detailsTitle ellipsis" @click="toggleClass($event)">{{detailsText}}</div>
				<div class="detailsType">
					<a href="javascript:;" v-if="detailsData.color" :class="detailsData.color">{{detailsData.type}}</a>
					<span>{{detailsData.name}}</span>
					<i class="fa fa-angle-right"></i>
				</div>
			</div>			
			<div class="detailsPromise">
				<div class="promiseList">
					<ul>
						<li v-for="item in promiseData">{{item.promise}}</li>
					</ul>
					<i :class="falg?'fa fa-angle-down':'fa fa-angle-up'" @click="toggleBox($event)"></i>
				</div>
				<div class="promiseContent" v-show="falg">
					<div class="promiseItem">
						<h6>支持7天无理由退货</h6>
						<p>本商品支持7天内无理由退货服务</p>
					</div>
					<div class="promiseItem">
						<h6>花呗分期</h6>
						<p>订单实付金额满100支持花呗分期付款</p>
					</div>
					<div class="promiseItem">
						<h6>假一赔十</h6>
						<p>蜜芽为您选购的每一件商品，都通过严格的品质把关，保证正品。特作出“假一赔十”的正品保证承诺，杜绝一切假货，请放心购买</p>
					</div>
				</div>
			</div>
			<div class="detailsMsgType">
				<div><span>已选</span></div>
				<div><span>类型</span></div>
				<div><span>数量</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	import bannerBar from "@/components/page/details/banner"
	export default {
		data (){
			return {
				headerText : "商品详情",
				detailsBrand : "嘉宝 Gerber",
				detailsName : this.$route.params.name,
				salePrice : this.$route.params.saleP,
				marketPrice : this.$route.params.market,
				detailsText : "米粉肉泥混合特卖富含益生菌+益生元双重呵护宝宝娇嫩肠胃更好的消化吸收，CHE淀粉水解工艺助消化吸收并保留食物天然甜味，20多种营养素科学配比营养均衡，进口优选配料。",
				detailsData : null,
				falg : false,
				promiseData : [
					{
						promise : "支持7天无理由退货"
					},
					{
						promise : "满88包邮"
					},
					{
						promise : "花呗分期"
					},
					{
						promise : "假一赔十"
					}
				]
			}
		},
		components : {
			headerBar : headerBar,
			bannerBar : bannerBar
		},
		created (){
			this.getData()
		},
		methods : {
			toggleClass (event){
				var thisDom = event.target;
				if(thisDom.className == "detailsTitle ellipsis"){
					thisDom.className = "detailsTitle"
				}else{
					thisDom.className = "detailsTitle ellipsis"
				}
			},
			getData (){
				this.$http.get("https://m.mia.com/instant/item/promotion/"+this.$route.params.id)
				.then(function(data){
					var res = data.body.p[0]
					this.detailsData = res;
					console.log(this.detailsData)
				})
			},
			toggleBox(event){
				if(this.falg == false){
					this.falg = true;
				}else{
					this.falg = false;
				}
			}
		}
	}
</script>

<style lang="less">
	.detailsPage{
		.detailsContent{
			background:#eee;
			.detailsMain{
				background:#fff;
				padding:0.1rem 0.1rem 0;
				box-sizing:border-box;
				margin-bottom:0.03rem;
				.detailsName{
					width:100%;
					a{
						color:#ff4e88;
						font-size:0.16rem;
					}
					span{
						color:#666;
						font-size:0.16rem;
						padding-left:0.1rem;
						line-height:0.2rem;
					}
				}
				.detailsPrice{
					padding:0.1rem 0;
					display:-webkit-box;
					-webkit-box-align:end;
					.detailSalePrice{
						color:#f34fa1;
						line-height:0.3rem;
						span{
							font-size:0.25rem;
						}
					}
					.detailMarketPrice{
						color:#999;
						line-height:0.3rem;
						text-decoration:line-through;
						margin-left:0.1rem;
						font-size:0.12rem;
					}
				}
				.detailsTitle{
					color:#999;
					margin-bottom:0.1rem;
					&.ellipsis{
						overflow:hidden;
						display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					}
				}
				.detailsType{
					height:0.4rem;
					border-top:0.01rem solid #eee;
					display:-webkit-box;
					-webkit-box-align:center;
					a{
						height:0.18rem;
						display:block;
						font-size:0.12rem;
						color:#fff;
						line-height:0.18rem;
						text-align:center;
						border-radius:3px;
						&.tejia{
							background:#ff4e88;
							width:0.3rem;
						}
						&.renxuan{
							background:#4ecf85;
							width:0.6rem;
						}
					}
					span{
						-webkit-box-flex:1;
						display:block;
						margin-left:0.1rem;
					}
					i{
						width:0.2rem;
						display:block;
						font-size:0.24rem;
						color:#999;
						text-align:right;
					}
				}
			}
			.detailsPromise{
				background:#fff;
				margin-bottom:0.1rem;
				.promiseList{
					padding:0.1rem;
					box-sizing:border-box;
					display:-webkit-box;
					-webkit-box-align:center;
					ul{
						-webkit-box-flex:1;
						li{
							float: left;
						    margin-right: 0.1rem;
						    line-height: 1.5;
						    &:before{
						    	content: "";
							    height: 0.05rem;
							    width: 0.05rem;
							    background: #ff447c;
							    border-radius: 100%;
							    display: inline-block;
							    margin: 0 0.05rem 3px 0;
						    }
						}
					}
					i{
						display:block;
						font-size:0.24rem;
						color:#999;
					}
				}
				.promiseContent{
					padding:0 0.1rem;
					box-sizing:border-box;
					border-top:0.02rem solid #eee;
					.promiseItem{
						padding:0.08rem 0;
						box-sizing:border-box;
						h6{
						    font-weight: bold;
						    color: #1a1a1a;
						    line-height: 0.2rem;
						    &:before{
						    	content: "";
							    background: url(//img.miyabaobei.com/d1/p5/2016/12/06/b5/2e/b52e8a6865da9a0bd87f1e0006d616fa133458315.png) no-repeat;
							    background-size: 160px 40px;
							    display: inline-block;
							    height: 0.2rem;
							    width: 0.2rem;
							    margin-right: 0.05rem;
							    vertical-align: -0.05rem;
							    background-position: -40px 2px;
						    }
						}
						p{
							color: #3a3a3a;
    						line-height: 0.2rem;
    						margin-top:0.05rem;
						}
					}
				}
			}
			.detailsMsgType{
				padding:0.1rem;
				box-sizing:border-box;
				background:#fff;
				div{
					color:#999;
				}
			}
		}
	}
</style>