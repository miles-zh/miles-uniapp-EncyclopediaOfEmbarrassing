<template>
	<view>
		<!-- 顶部导航 -->
		<view class="top-tab">
			<view class="search">
				<text class="fa fa-search"></text>
				<input type="text" value="" class="search-text" placeholder="请输入搜索内容" @input="getSearchResult"/>
			</view>
			<view class="cancel-button"   @tap="goBack">取消</view>
		</view>
		<scroll-view scroll-y="true" >
			<block v-for="(item,index) in list" :key='index'>
			<mylist :list="item.listContent" @handleLike="handleLike(index)" @handleDislike='handDislike(index)'  @follow='follow(index)'></mylist>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import mylist from '@/components/mylist.vue'
	export default {
		data() {
			return {
				list:[
					
				],
				timer:null,
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			getSearchResult(e){
				// console.log(e)
				let value=e.detail.value.trim()
				if(!value)return;
				// console.log(value)
				clearInterval(this.timer)
				uni.showLoading({
					title: '加载中...',
					
				});
				this.timer=setTimeout(()=>{
					let arr=[
						{
							
							listContent:{
								avatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg',
								nickName:'hello',
								isFollowed:false,
								title:'新生活开始了',
								image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg",
								type:"img", // img图文 video视频
								info:{
									type:0, // 0未操作，1喜欢，2不喜欢
									likeNumber:22,
									dislikeNumber:1
								},
								commentNumber:12,
								shareNumber:23,
								playNumber:'20w',
								longTime:'10:23'
							}
						},
						{
							
							listContent:{
								avatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg',
								nickName:'hello',
								isFollowed:false,
								title:'新生活开始了',
								image:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1888126095,2183675189&fm=11&gp=0.jpg",
								type:"img", // img图文 video视频
								info:{
									type:0, // 0未操作，1喜欢，2不喜欢
									likeNumber:22,
									dislikeNumber:1
								},
								commentNumber:12,
								shareNumber:23,
								playNumber:'20w',
								longTime:'10:23'
							}
						}
					]
					this.list=arr
					uni.hideLoading()
				},2000)
				
			}
		},
		components:{
			uniNavBar,
			mylist
		}
	}
</script>

<style lang="scss" scoped>
		
	.top-tab{
		display: flex;
		background-color: #2196F3;
		// height: 100rpx;
		align-items: center;
		padding: 80rpx 20rpx 20rpx 20rpx;
		position: fixed;
		width: 100%;
		.search{
			background-color: #fff;
			flex: 1;
			padding: 5rpx 10rpx;
			border-radius: 10rpx;
			font-size: 18rpx;
			height: 60rpx !important;
			color: #999;
			display: flex;
			align-items: center;
			text{
				padding: 0 20rpx;
			}
			input{
				flex: 1;
				font-size: 20rpx;
			}
		}
		view{
			color: #fff;
			margin-left: 10rpx;
			font-size: 25rpx;
		}
	}
	scroll-view{
		height: 100vh;
		padding: 170rpx 20rpx 20rpx 20rpx;
	}
	
</style>
