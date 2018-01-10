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
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/04/11/54/e3/54e3ebe037c808f8fdd52e2c913c71ce965432773.jpg"
					},
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/04/11/ec/db/ecdbfc014b0875f8ffcb38ad99f21e6f041027483.jpg"
					},
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/04/12/ea/62/ea6213ea0bdb5c4afe03b45eaf24920d905113859.jpg"
					},
					{
						imgUrl : "https://img01.miyabaobei.com/d1/p5/2017/04/07/d3/2e/d32ebbb2c119aa2cc1735e9d0ba2f201602272699.jpg"
					}
				],
				swiperOption: {
					autoplay:2000,
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
					background:#fff;
					opacity:0.3;
				}
				.swiper-pagination-bullet-active{
					background:#fa4b9b;
					opacity:0.8;
				}
			}
		}
	}
</style>