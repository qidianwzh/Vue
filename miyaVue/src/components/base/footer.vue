<template>
	<div class="footerPage">
		<footer class="footerBar">
			<router-link to="/index" active-class="on" class="footerItem">
				<img src="https://img.miyabaobei.com/d1/p4/2016/09/18/fb/a0/fba006d51eb091cf3b63299c59d5e38c813134250.png" class="itemIcon show">
				<img src="https://img.miyabaobei.com/d1/p5/2016/09/18/2d/6e/2d6e980b0b5349275e0b8295f824ef9e812602271.png" class="itemIcon hide">
			</router-link>
			<router-link to="/classify" active-class="on" class="footerItem">
				<img src="https://img.miyabaobei.com/d1/p5/2016/09/18/90/f1/90f1f82889b47a8de835621452eed22e790295573.png" class="itemIcon show">
				<img src="https://img.miyabaobei.com/d1/p5/2016/09/18/0e/09/0e09208be94bb47f600d15be785cf830816904666.png" class="itemIcon hide">
			</router-link>
			<router-link to="/cart" active-class="on" class="footerItem">
				<img src="https://img.miyabaobei.com/d1/p4/2016/09/18/88/4e/884e4655e40f2c8e0ad9463a52de7546790508785.png" class="itemIcon">
			</router-link>
			<router-link to="/home" active-class="on" class="footerItem">
				<img src="https://img.miyabaobei.com/d1/p5/2016/09/18/83/b5/83b56a7715f4c3184b5fc141a6a66435790687263.png" class="itemIcon">
			</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		
	}	
</script>

<style lang="less">
	.footerPage{
		width:100%;
		height:0.5rem;
		position:fixed;
		left:0;
		bottom:0;
		.footerBar{
			width:100%;
			height:100%;
			background:#fff;
			z-index:20;
			display:-webkit-box;
			.footerItem{
				-webkit-box-flex:1;
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				.itemIcon{
					width:0.5rem;
					height:0.45rem;
					display:block;
					&.show{
						display:block;
					}
					&.hide{
						display:none;
					}
				}
				&.on{
					.show{
						display:none;
					}
					.hide{
						display:block;
					}
				}
			}
		}
	}
</style>