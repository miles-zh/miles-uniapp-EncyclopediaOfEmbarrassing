<template>
	<view>
		<view class="home-list">
			<view class="home-list-item1 m-f m-f-jcsb m-f-aic">
				<view class="m-f m-f-aic">
					<image :src="list.avatar" lazy-load></image>
					{{list.nickName}}
				</view>
				<view class="m-f m-f-aic m-f-jcsa"  @tap="follow" :style="{'color':list.isFollowed?'#fff':'','background-color':list.isFollowed?'#2196f3':''}">{{list.isFollowed?'取消关注':'+关注'}}</view>	
			</view>
			<view class="home-list-item2">{{list.title}}</view>
			<view class="home-list-item3 m-f m-f-aic m-f-jcc" @tap="goDetail">
				<image :src="list.image"  lazy-load></image>
				
				<template v-if="list.type === 'video'">
					
						<view class="video-play">
							<text class=" fa fa-play-circle-o"></text>
						</view>
						<view class="video-info">
							{{list.playNumber}} 次播放 {{list.longTime}}
						</view>
					
				</template>
				
				
			</view>
			<view class="home-list-item4 m-f m-f-jcsb m-f-aic">
				<view class="home-list-left m-f m-f-aic">
					<view :class="['fa','fa-smile-o',list.info.type === 1?'active':''] " @tap="handleLike">
						
					</view>
					<view :class="{'active':list.info.type === 1}" @tap="handleLike">
						{{list.info.likeNumber}}
					</view>
					<view :class="['fa',' fa-frown-o',list.info.type === 2?'active':'']" @tap="handleDislike"></view>
					<view  :class="{'active':list.info.type === 2}" @tap="handleDislike">{{list.info.dislikeNumber}}</view>
				</view>
				<view class="home-list-right m-f m-f-aic">
					<view class="fa fa-commenting-o">
						
					</view>
					<view class="">
						{{list.commentNumber}}
					</view>
					<view class="fa fa-share"></view>
					<view>{{list.shareNumber}}</view>
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
			handleLike(index){
				this.$emit('handleLike')
			},
			handleDislike(index){
				this.$emit('handleDislike')
			},
				
			follow(index){
				this.$emit('follow')
			},
			goDetail(){
				let info=encodeURIComponent(JSON.stringify(this.list))
				uni.navigateTo({
					url:'/pages/contentDetail/contentDetail?info='+info
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
.home-list{
			padding: 20rpx;
			border-bottom: 1rpx solid #ccc;
			.home-list-item1{
				image{
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					margin-right: 20rpx;
					border:1rpx solid #ccc;
				}
				font-size: 30rpx;
				color: #999;
			}
			.home-list-item1>view:last-child{
				background-color: #ddd;
				border-radius: 5rpx;
				width: 90rpx;
				height: 40rpx;
				color: #555;
				font-size: 20rpx;
			}
			.home-list-item2{
				padding: 20rpx 0;
				font-size: 30rpx;
			}
			.home-list-item3{
				height: 350rpx;
				position: relative;
				image{
					width: 100%;
					border-radius: 20rpx;
					height: 100%;
				}
				view{
					position: absolute;
					
					text{
						color: #fff;
						
					}
				}
				.video-play{
					font-size: 120rpx;
					opacity: 0.9;
				}
				.video-info{
					bottom: 10rpx;
					right: 10rpx;
					font-size: 15rpx;
					background-color: rgba(0,0,0,.5);
					color: #ddd;
					padding: 10rpx 20rpx;
					border-radius: 20rpx;
					align-items: center;
				}
				
			}
			.home-list-item4{
				font-size: 30rpx;
				color: #999;
				padding: 20rpx 0 0;
				.home-list-left{
						
					view{
						margin-right: 10rpx;
					}
				}
				.home-list-right{
						
					view{
						margin-left: 10rpx;
					}
				}
				.active{
					color: $theme-color;
				}
			}
		}
</style>
