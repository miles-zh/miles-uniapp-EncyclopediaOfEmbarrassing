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
				<topics></topics>
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
	import topics from '@/components/topics.vue'
	export default {
		data() {
			return {
				titleTab:'topic',
				followedNewsList:[
					{
						userPic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						username:'昵称',
						// 0代表男性，1代表女性
						sex:0,
						age:25,
						isFollowed:false,
						title:'你哈，生活是如此多娇',
						titlePic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						type:'img',
						place:'深圳 龙岗',
						shareNumber:20,
						commentNumber:40,
						likesNumber:12,
						isFollowed:false
					},
					{
						userPic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						username:'昵称',
						// 0代表男性，1代表女性
						sex:0,
						age:25,
						isFollowed:false,
						title:'我是视频',
						titlePic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						type:'video',
						videoInfo:{
							playNumber:'20w',
							longTime:'20:09'
						},
						place:'深圳 龙岗',
						shareNumber:20,
						commentNumber:40,
						likesNumber:12,
						isFollowed:true
					},
					{
						userPic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						username:'昵称',
						// 0代表男性，1代表女性
						sex:1,
						age:32,
						isFollowed:false,
						title:'你哈,我是分享',
						
						type:'share',
						shareInfo:{
							shareImg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
							shareTitle:'你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题你好我是分享标题'
						},
						place:'深圳 龙岗',
						shareNumber:20,
						commentNumber:40,
						likesNumber:12,
						isFollowed:false
					}
				]
				,loadText:'上拉加载更多'
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
			},
			follow(index){
				// console.log(index)
				this.followedNewsList[index].isFollowed = !this.followedNewsList[index].isFollowed
			},
			loadMore(){
				// console.log(e)
				this.loadText='加载中...'
				switch(this.titleTab){
					case 'follow':
					
					
					setTimeout(()=>{
						let obj={
							userPic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
							username:'昵称',
							// 0代表男性，1代表女性
							sex:0,
							age:25,
							isFollowed:false,
							title:'你哈，生活是如此多娇',
							titlePic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
							type:'img',
							place:'深圳 龙岗',
							shareNumber:20,
							commentNumber:40,
							likesNumber:12,
							isFollowed:false
						};
						this.followedNewsList.push(obj)
						this.loadText='上拉加载更多'
					},2000)
					
					
				}
			}
		},
		components:{
			uniNavBar,
			commonlist,
			topics
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
	scroll-view{
		margin-top: 50rpx;
		height: calc(100vh - 100rpx - 88rpx - 80rpx) !important;
		width: 100%;
	}
	.load-more{
		color: #999;
		text-align: center;
		padding: 20rpx;
		font-size: 30rpx;
	}
</style>