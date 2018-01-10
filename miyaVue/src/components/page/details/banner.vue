<template>
	<div class="bannerPage">
		<swiper class="bannerSlide" :options="swiperOption" ref="mySwiper">
			<swiper-slide class="bannerItem" v-for="bannerItem in bannerData">
				<img :src="bannerItem.imgUrl" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		components : {
			swiper : swiper,
			swiperSlide : swiperSlide
		},
		data (){
			return {
				bannerData : [
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/01/19/ab/a9/aba98d35771c46eb46154106d6063abf199994657.jpg"
					},
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/01/19/0f/93/0f9314840a1e4a994d2af269cc4d505d199993796.jpg"
					},
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/01/19/7a/57/7a57589383023418a9d1f443059d0409199998596.jpg"
					},
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/01/19/62/01/62012b8207916dd57f9378c8046f8d47199999481.jpg"
					},
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/01/19/01/61/01611b1bd2ab49e2e7eb9e50a5643b3f200007150.jpg"
					}
				],
				swiperOption: {
		          	initialSlide: 1,
		          	loop: true,
		          	pagination: '.swiper-pagination'
		        }
			}
		}
	}
</script>

<style lang="less">
	.bannerPage{
		width:100%;
		border-bottom: 0.01rem solid #ccc;
		.bannerSlide{
			width:100%;
			.bannerItem{
				width:100%;
				img{
					width:100%;
					display:block;
				}
			}
			.swiper-pagination{
				.swiper-pagination-bullet{
					background:#000;
					opacity:0.3;
					width:6px;
					height:6px;
					margin:0 4px;
				}
				.swiper-pagination-bullet-active{
					background:#fa4b9b;
					opacity:0.8;
				}
			}
		}
	}
</style>