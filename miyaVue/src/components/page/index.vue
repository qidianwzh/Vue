<template>
	<div class="indexPage" v-scroll="scrollLoad">
		<header-bar :barType="1"></header-bar>
		<div class="indexMain">
			<banner-bar></banner-bar>
			<time-limit></time-limit>
			<image-slide :imageData="imageData"></image-slide>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	import footerBar from "@/components/base/footer"
	import bannerBar from "@/components/page/index/banner"
	import imageSlide from "@/components/page/index/imageSlide"
	import timeLimit from "@/components/page/index/timeLimit"
	export default {
		data (){
			return {
				imageData : [],
				page : 1
			}
		},
		components : {
			headerBar : headerBar,
			bannerBar : bannerBar,
			imageSlide : imageSlide,
			timeLimit : timeLimit,
			footerBar : footerBar
		},
		created : function(){
			this.getData(this.page);
		},
		methods : {
			getData(page){
				this.$http.get('https://m.mia.com/instant/welcome/ajaxGetIndexOutlets?count=2&page='+page,{
	                Params:{
	                    platform:"WAP"
	                }
	            }).then(function(data){
	            	var res = data.body.res;
	               	this.imageData.push(res);
	            })
			},
			scrollLoad (){
				this.page++;
				this.getData(this.page);
			}
		}
	}
</script>

<style lang="less">
	.indexPage{
		width:100%;
		.indexMain{
			width:100%;
			padding-bottom:0.5rem;
		}
	}
</style>