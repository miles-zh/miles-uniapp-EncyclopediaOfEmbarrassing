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
		<!-- 列表 -->
		<scroll-view scroll-y="true" @scrolltolower="loadMore">

			<template v-if="titleTab === 'follow'">
				<block v-for="(item,index) in followedNewsList" :key='index'>
					<commonlist :list="item" @clickFollow='follow(index)'></commonlist>
				</block>
			</template>
			<template v-else>
				<view>
					<!-- 搜索框 -->
					<view class="search-wrap">
						<view class="search m-f m-f-aic">
							<text class="fa fa-search"></text>
							<input type="text" v-model="topicsSearchText" class="m-f-f1" placeholder="请输入搜索内容" placeholder-style="text-align:center" />
						</view>
					</view>
					<!-- 轮播图 -->
					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#fff">
						<block v-for="(item,index) in topicsSwiperList" :key="index">
							<swiper-item>
								<image :src="item.imgUrl"></image>
							</swiper-item>
						</block>

					</swiper>
					<!-- 热门分类 -->
					<view class="topics-nav">
						<view class="topics-nav-title m-f m-f-jcsb m-f-aic">
							<view>
								热门分类
							</view>
							<view class="" @tap="goTopicsClassify">
								更多 <i class="fa fa-angle-right" aria-hidden="true"></i>
							</view>
						</view>
						<view class="topics-nav-item m-f m-f-jcsa">
							<view>最新</view>
							<view>游戏</view>
							<view>打卡</view>
							<view>情感</view>
							<view>故事</view>
							<view>喜爱</view>
						</view>
					</view>
					<!-- 自动更新 -->
					<view class="topics-news">
						<view class="topics-news-title">
							最新更新
						</view>
						<block v-for="(item,index) in topicsList" :key='index'>
							<TopicsList :topic="item"></TopicsList>
						</block>
						
					</view>
				</view>

			</template>

			<view class="load-more">
				{{loadText}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import commonlist from '@/components/commonlist.vue'
	import TopicsList from '@/components/topicslist.vue'
	export default {
		data() {
			return {
				titleTab: 'follow',
				followedNewsList: [{
						userPic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						username: '昵称',
						// 0代表男性，1代表女性
						sex: 0,
						age: 25,
						isFollowed: false,
						title: '你哈，生活是如此多娇',
						titlePic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						type: 'img',
						place: '深圳 龙岗',
						shareNumber: 20,
						commentNumber: 40,
						likesNumber: 12,
						isFollowed: false
					},
					{
						userPic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						username: '昵称',
						// 0代表男性，1代表女性
						sex: 0,
						age: 25,
						isFollowed: false,
						title: '我是视频',
						titlePic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						type: 'video',
						videoInfo: {
							playNumber: '20w',
							longTime: '20:09'
						},
						place: '深圳 龙岗',
						shareNumber: 20,
						commentNumber: 40,
						likesNumber: 12,
						isFollowed: true
					},
					{
						userPic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						username: '昵称',
						// 0代表男性，1代表女性
						sex: 1,
						age: 32,
						isFollowed: false,
						title: '你哈,我是分享',

						type: 'share',
						shareInfo: {
							shareImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
							shareTitle: '你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题'
						},
						place: '深圳 龙岗',
						shareNumber: 20,
						commentNumber: 40,
						likesNumber: 12,
						isFollowed: false
					}
				],
				loadText: '上拉加载更多',
				topicsSearchText: '',
				topicsSwiperList: [{
						imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590890677528&di=8d5ccd4ee18e7856fc6bc60952ffef6d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201210%2F04%2F20121004225459_YQehP.thumb.224_0.jpeg'
					},
					{
						imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3823650407,1606007271&fm=26&gp=0.jpg'
					},
					{
						imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1897508438,807292774&fm=26&gp=0.jpg'
					},
				]
				,topicsList:[
					{
						img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
						topicsTitle:'我的话题',
						topicsContent:'我的话题dddd',
						topicsTotal:20,
						topicsNow:4
					},
					{
						img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
						topicsTitle:'我的话题',
						topicsContent:'我的话题dddd',
						topicsTotal:20,
						topicsNow:4
					},
					{
						img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
						topicsTitle:'我的话题',
						topicsContent:'我的话题dddd',
						topicsTotal:20,
						topicsNow:4
					}
				]
			}
		},
		methods: {
			changeTitleTab(tab) {
				this.titleTab = tab
			},

			goPublish() {
				uni.navigateTo({
					url: '/pages/publish/publish'
				})
			},
			follow(index) {
				// console.log(index)
				this.followedNewsList[index].isFollowed = !this.followedNewsList[index].isFollowed
			},
			goTopicsClassify(){
				uni.navigateTo({
					url:"/pages/topicsClassify/topicsClassify"
				})
			},
			loadMore() {
				// console.log(e)
				this.loadText = '加载中...'
				switch (this.titleTab) {
					case 'follow':
						setTimeout(() => {
							let obj = {
								userPic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
								username: '昵称',
								// 0代表男性，1代表女性
								sex: 0,
								age: 25,
								isFollowed: false,
								title: '你哈，生活是如此多娇',
								titlePic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
								type: 'img',
								place: '深圳 龙岗',
								shareNumber: 20,
								commentNumber: 40,
								likesNumber: 12,
								isFollowed: false
							};
							this.followedNewsList.push(obj)
							this.loadText = '上拉加载更多'
						}, 2000)
					break;
					case 'topic':
					setTimeout(() => {
						let obj = {
							img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
							topicsTitle:'我的话题',
							topicsContent:'我的话题dddd',
							topicsTotal:30,
							topicsNow:4
						};
						this.topicsList.push(obj)
						this.loadText = '上拉加载更多'
					}, 2000)
					break;

				}
			}
		},
		components: {
			uniNavBar,
			commonlist,
			TopicsList
		}
	}
</script>

<style scoped lang="scss">
	.top-tab {

		.fa-certificate,
		.fa-pencil {
			color: #fff;
		}

		.top-tab-title {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 100%;
			color: #555;

			// height: 30rpx;
			.title {
				// padding: 10rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				height: 30rpx !important;
				position: relative;

				.line {
					height: 5rpx;

					width: 70rpx;
					position: absolute;
					bottom: -10rpx;
				}
			}

			.title-active {

				color: #fff;

				.line {
					background-color: #fff;
				}
			}
		}
	}

	scroll-view {
		margin-top: 50rpx;
		height: calc(100vh - 100rpx - 88rpx + 30rpx) !important;
		width: 100%;
		position: relative;
	}

	.search-wrap{
		background-color: #fff;
		width: 100%;
		position: fixed;
		top: 150rpx;
		z-index: 10;
	}
	.search {

		background-color: #eee;
		padding: 10rpx 20rpx;
		color: #999;
		width: 90%;
		margin: 20rpx auto;
		font-size: 25rpx;
		border-radius: 20rpx;
		z-index: 20;
		
		text {
			margin-right: 20rpx;
		}

		input {
			font-size: 28rpx;
		}
	}

	swiper {
		
		height: 300rpx;
		width: 95%;
		border: 1px solid #ddd;
		border-radius: 20rpx;
		overflow: hidden;
		margin: 100rpx auto 0rpx;

		image {
			height: 100%;
			width: 100%;

		}
	}

	.topics-nav {
		margin-top: 20rpx;
		padding: 20rpx;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;

		.topics-nav-title {
			font: 30rpx;

			view:nth-of-type(2) {
				color: #999;
				font-size: 30rpx;

				i {
					margin-left: 20rpx;
					font-size: 40rpx;
				}
			}
		}

		.topics-nav-item {
			padding: 20rpx 0;
			font-size: 25rpx;

			view {
				background-color: #eee;
				margin-right: 20rpx;
				padding: 10rpx 20rpx;
				margin-top: 20rpx;
				color: #777;
				border-radius: 10rpx;
			}
		}
	}

	.topics-news {
		padding: 20rpx;

		.topics-news-title {
			padding-bottom: 20rpx;
			color: #555;
		}

	}

	.load-more {
		color: #999;
		text-align: center;
		padding: 20rpx;
		font-size: 30rpx;
	}
</style>
