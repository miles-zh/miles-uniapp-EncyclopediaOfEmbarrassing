<template>
	<view>
		<uni-nav-bar fixed backgroundColor="#2196f3" class="top-nav-bar" @clickLeft='goBack' @clickRight="share">
			<i class="fa fa-chevron-left" aria-hidden="true" slot='left'></i>
			<view class="m-f m-f-jcc m-f-f1">
				<view>
					{{list.title}}
				</view>
			</view>
			<text slot='right'>···</text>
		</uni-nav-bar>
		<scroll-view scroll-y="true">
			<view class="common-list m-f">
				<view class="common-list-left">
					<image :src="list.userPic" lazy-load></image>
				</view>
				<view class="common-list-right">
					<view class="common-list-right-row-1 m-f m-f-aic m-f-jcsb">
						<view class="common-list-right-row-left m-f m-f-aic">
							<view>{{list.username}}</view>
							<view :style="{'background-color':list.sex === 0?'#2196f3':'#f40'}"> <text :class="['fa',list.sex === 0?'fa-mars':'fa-venus']"></text>
								{{list.age}}</view>
						</view>
						<view class="common-list-right-row-right m-f m-f-aic">
							<view :class="{'follow':list.isFollowed}" @tap='follow'>
								{{list.isFollowed?'取消关注':'+ 关注'}}
							</view>
						</view>
					</view>
					<view class="common-list-right-row-2">26天前</view>
					<view class="common-list-right-row-3">{{list.title}}</view>
					<view class="common-list-right-row-4 m-f m-f-aic m-f-jcc m-f-fdc">
						<block v-for="(item,index) in list.imgUrl" :key="index">
							<image v-if="list.type !== 'share' " :src="item" lazy-load @tap="previwImg(index)"></image>
						</block>

						<view v-if="list.type === 'video'" class="play fa fa-play-circle"></view>
						<view class="play-info" v-if="list.type === 'video'">
							{{list.videoInfo.playNumber}} 次播放 {{list.videoInfo.longTime}}
						</view>
						<view class="share m-f" v-if="list.type === 'share'">
							<image :src="list.shareInfo.shareImg"></image>
							<view class="share-title">
								{{list.shareInfo.shareTitle}}
							</view>
						</view>
					</view>
					<view class="common-list-right-row-5 m-f m-f-jcsb">
						<view class="address">
							{{list.place}}
						</view>
						<view class="info m-f m-f-aic">
							<view> <i class="fa fa-share" aria-hidden="true"></i> {{list.shareNumber}}</view>
							<view> <i class="fa fa-comment" aria-hidden="true"></i> {{list.commentNumber}}</view>
							<view @tap='handleLike' :style="{'color':list.isLiked?'#f40':''}"> <i class="fa fa-thumbs-up" aria-hidden="true"></i>
								{{list.likesNumber}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="comment-wrap">
				<view class="comment-title">
					最新评论 1
				</view>
				<view class="comment-content-wrap">
					<block v-for="(item,index) in commentList" :key="index">
						<commentlist :commentInfo="item" @replyComment="null"></commentlist>
						<template v-if="item.replyList.length>0">
							<view class="reply-comment">
								<block v-for="(item1,index1) in item.replyList" :key="index1">
								<commentlist :commentInfo="item1" @replyComment="replyComment(index,index1)"></commentlist>
								</block>
							</view>
						</template>
						
					</block>
					
				</view>
			</view>
		</scroll-view>

		<view class="publish-comment">
			<input type="text" placeholder="文明发言" />
			<view class="">

			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import commentlist from '@/components/commentlist.vue'
	export default {
		data() {
			return {

				list: {
				},
				commentList:[
					{
						username:"nihao",
						text:"生活如此美好",
						avatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg',
						replyList:[
							{
								username:'hello',
								avatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg',
								text:"生活如此多娇"
							}
						]
					}
				]
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			share() {
				console.log('share')
			},
			follow() {
				this.list.isFollowed = !this.list.isFollowed
			},

			handleLike() {


				if (this.list.isLiked === false) {
					this.list.isLiked = true
					this.list.likesNumber++
				} else {
					this.list.likesNumber--
					this.list.isLiked = false
				}


			},
			previwImg(index) {
				uni.previewImage({
					current: this.list.imgUrl[index],
					urls: this.list.imgUrl
				})
			},
			replyComment(index,index1){
				console.log(index,index1)
			}

		},
		components: {
			uniNavBar,
			commentlist
		},
		onLoad(options) {

			let info = JSON.parse(decodeURIComponent(options.info))
			this.list = {
				userPic: info.avatar,
				username: info.nickName,
				// 0代表男性，1代表女性
				sex: 0,
				age: 25,
				isFollowed: info.isFollowed,
				title: info.title,
				titlePic: info.image,
				type: info.img,
				place: '深圳 龙岗',
				shareNumber: info.shareNumber,
				commentNumber: info.commentNumber,
				likesNumber: info.info.likeNumber,
				info: info.info,
				isLiked: false,
				imgUrl: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg',
					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg',
					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg'
				]
			}
			console.log(info)
		}
	}
</script>

<style scoped lang="scss">
	.top-nav-bar {

		i,
		view,
		text {
			color: #fff;
		}

		view {

			view {
				width: 300rpx;
				text-align: center;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}

		}
	}

	scroll-view {
		margin-top: 50rpx;
	}

	.common-list {
		// box-sizing: border-box;
		width: 100%;
		padding: 20rpx;
		border-bottom: 1px solid #eee;

		.common-list-left {
			width: 100rpx;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				border: 1px solid #eee;
			}
		}

		.common-list-right {

			width: 650rpx;
			padding-right: 20rpx;

			.common-list-right-row {
				padding: 10rpx;
				width: 100%;

			}

			.common-list-right-row-1 {
				height: 50rpx;
				color: #888;
				font-size: 25rpx;

				.common-list-right-row-left {
					margin-left: 10rpx;

					view:nth-child(2) {
						padding: 5rpx 10rpx;
						color: #fff;
						font-size: 8rpx;
						letter-spacing: 5rpx;
						border-radius: 10rpx;
						margin-left: 10rpx;
					}
				}

				.common-list-right-row-right {
					font-size: 20rpx;

					view {
						padding: 4rpx 10rpx;
						border-radius: 10rpx;
						background-color: #fefefe;
						border: 1rpx solid #ddd;
					}

					.follow {
						background-color: $theme-color;
						color: #fff;
						border-color: $theme-color;
					}
				}
			}

			.common-list-right-row-2 {
				padding: 5rpx 10rpx;
				background-color: #ddd;
				font-size: 20rpx;
				margin-left: 10rpx;
				color: #555;
				width: 90rpx;
			}

			.common-list-right-row-3 {
				font-size: 25rpx;
				margin-top: 16rpx;
			}

			.common-list-right-row-4 {



				position: relative;
				padding: 0;
				margin-top: 10rpx;

				image {
					height: 400rpx;
					width: 100%;
					margin-top: 10rpx;
					border: 1px solid #ccc;
					border-radius: 10rpx;
				}

				.play {
					position: absolute;
					font-size: 100rpx;
					color: #fff;
				}

				.play-info {
					background-color: rgba(0, 0, 0, .5);
					position: absolute;
					font-size: 20rpx;
					bottom: 10rpx;
					right: 10rpx;
					color: #fff;
					padding: 5rpx 10rpx;
					border-radius: 10rpx;
				}

				.share {
					background-color: #eee;
					width: 100%;
					overflow: hidden;

					image {
						width: 120rpx;
						height: 100rpx;
						margin-right: 10rpx;
					}

					.share-title {
						flex: 1;
						overflow: hidden;
						line-height: 50rpx;
						font-size: 30rpx;
						padding: 10rpx;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}

			.common-list-right-row-5 {
				color: #555;
				font-size: 25rpx;
				margin-top: 10rpx;

				.info {
					view {
						margin-right: 10rpx;
						letter-spacing: 2rpx;
					}
				}
			}
		}
	}
	.comment-wrap{
		padding: 20rpx;
		.comment-title{
			font-size: 35rpx;
		}
		.comment-content-wrap{
			
			
			.reply-comment{
				width: 590rpx;
				margin-left: 100rpx;
				background-color: #eee;
				padding: 20rpx;
				margin-top: 20rpx;
			}
		}
	}
</style>
