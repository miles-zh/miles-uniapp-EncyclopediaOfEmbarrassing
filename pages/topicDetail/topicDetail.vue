<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic-bg">
			<image :src="topicInfo.img" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="topic-info-top m-f m-f-aic">
				<image :src="topicInfo.img" lazy-load></image>
				<view>
					#{{topicInfo.topicsTitle}}#
				</view>
			</view>
			<view class="topic-info-middle m-f">
				<view>动态 {{topicInfo.topicsTotal}}</view>
				<view>今日 {{topicInfo.topicsNow}}</view>
			</view>
			<view  class="topic-info-bottom">
				{{topicInfo.topicsContent}}
			</view>
		</view>
		<!-- tab切换 -->
		<topTab :tabList='tabBars' :tabIndex='tabIndex' scrollInto='' @changeTab='changeTab' class="top-tab" itemWidth='50%'></topTab>
		<!-- 内容 -->
		<view class="topic-detail-list">
			
				<block v-for='(item,index) in tabShowList' :key="index">
					<commonlist  :list='item' @clickFollow="follow(index)"></commonlist>
				</block>
			
			
			<!-- 加载更多 -->
			<view class="load-more">
				{{loadText}}
			</view>
		</view>
	</view>
</template>

<script>
	import topTab from '@/components/topTab.vue'
	import commonlist from '@/components/commonlist.vue'
	export default {
		data() {
			return {
				topicInfo:{},
				tabBars:[
					{
						id:'0',
						name:'默认'
					},
					{
						id:'1',
						name:'最新'
					}
					
				],
				tabIndex:0,
				tabShowList:[],
				tabNewList:[],
				tabDefaultList:[],
				loadText:'上拉加载更多'
			}
		},
		methods: {
			changeTab(index){
				this.tabIndex=index
				if(this.tabIndex === 0){
					this.tabShowList=this.tabDefaultList
				}else{
					this.tabShowList=this.tabNewList
				}
			},
			follow(index){
				// console.log(index,this.tabIndex)
				if(this.tabIndex === 0){
					this.tabDefaultList[index].isFollowed = !this.tabDefaultList[index].isFollowed
					this.tabShowList=this.tabDefaultList
				}else{
					this.tabNewList[index].isFollowed = !this.tabNewList[index].isFollowed
					this.tabShowList=this.tabNewList
				}
			},
			getTabDefaultList(){
				let obj={
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
				}
				this.tabDefaultList.push(obj)
				this.tabShowList=this.tabDefaultList
			},
			getTabNewList(){
				let obj={
						userPic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3441232288,3930001172&fm=26&gp=0.jpg',
						username: '昵称',
						// 0代表男性，1代表女性
						sex: 1,
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
				}
				this.tabNewList.push(obj)
				this.tabShowList=this.tabNewList
			}
		},
		onLoad(option) {
			// console.log(option)
			this.topicInfo=JSON.parse(decodeURIComponent(option.topicInfo))
			// console.log(this.topicInfo)
			this.getTabDefaultList()
			this.getTabNewList()
			this.tabShowList=this.tabDefaultList
		},
		components:{
			topTab,
			commonlist
		},
		// 上拉触底事件
		onReachBottom(e){
			this.loadText='加载中...',
			setTimeout(()=>{
				let obj={
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
				}
				
				if(this.tabIndex ===0){
					this.tabDefaultList.push(obj)
					this.tabShowList=this.tabDefaultList
				}else{
					this.tabNewList.push(obj)
					this.tabShowList=this.tabNewList
				}
				
				
			},2000)
		},
		// 下拉事件
		onPullDownRefresh() {
			
			setTimeout(()=>{
				if(this.tabIndex === 0){
					// this.tabDefaultList=[]
					this.getTabDefaultList()
				}else{
					// this.tabNewList=[]
					this.getTabNewList()
				}
				uni.stopPullDownRefresh()
			},2000)
		}
	}
</script>

<style lang="scss" scoped>
	.topic-bg{
		width: 100%;
		height: 300rpx;
		position: relative;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
			position: absolute;
			filter: blur(20rpx);
		}
	}
	.topic-info{
		padding: 0 20rpx;
		.topic-info-top{
			position: relative;
			image{
				width: 150rpx;
				height: 150rpx;
				border-radius: 20rpx;
				position: absolute;
				top: -75rpx;
			}
			view{
				font-size: 35rpx;
				margin-left: 170rpx;
				padding-top: 20rpx;
			}
		}
		.topic-info-middle{
			margin-top: 30rpx;
			color: #999;
			font-size: 28rpx;
			view{
				margin-right: 20rpx;
			}
		}
		.topic-info-bottom{
			margin-top: 20rpx;
			color: #555;
			font-size: 30rpx;
			text-indent: 50rpx;
		}
	}
	.top-tab{
		margin-top: 20rpx;
	}
	.load-more{
		font-size: 30rpx;
		text-align: center;
		padding: 20rpx;
		color: #999;
	}
</style>
