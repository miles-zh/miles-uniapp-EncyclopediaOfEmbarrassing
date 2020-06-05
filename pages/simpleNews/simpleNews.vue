<template>
	<view class="animate__animated animate__fadeInLeft">
		
		<uni-nav-bar fixed backgroundColor="#2196f3" class="top-nav-bar">
			<view class="fa fa-address-card-o" slot='left' @tap='goUserList'></view>
			<view class="nav-bar-title">
				短消息
			</view>
			<view class="fa fa-plus" slot='right' @tap='openOperateMenu'></view>
		</uni-nav-bar>
		<view class="operate-menu" v-show="isShowOperateMenu">
			<view hover-class="operate-menu-item-active" @tap='addFriend'>
				<text class="fa fa-search"></text><text>加糗友</text>
			</view>
			<view hover-class="operate-menu-item-active" @tap='clearUnRead'>
				<text class="fa fa-trash"></text> <text>清除未读</text>
			</view>
		</view>
		<scroll-view scroll-y="true" @scrolltolower='loadMore'>
			<block v-for="(item,index) in newsList" :key='index'>
				<view class="simpleNews-list m-f m-f-aic" @tap='goChat(item.username,index)'>
					<image :src="item.userimg" mode=""></image>
					<view class="news-info m-f m-f-fdc m-f-jcsa">
						<view class="m-f m-f-aic"><text class="username m-f-f1">
							{{item.username}}
						</text> <text class="publish-time">{{item.createdTime}}</text></view>
						<view class="m-f m-f-aic news-content">
							<view class="m-f-f1">
								{{item.content}}
							</view>
							<template v-if="item.unReadNumber > 0">
								<uni-badge :text="item.unReadNumber" type="error"></uni-badge>
							</template>
							
						</view>
					</view>
					
				</view>
			</block>
			<view class="load-more">
				{{loadText}}
			</view>
			
		</scroll-view>
			
			<!-- <uni-badge text="1" class="badge"></uni-badge> -->
		
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		data() {
			return {
				newsList:[],
				loadText:'上拉加载更多',
				isShowOperateMenu:false	
			}
		},
		methods: {
			getNewsList(){
				let list=[
					{
						userimg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853669995,4061774311&fm=26&gp=0.jpg',
						username:'你好',
						createdTime:'12:30',
						unReadNumber:1,
						content:'你好，生活如此多娇，引无数英雄尽折腰'
					},
					{
						userimg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853669995,4061774311&fm=26&gp=0.jpg',
						username:'aaa123',
						createdTime:'12:30',
						unReadNumber:0,
						content:'你好，生活如此多娇，引无数英雄尽折腰'
					}]
					
			
				setTimeout(()=>{
					this.newsList=list
					uni.stopPullDownRefresh()
				},2000)
				
			},
			loadMore(){
				this.loadText='加载中...'
				let obj={
					userimg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853669995,4061774311&fm=26&gp=0.jpg',
					username:'aa123aa',
					createdTime:'12:30',
					unReadNumber: Math.floor(Math.random()*100) ,
					content:'你好，生活如此多娇，引无数英雄尽折腰'
				}
				setTimeout(()=>{
					this.newsList.push(obj)
					this.loadText='上拉加载更多'
				},2000)
			},
			openOperateMenu(){
				this.isShowOperateMenu=!this.isShowOperateMenu;
			},
			clearUnRead(){
				this.newsList.forEach(item=>{
					item.unReadNumber=0
				})
				this.isShowOperateMenu=false
			},
			addFriend(){
				this.isShowOperateMenu=false
			},
			hideOperateMenu(){
				this.isShowOperateMenu=false
			},
			
			goUserList(){
				uni.navigateTo({
					url:'/pages/userList/userList'
				})
			},
			goChat(name,index){
				let url='/pages/userchat/userchat?username='+JSON.stringify(name)
				this.newsList[index].unReadNumber =0
				uni.navigateTo({
					url
				})
			}
		},
		components:{
			uniNavBar,
			uniBadge
		},
		onPullDownRefresh() {
			this.getNewsList()
		},
		onLoad() {
			this.getNewsList()
		}
		
	}
</script>

<style scoped lang="scss">
.top-nav-bar{
	.fa-address-card-o,.fa-plus,.nav-bar-title{
		color: #fff;
	}
	.nav-bar-title{
		width: 100%;
		text-align: center;
	}
}
.operate-menu{
	position: absolute;
	z-index: 999;
	background-color: #fff;
	right: 0rpx;
	top:140rpx;
	font-size: 30rpx;
	padding: 20rpx;
	border:1px solid #eee;
	width: 40%;
	color: #555;
	box-shadow: 1px 1px 5px #eee;
	view{
		padding: 10rpx;
		text:nth-child(1){
			margin-right: 10rpx;
		}
	}
	.operate-menu-item-active{
		background-color: #eee;
	}
}
scroll-view{
	margin-top:50rpx;
	border:1px solid #000;
	height: calc(100vh - 100rpx - 88rpx + 30rpx) !important;
}
.load-more{
	font-size: 30rpx;
	color: #999;
	text-align: center;
	padding: 20rpx;
}
.simpleNews-list{
	margin: 20rpx;
	padding-bottom:20rpx ;
	border-bottom:1px solid #eee;
	image{
		height: 150rpx;
		width: 150rpx;
		border-radius: 10rpx;
		margin-right: 20rpx;
		border:1rpx solid #EEEEEE;
		flex-shrink: 0;
	}
	.news-info{
		height: 150rpx;
		font-size: 30rpx;
		
		color: #555;
		.publish-time{
			color: #999;
		}
		.news-content{
			font-size: 32rpx;
			
			view{
				line-height: 40rpx;
				display: -webkit-box;
				-webkit-line-clamp:1;
				-webkit-box-orient:vertical;
				overflow: hidden;
				margin-right: 20rpx;
			}
			
		}
	}
}
</style>

