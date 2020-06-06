<template>
	<view>
		<view class="comment-list m-f">
			<image :src="commentInfo.avatar"></image>
			<view class="comment-content">
				<view class="comment-user">
					{{commentInfo.username}}
				</view>
				<view class="comment-text">
					{{commentInfo.commentText}}
					
					
				</view>
				
					
					  <slot></slot>
					
				
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
		props:{
			commentInfo:{
				type:Object,
				default:{}
			}
		},
		methods:{
			replyComment(){
				this.$emit('reply')
				// console.log('dd')
			}
		}
	}
</script>

<style scoped lang="scss">
.comment-list{
				margin-top: 40rpx;
				image{
					height: 100rpx;
					width: 100rpx;
					border-radius: 50%;
					border:1rpx solid #ddd;
					box-shadow: 1rpx 1rpx 5rpx #ddd;
					margin-right: 20rpx;
					flex-shrink: 0;
				}
				.comment-content{
					width: 100%;
					.comment-user{
						color: $theme-color;
						font-size: 25rpx;
					}
					.comment-text{
						font-size: 22rpx;
						margin-top: 16rpx;
						position: relative;
						width: 100%;
						
					}
					
				}
			}
</style>
