<template>
	<div class="timeLimitPage">
		<div class="timeLimitTitle">
			<img src="//img.miyabaobei.com/d1/p5/2017/02/21/7e/08/7e08ff8b3b51c353aed9f00066c94a95663359327.jpg" alt="">
		</div>
		<div class="timeLimitTabs">
			<ul>
				<li class="tabsTime" 
				v-for="(itemTime,index) in limitData" 
				@click="getProduct(index)" 
				:class="index==0?'active' : ''">
					<p>{{itemTime.tab_time}}</p>
					<p>{{itemTime.countDownText}}</p>
				</li>
			</ul>
			<div class="tabsBox" id="tabsBox">
				<div class="tabsSlide" v-for="itemMain in limitData">
					<div class="tabsContent">
						<a href="javascript:;" v-for="item in itemMain.item_list" class="tabsList">
							<div class="maskBox" v-if="itemMain.maskflag">
								<span>{{itemMain.countDownText}}</span>
							</div>
							<div class="maskBox" v-if="item.buy_status == 2">
								<span class="statusOver">抢光啦</span>
							</div>
							<img :src="item.pic" alt="">
							<p class="itemTitle">{{item.title}}</p>
							<p class="itemPrice">秒杀价￥<span>{{item.active_price.slice(0,-3)}}</span></p>
							<div class="itemBtn on" v-if="item.buy_status == 1 || item.buy_status == 0">立即抢购</div>
							<div class="itemBtn over"v-if="item.buy_status == 2">已抢光</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				limitData : []
			}
		},
		created : function(){
			this.$http.get('https://m.mia.com/instant/seckill/seckillInfo',{
                Params:{
                    platform:"WAP"
                }
            }).then(function(data){
               	var res = data.body.seckill_list;
               	this.limitData = res;
               	for(var i=0;i<res.length;i++){
	               	var newTime = new Date(),
	               		startTime = new Date(res[i].start_time),
	               		endTime = new Date(res[i].end_time);
	               	if(endTime<newTime){
	               		res[i].countDownText = "已结束"
	               		res[i].maskflag = true;
	               	}
	               	if(startTime>newTime){
	               		res[i].countDownText = "即将开始";
	               		res[i].maskflag = true;
	               	}
	               	if(startTime<newTime && endTime>newTime){
	               		res[i].countDownText = "秒杀中"
	               		res[i].maskflag = false;
	               	}
               	}
            })
		},
		methods : {
			getProduct(index){
				var tabsSlide = document.querySelectorAll(".tabsSlide"),
					tabsTime = document.querySelectorAll(".tabsTime");
				for(var i=0;i<tabsSlide.length;i++){
					tabsSlide[i].style.display="none";
					tabsTime[i].className="tabsTime";
				}
				tabsSlide[index].style.display="block";
				tabsTime[index].className="tabsTime active";
			}
		}
	}
</script>

<style lang="less">
	.timeLimitPage{
		width:100%;
		.timeLimitTitle{
			width:100%;
			margin-top:0.1rem;
			img{
				width:100%;
				display:block;
			}
		}
		.timeLimitTabs{
			width:100%;
			ul{
				width:100%;
				display:-webkit-box;
				border-bottom:0.01rem solid #ff4a4a;
				.tabsTime{
					width:33.33%;
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-box-align:center;
					padding:0.1rem 0;
					position:relative;
					p{
						font-size:0.12rem;
					}
					&.active{
						&:after{
							content: '';
						    position: absolute;
						    bottom: 0;
						    left: 50%;
						    width: 6px;
						    height: 6px;
						    border-top: 1px solid #ff4a4a;
						    border-right: 1px solid #ff4a4a;
						    background: #fff;
						    z-index: 2;
						    -webkit-transform: translate(-50%,50%) rotate(-45deg);
						    -moz-transform: translate(-50%,50%) rotate(-45deg);
						    -ms-transform: translate(-50%,50%) rotate(-45deg);
						    transform: translate(-50%,50%) rotate(-45deg);
						}
						p{
							color:#ff4a4a;
						}
					}
				}
			}
			.tabsBox{
				width:100%;
				.tabsSlide{
					display:none;
					overflow:auto;
					.tabsContent{
						width:100%;
						padding:0.1rem;
						box-sizing:border-box;
						display:-webkit-box;
						.tabsList{
							display:block;
							width:27%;
							padding:0 0.08rem;
							box-sizing:border-box;
							position:relative;
							img{
								width:100%;
								display:block;
							}
							.maskBox{
								width:0.7rem;
								height:0.7rem;
								background:rgba(0,0,0,0.4);
								border-radius:100%;
								position:absolute;
								left:13%;
								top:3%;
								display:-webkit-box;
								-webkit-box-align:center;
								-webkit-box-pack:center;
								span{
									width:0.4rem;
									height:0.4rem;
									display:block;
									color:#fff;
									text-align:center;
									&.statusOver{
										font-size:0.13rem;
										line-height:0.4rem;
									}
								}
							}
							.itemTitle{
								font-size:0.12rem;
								margin-top:0.05rem;
								text-align:center;
								line-height:0.16rem;
								display: -webkit-box;
							    -webkit-line-clamp:2;
							    -webkit-box-orient: vertical;
							    overflow: hidden;
							    min-height: 0.3rem;
							}
							.itemPrice{
								font-size:0.12rem;
								color:#ff4a4a;
								margin-top:0.05rem;
								text-align:center;
								span{
									font-weight:bold;
								}
							}
							.itemBtn{
								width:100%;
								height:0.22rem;
								font-size:0.12rem;
								text-align:center;
								line-height:0.22rem;
								margin-top:0.08rem;
								color:#fff;
								&.on{
									background:#ff4a4a;
								}
								&.over{
									background:#ccc;
								}
							}
						}
					}
					&:nth-child(1){
						display:block;
					}
				}
				
			}
		}
	}
</style>