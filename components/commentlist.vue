<template>
	<view>
		<view class="comment-list m-f">
			<image :src="commentInfo.avatar"></image>
			<view class="comment-content">
				<view class="comment-user">
					{{commentInfo.username}}
				</view>
				<view class="comment-text">
					{{commentInfo.text}}
					<template v-if="!commentInfo.replyList">
						<view class="reply-button" @tap="replyComment">
							回复
						</view>
					</template>
					
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
		props:{
			commentInfo:{
				type:Object,
				default:{}
			}
		},
		methods:{
			replyComment(){
				this.$emit('replyComment')
			}
		}
	}
</script>

<style scoped lang="scss">
.comment-list{
				margin-top: 20rpx;
				image{
					height: 100rpx;
					width: 100rpx;
					border-radius: 50%;
					border:1rpx solid #ddd;
					box-shadow: 1rpx 1rpx 5rpx #ddd;
					margin-right: 20rpx;
				}
				.comment-content{
					width: 100%;
					.comment-user{
						color: $theme-color;
						font-size: 30rpx;
					}
					.comment-text{
						font-size: 28rpx;
						margin-top: 16rpx;
						position: relative;
						width: 100%;
						.reply-button{
							position: absolute;
							color: $theme-color;
							bottom: -10rpx;
							right: 10rpx;
						}
					}
				}
			}
</style>
