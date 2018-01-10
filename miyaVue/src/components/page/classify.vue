<template>
	<div class="classifyPage">
		<header-bar :barType="2" :barSearch="true"></header-bar>
		<classify-list></classify-list>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	import headerBar from "@/components/base/header"
	import footerBar from "@/components/base/footer"
	import classifyList from "@/components/page/classify/classifyList"
	export default {
		components : {
			headerBar : headerBar,
			classifyList : classifyList,
			footerBar : footerBar
		}
	}
</script>

<style lang="less">
	.classifyPage{
		width:100%;
		height:100%;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		padding-bottom:0.5rem;
		box-sizing:border-box;
		.classifyMain{
			width:100%;
			-webkit-box-flex:1;
			display:-webkit-box;
			-webkit-box-orient:vertical;
		}
	}
</style>