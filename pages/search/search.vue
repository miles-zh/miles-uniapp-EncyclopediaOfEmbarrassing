<template>
	<view>
		<!-- 顶部导航 -->
		<view class="top-tab">
			<view class="search">
				<text class="fa fa-search"></text>
				<input type="text" value="" class="search-text" placeholder="请输入搜索内容" @input="getSearchResult"/>
			</view>
			<view class="cancel-button"   @tap="goBack">取消</view>
		</view>
		<view class="search-content">
			
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			getSearchResult(e){
				// console.log(e)
				let value=e.detail.value
				console.log(value)
			}
		},
		components:{
			uniNavBar,
		}
	}
</script>

<style lang="scss" scoped>
		
	.top-tab{
		display: flex;
		background-color: #2196F3;
		// height: 100rpx;
		align-items: center;
		padding: 80rpx 20rpx 20rpx 20rpx;
		position: fixed;
		width: 100%;
		.search{
			background-color: #fff;
			flex: 1;
			padding: 5rpx 10rpx;
			border-radius: 10rpx;
			font-size: 18rpx;
			height: 60rpx !important;
			color: #999;
			display: flex;
			align-items: center;
			text{
				padding: 0 20rpx;
			}
			input{
				flex: 1;
				font-size: 20rpx;
			}
		}
		view{
			color: #fff;
			margin-left: 10rpx;
			font-size: 25rpx;
		}
	}
	
	
</style>
