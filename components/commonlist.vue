<template>
	<view>
		<view class="common-list m-f">
			<view class="common-list-left"><image :src="list.avatar" lazy-load></image></view>
			<view class="common-list-right">
				<view class="common-list-right-row m-f m-f-aic m-f-jcsb">
					<view class="common-list-right-row-left m-f m-f-aic">
						<view>{{list.username}}</view>
						<view :style="{'background-color':list.sex === 0?'#2196f3':'#f40'}"> <text :class="['fa',list.sex === 0?'fa-mars':'fa-venus']"></text> {{list.userage}}</view>
					</view>
					<view  class="common-list-right-row-right m-f m-f-aic">
						<view :class="{'follow':list.isFollowed}" @tap='follow'>
							{{list.isFollowed?'取消关注':'+ 关注'}}
						</view>
					</view>
				</view>
				<view class="common-list-right-row">{{list.contentTitle}}</view>
				<view class="common-list-right-row m-f m-f-aic m-f-jcc" @tap='goDetail(list)'>
					<image v-if="list.contentType !== 'share' " :src="list.contentImgs[0].imgUrl" lazy-load></image>
					<view v-if="list.contentType === 'video'" class="play fa fa-play-circle"></view>
					<view class="play-info" v-if="list.contentType === 'video'">
						{{list.videoInfo.playNumber}} 次播放 {{list.videoInfo.longTime}}
					</view>
					<view class="share m-f" v-if="list.type === 'share'">
						<image :src="list.shareInfo.shareImg"></image>
						<view class="share-title">
							{{list.shareInfo.shareTitle}}
						</view>
					</view>
				</view>
				<view class="common-list-right-row m-f m-f-jcsb">
					<view class="address">
						{{list.contentCreateAddress}}
					</view>
					<view class="info m-f m-f-aic">
						<view> <i class="fa fa-share" aria-hidden="true"></i> {{list.sharesNumber}}</view>
						<view> <i class="fa fa-comment" aria-hidden="true"></i> {{list.commentsNumber}}</view>
						<view> <i class="fa fa-thumbs-up" aria-hidden="true"></i> {{list.contentLikesInfo.likesNumber}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['list'],
		methods:{
			follow(){
				this.$emit('clickFollow')
			},
			goDetail(list){
				uni.navigateTo({
					url:"/pages/contentDetail/contentDetail?list="+encodeURIComponent(JSON.stringify(list))
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.common-list{
		// box-sizing: border-box;
		width: 100%;
		padding: 20rpx;
		border-bottom: 1px solid #eee;
		.common-list-left{
			width: 100rpx;
			image{
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				border:1px solid #eee;
			}
		}
		.common-list-right{
			
			width: 650rpx;
			padding-right: 20rpx;
			
			.common-list-right-row{
				padding: 10rpx;
				width: 100%;
				
			}
			.common-list-right-row:nth-child(1){
				height: 100rpx;
				color: #888;
				font-size: 25rpx;
				.common-list-right-row-left{
					
					view:nth-child(2){
						padding: 5rpx 12rpx;
						color: #fff;
						font-size: 20rpx;
						letter-spacing: 5rpx;
						border-radius: 10rpx;	
						margin-left: 10rpx;
					}
				}
				.common-list-right-row-right{
					font-size: 20rpx;
					view{
						padding: 4rpx 10rpx;
						border-radius: 10rpx;
						background-color: #fefefe;
						border:1rpx solid #ddd;
					}
					.follow{
						background-color: $theme-color;
						color: #fff;
						border-color: $theme-color;
					}
				}
			}
			.common-list-right-row:nth-child(2){
				font-size: 25rpx;
				text-indent: 50rpx;
			}
			.common-list-right-row:nth-child(3){
				
				border-radius: 10rpx;
				border:1px solid #ccc;
				position: relative;
				padding: 0;
				image{
					height: 400rpx;
					width: 100%;
				}
				.play{
					position: absolute;
					font-size: 100rpx;
					color: #fff;
				}
				.play-info{
					background-color: rgba(0,0,0,.5);
					position: absolute;
					font-size: 20rpx;
					bottom: 10rpx;
					right: 10rpx;
					color: #fff;
					padding: 5rpx 10rpx;
					border-radius: 10rpx;
				}
				.share{
					background-color: #eee;
					width: 100%;
					overflow: hidden;
					image{
						width: 120rpx;
						height: 100rpx;
						margin-right: 10rpx;
					}
					.share-title{
						flex: 1;
						overflow: hidden;
						line-height: 50rpx;
						font-size: 30rpx;
						padding: 10rpx;
						display: -webkit-box;
						-webkit-line-clamp:2;
						-webkit-box-orient:vertical;
					}
				}
			}
			.common-list-right-row:nth-child(4){
				color: #555;
				font-size: 25rpx;
				.info{
					view{
						margin-right: 10rpx;
						letter-spacing: 2rpx;
					}
				}
			}
		}
	}
</style>
