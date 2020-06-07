<template>
	<view class="topics-list-wrap">
		<view class="topics-list m-f" @tap="goTopicDetail">
			<image :src="topic.topicsImg"></image>
			<view class="topics-info m-f m-f-fdc m-f-jcsa m-f-f1">
				<view>{{topic.topicsTitle}}</view>
				<view>{{topic.topicsContent}}</view>
				<view>动态 {{topic.topicsTotalNumber}} 今日 {{topic.topicsTodayNumber}}</view>
			</view>
		</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['topic'],
		methods:{
			goTopicDetail(){
				uni.navigateTo({
					url:'/pages/topicDetail/topicDetail?topicInfo='+ encodeURIComponent(JSON.stringify(this.topic))
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
	
	// scroll-view{
	// 	height: calc(100% - 200rpx) !important;
	// }
	
		
		.topics-list{
			border-bottom: 1rpx solid #eee;
			padding-bottom: 20rpx;
			padding-top: 20rpx;
			image{
				height: 200rpx;
				width: 200rpx;
				border-radius: 10rpx;
				margin-right: 20rpx;
			}
			.topics-info{
				height: 200rpx;
				font-size: 25rpx;
				view:nth-child(2),view:nth-child(3){
					color: #999;
				}
			}
		}
	
</style>
