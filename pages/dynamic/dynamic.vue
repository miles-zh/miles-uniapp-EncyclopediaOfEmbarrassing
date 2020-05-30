<template>
	<view>
		<!-- 顶部导航 -->
		<uniNavBar fixed background-color="#2196f3" class="top-tab" @clickRight="goPublish">
			<text class="fa fa-certificate" slot="left"></text>
			<view class="top-tab-title">
				<view :class="['title',titleTab === 'follow'?'title-active':'']" @tap="changeTitleTab('follow')">
						关注
					<view class="line"></view>
				</view>
				<view :class="['title',titleTab === 'topic'?'title-active':'']" @tap="changeTitleTab('topic')">
						话题
					<view class="line"></view>
				</view>
			</view>
			<text slot='right' class="fa fa-pencil"></text>
		</uniNavBar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				titleTab:'follow'
			}
		},
		methods: {
			changeTitleTab(tab){
				this.titleTab=tab
			},
			
			goPublish(){
				uni.navigateTo({
					url:'/pages/publish/publish'
				})
			}
		},
		components:{
			uniNavBar
		}
	}
</script>

<style scoped lang="scss">
	.top-tab{
		.fa-certificate,.fa-pencil{
			color: #fff;
		}
		.top-tab-title{
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 100%;
			color: #555;
			height: 50rpx;
			.title{
				// padding: 10rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				height: 50rpx !important; 
				position: relative;
				.line{
					height: 5rpx;
					
					width: 70rpx;
					position: absolute;
					bottom: -10rpx;
				}
			}
			.title-active{
				
				color: #fff;
				.line{
					background-color: #fff;
				}
			}
		}
	}
</style>