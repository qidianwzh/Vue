<template>
	<div class="classifyListPage">
		<div class="classifyLeftBox">
			<div class="listOne" 
				v-for="(listName,index) in listNameData" 
				:class="index==0 ? 'on' : '' "
				:id="listName.id"
				@click="getListBox(index)">
				{{listName.name}}
			</div>
		</div>
		<div class="classifyRightBox">
			<div class="listContent" v-for="itemContent in listData">
				<h6 class="listTitle">{{itemContent.title}}</h6>
				<div class="listMain">
					<a href="javascript:;" v-for="itemData in itemContent.categorys">
						<i :style="{backgroundImage:'url('+itemData.banner_image+')'}"></i>
						<!-- <img :src="itemData.banner_image" alt=""> -->
						<span>{{itemData.c_name}}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				listNameData : [
					{
						id:32,
						name:"宝宝奶粉"
					},
					{
						id:33,
						name:"屁屁护理"
					},
					{
						id:63,
						name:"营养辅食"
					},
					{
						id:43,
						name:"喂养用品"
					},
					{
						id:68,
						name:"宝宝洗护"
					},
					{
						id:83,
						name:"童装童鞋"
					},
					{
						id:70,
						name:"玩具书籍"
					},
					{
						id:80,
						name:"宝宝寝居"
					},
					{
						id:72,
						name:"出行装备"
					},
					{
						id:67,
						name:"孕产母乳"
					},
					{
						id:78,
						name:"营养保健"
					},
					{
						id:73,
						name:"美妆个护"
					}
				],
				pid : 32,
				listData : null
			}
		},
		created (){
			this.getListData();
		},
		methods:{
			getListBox(index){
				var classifyList = document.querySelectorAll(".listOne");
				for(var i=0;i<classifyList.length;i++){
					classifyList[i].className = "listOne";
				}
				classifyList[index].className = "listOne on";
				this.pid = classifyList[index].id;
				this.getListData();
			},
			getListData(){
				this.$http.get('https://m.mia.com/search/getCategoryClassify?pid='+this.pid,{
	                Params:{
	                    platform:"WAP"
	                }
	            }).then(function(data){
	            	this.listData = data.body.categorysInfos.son_category;
	               	console.log(data.body.categorysInfos.son_category)
	            })
			}
		}
	}
</script>

<style lang="less">
	.classifyListPage{
		-webkit-box-flex:1;
		display:-webkit-box;
		overflow:hidden;
		.classifyLeftBox{
			width:1rem;
			background:#f8f8f8;
			.listOne{
				width:100%;
				height:0.48rem;
				text-align:center;
				line-height:0.48rem;
				&.on{
					background:#fff;
					color:#ff4d8e;
					border-left:0.03rem solid #ff4d8e;
				}
			}
		}
		.classifyRightBox{
			-webkit-box-flex:1;
			overflow-y:auto;
			.listContent{
				width:100%;
				.listTitle{
					height:0.4rem;
					padding:0 0.1rem;
					box-sizing:border-box;
					line-height:0.4rem;
					margin-top:0.1rem;
				}
				.listMain{
					width:100%;
					overflow:hidden;
					a{
						width:33.33%;
						float:left;
						padding:0.1rem;
						box-sizing:border-box;
						display:-webkit-box;
						-webkit-box-orient:vertical;
						-webkit-box-align:center;
						img{
							display:block;
							width:70%;
							height:0.54rem;	
						}
						i{
							display:block;
							width:70%;
							height:0.54rem;	
							background-size:100% 100%;
						}
						span{
							width:100%;
							height:0.32rem;
							line-height:0.16rem;
							text-align:center;
							display:block;
							color:#999;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    -webkit-box-orient: vertical;
						    overflow: hidden;
						    margin-top:0.05rem;
						}
					}
				}
			}
		}
	}
</style>