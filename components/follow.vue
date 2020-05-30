<template>
	<view class="follow-content">
		<template v-if="newsList.length !== 0">
			<scroll-view :scroll-y="true">
				
				
			</scroll-view>
		</template>
		<template v-else>
			<errPage></errPage>
		</template>
		
	</view>
</template>

<script>
	import errPage from './errPage.vue'
	export default {
		data() {
			return {
				newsList:[
					
				]
			};
		},
		components:{
			errPage,
		}
	}
</script>

<style scoped lang="scss">
	.follow-content{
		height: calc(100vh - 100rpx - 88rpx - 150rpx) !important;
		scroll-view{
			height: calc(100vh - 100rpx - 88rpx - 150rpx) !important;
		}
	}
</style>
