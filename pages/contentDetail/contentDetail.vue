<template>
	<view>
		<uni-nav-bar fixed backgroundColor="#2196f3" class="top-nav-bar" @clickLeft='goBack' @clickRight="share">
			<i class="fa fa-chevron-left" aria-hidden="true" slot='left'></i>
			<view class="m-f m-f-jcc m-f-f1">
				<view>
					{{contentInfo.contentTitle}}
				</view>
			</view>
			<text slot='right'>···</text>
		</uni-nav-bar>
		<scroll-view scroll-y="true">
			<view class="common-list m-f">
				<view class="common-list-left">
					<image :src="contentInfo.avatar" lazy-load></image>
				</view>
				<view class="common-list-right">
					<view class="common-list-right-row-1 m-f m-f-aic m-f-jcsb">
						<view class="common-list-right-row-left m-f m-f-aic">
							<view>{{contentInfo.username}}</view>
							<view :style="{'background-color':contentInfo.sex === 0?'#2196f3':'#f40'}"> <text :class="['fa',contentInfo.sex === 0?'fa-mars':'fa-venus']"></text>
								{{contentInfo.userage}}</view>
						</view>
						<view class="common-list-right-row-right m-f m-f-aic">
							<view :class="{'follow':contentInfo.isFollowed}" @tap='follow'>
								{{contentInfo.isFollowed?'取消关注':'+ 关注'}}
							</view>
						</view>
					</view>
					<view class="common-list-right-row-2">26天前</view>
					<view class="common-list-right-row-3">{{contentInfo.contentTitle}}</view>
					<view class="common-list-right-row-4 m-f m-f-aic m-f-jcc m-f-fdc">
						
							
							<template v-if='contentInfo.contentType !== "share"'>
								<image :src="item.imgUrl " lazy-load @tap="previwImg(index)" v-for="(item,index) in contentInfo.contentImgs" :key="index"></image>
							</template>
							
						
						
						

						<view v-if="contentInfo.contentType === 'video'" class="play fa fa-play-circle"></view>
						<view class="play-info" v-if="contentInfo.contentType === 'video'">
							{{contentInfo.videoInfo.playNumber}} 次播放 {{contentInfo.videoInfo.longTime}}
						</view>
						<view class="share m-f" v-if="contentInfo.contentType === 'share'">
							<image :src="contentInfo.shareInfo.shareImg"></image>
							<view class="share-title">
								{{contentInfo.shareInfo.shareTitle}}
							</view>
						</view>
					</view>
					<view class="common-list-right-row-5 m-f m-f-jcsb">
						<view class="address">
							{{contentInfo.contentCreateAddress}}
						</view>
						<view class="info m-f m-f-aic">
							<view> <i class="fa fa-share" aria-hidden="true"></i> {{contentInfo.sharesNumber}}</view>
							<view> <i class="fa fa-comment" aria-hidden="true"></i> {{contentInfo.commentsNumber}}</view>
							<view @tap='handleLike' :style="{'color':contentInfo.contentLikesInfo.type == 1 ?'#f40':'#000'}"> <i class="fa fa-thumbs-up" aria-hidden="true"></i>
								{{contentInfo.contentLikesInfo.likesNumber}}</view>
								
						</view>
					</view>
				</view>
			</view>
			<view class="comment-wrap">
				<view class="comment-title">
					最新评论 1
				</view>
				<view class="comment-content-wrap">
					<block v-for="(item,index) in commentShowList" :key="index">
						<commentlist :commentInfo="item" >
							<view class="comment-dateTime m-f m-f-aic m-f-jcsb">
								<view>{{item.commentCreatedShowTime}}</view> <text @tap="replyComment(index)">回复</text>
							</view>
							
						</commentlist>
						<template v-if="item.replyList.length>0">
							<view class="reply-comment">
								<block v-for="(item1,index1) in item.replyList" :key="index1">
								<commentlist :commentInfo="item1" >
									<view class="comment-dateTime m-f m-f-aic m-f-jcfe">
										<view>{{item.commentCreatedShowTime}}</view>
									</view>
								</commentlist>
								</block>
							</view>
						</template>
						
					</block>
					
				</view>
			</view>
		</scroll-view>

		<view class="publish-comment m-f m-f-aic">
			<input type="text" placeholder="文明发言" class="m-f-f1" ref='inputcommementtext' v-model.trim="inputCommentText"/>
			<view @tap="publishtComment">
				发送
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

				contentInfo: {},
				commentList:[],
				isReply:false,
				inputCommentText:'',
				commentIndex:null,
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
				this.contentInfo.isFollowed = !this.contentInfo.isFollowed
				// console.log(this.contentInfo.isFollowed)
			},

			handleLike() {
				// console.log(this.contentInfo.contentLikesInfo.type)
				if (this.contentInfo.contentLikesInfo.type === 0) {
					this.contentInfo.contentLikesInfo.type = 1
					this.contentInfo.contentLikesInfo.likesNumber++
					
				} else if(this.contentInfo.contentLikesInfo.type === 1){
					this.contentInfo.contentLikesInfo.type = 0
					this.contentInfo.contentLikesInfo.likesNumber--
					
				}else{
					this.contentInfo.contentLikesInfo.type = 1
					this.contentInfo.contentLikesInfo.likesNumber++
					this.contentInfo.contentLikesInfo.dislikesNumber--
				}
			},
			
			previwImg(index) {
				// let imgUrl=url+'.png'
				// console.log(this.contentInfo.contentImgs)
				let imgUrlArr=[]
				this.contentInfo.contentImgs.forEach(item=>{
					imgUrlArr.push(item.imgUrl)
				})
				uni.previewImage({
					current: index,
					urls: imgUrlArr
				})
				
			},
			replyComment(index){
				console.log(index)
				let inputDom=this.$refs.inputcommementtext.$el.childNodes[0].childNodes[1]
				this.isReply=true
				this.commentIndex=index
				inputDom.focus()
				
			},
			dealTimeStamps(times){
				// console.log(times)
				let date=new Date(Number(times)),
					year=date.getFullYear(),
					months=date.getMonth()+1,
					days=date.getDate(),
					hours=date.getHours(),
					minutes=date.getMinutes(),
					seconds=date.getSeconds();
					
					months=months>9?months+'':'0'+months;
					hours=hours>9?hours+'':'0'+hours;
					days=days>9?days+'':'0'+days;
					seconds=seconds>9?seconds+'':'0'+seconds;
					minutes=minutes>9?minutes+'':'0'+minutes;
					
				return `${year}-${months}-${days} ${hours}:${minutes}:${seconds}`
	
			},
			publishtComment(){
				if(this.inputCommentText.length ===0 ){
					uni.showToast({
						title:'请输入发表内容'
					})
					return
				}
				let obj={
					avatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3325689363,2984980239&fm=26&gp=0.jpg' ,
					commentText:this.inputCommentText,
					replyList:[],
					username:"milesmatheson",
					commentCreatedTime:new Date().getTime()+''
				}
				
				if(!this.isReply){
					this.commentList.unshift(obj)
				}else{
					this.commentList[this.commentIndex].replyList.unshift(obj)
				}
				
				
				this.inputCommentText=''
				this.isReply=false
				this.commentIndex=null
			}
		},
		components: {
			uniNavBar,
			commentlist
		},
		onLoad(options) {
			// console.log(options,'1')
			let info = JSON.parse(decodeURIComponent(options.list))					
			this.contentInfo = info
			this.commentList=info.commentList
			// console.log(info)
		},
		computed:{
			commentShowList(){
				let arr=  this.commentList
				
				
				arr.forEach(item=>{
					item.commentCreatedShowTime=item.commentCreatedTime
					item.replyList.forEach(value=>{
						value.commentCreatedShowTime=value.commentCreatedTime
					})
				})
				
				arr.sort((a,b)=>{
					let aTime=Number(a.commentCreatedShowTime),
					bTime=Number(b.commentCreatedShowTime);
					return bTime - aTime
				})
				arr.forEach(item=>{
					item.replyList.sort((a,b)=>{
						let aTime=Number(a.commentCreatedShowTime),
						bTime=Number(b.commentCreatedShowTime);
						return bTime - aTime
					})
				})
				
				
				arr.forEach(item=>{
					item.commentCreatedShowTime=this.dealTimeStamps(item.commentCreatedShowTime)
					item.replyList.forEach(value=>{
						value.commentCreatedShowTime=this.dealTimeStamps(value.commentCreatedShowTime)
					})
				})
				// console.log(arr)
				return arr
			}
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
		height: calc(100vh - 170rpx - 90rpx);
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
			.comment-dateTime{
				font-size: 25rpx;
				margin-top: 20rpx;
				text{
					color: $theme-color;
				}
			}
		}
	}
	.publish-comment{
		background-color: $theme-color;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 20rpx;
		input{
			background-color: #fff;
			font-size: 25rpx;
			padding: 10rpx 20rpx;
			border-radius: 10rpx;
		}
		view{
			background-color: #eee;
			color: #555;
			padding: 10rpx 20rpx;
			font-size: 25rpx;
			margin-left: 20rpx;
			border-radius: 10rpx;
		}
	}
</style>
