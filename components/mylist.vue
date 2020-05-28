<template>
	<view>
		
	
		<view class="home-list" v-for="(item,index) in list" :key="index">
			<view class="home-list-item1 m-f m-f-jcsb m-f-aic">
				<view class="m-f m-f-aic">
					<image :src="item.avatar" lazy-load></image>
					{{item.nickName}}
				</view>
				<view class="m-f m-f-aic m-f-jcsa"  @tap="follow(index)" :style="{'color':item.isFollowed?'#fff':'','background-color':item.isFollowed?'#2196f3':''}">{{item.isFollowed?'取消关注':'+关注'}}</view>	
			</view>
			<view class="home-list-item2">{{item.title}}</view>
			<view class="home-list-item3 m-f m-f-aic m-f-jcc">
				<image :src="item.image"  lazy-load></image>
				
				<template v-if="item.type === 'video'">
					
						<view class="video-play">
							<text class=" fa fa-play-circle-o"></text>
						</view>
						<view class="video-info">
							{{item.playNumber}} 次播放 {{item.longTime}}
						</view>
					
				</template>
				
				
			</view>
			<view class="home-list-item4 m-f m-f-jcsb m-f-aic">
				<view class="home-list-left m-f m-f-aic">
					<view :class="['fa','fa-smile-o',item.info.type === 1?'active':''] " @tap="handleLike(index)">
						
					</view>
					<view :class="{'active':item.info.type === 1}" @tap="handleLike(index)">
						{{item.info.likeNumber}}
					</view>
					<view :class="['fa',' fa-frown-o',item.info.type === 2?'active':'']" @tap="handleDislike(index)"></view>
					<view  :class="{'active':item.info.type === 2}" @tap="handleDislike(index)">{{item.info.dislikeNumber}}</view>
				</view>
				<view class="home-list-right m-f m-f-aic">
					<view class="fa fa-commenting-o">
						
					</view>
					<view class="">
						{{item.commentNumber}}
					</view>
					<view class="fa fa-share"></view>
					<view>{{item.shareNumber}}</view>
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
			list:{
				type:Array,
				default:[]
			}
		},
		methods:{
			handleLike(index){
				this.$emit('handleLike',index)
			},
			handleDislike(index){
				this.$emit('handleDislike',index)
			},
				
			follow(index){
				this.$emit('follow',index)
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
				font-size: 25rpx;
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
