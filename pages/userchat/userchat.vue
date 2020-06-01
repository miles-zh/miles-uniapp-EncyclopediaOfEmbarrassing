<template>
	<view class="chat-wrap">
		<!-- 顶部导航 -->
		<uni-nav-bar  backgroundColor="#2196f3" class="top-nav-bar" @clickLeft='goBack'>
			<i class="fa fa-chevron-left" aria-hidden="true" slot='left' ></i>
			<view class="chat-title">
				{{chatUsername}}
			</view>
			<i class="fa fa-user" aria-hidden="true" slot='right'></i>
		</uni-nav-bar>
		<!-- 聊天内容 -->
		<scroll-view scroll-y="true" :scroll-top="scrollTop" id='chat-content' :scroll-with-animation='true'>
			<block v-for="(item,index) in chatList" :key="index" class="chat-item">
				<view :class="['created-time',!item.isFriend?'created-time-me':'']">{{item.createdTime | dealChatTime}}</view>
				<view :class="['chat-list', 'm-f',!item.isFriend?'chat-me':'','m-f-aifs']">
					<image :src="item.userimg" lazy-load class="avatar"></image>
					<view class="chat-list-body">
						<template v-if="item.type === 'text'">
							<text>{{item.textContent}}</text>
						</template>
						
						<template v-if="item.type === 'img'">
							<image :src="item.imgUrl" lazy-load></image>
						</template>
						
					</view>
				</view>
			</block>
			
			
		</scroll-view>
		<view class="chat-bottom m-f m-f-aic">
			<input type="text" placeholder="请输入内容" class="m-f-f1" v-model.trim="sendText"> 
			<view class="send-button" @tap='sendMessage'><i class="fa fa-paper-plane" aria-hidden="true"></i></view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	function addZero(v){
		if(v<10){
			return '0'+v
		}else{
			return v
		}
	}
	export default {
		data() {
			return {
				chatUsername:"",
				sendText:'',
				chatList:[],
				scrollTop:0,
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			sendMessage(){
				// console.log(this.sendText)
				let obj={
					isFriend:false,
					userimg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590980610189&di=359d2be9015d52cb052c727f5d45dd1d&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2F7a0d2015e88c63ea9c57f8d2bb430ff2dcbbab50.jpg",
					type:'text',
					textContent:this.sendText,
					createdTime:new Date().getTime()
				}
				this.chatList.push(obj)
				let q=uni.createSelectorQuery().in(this)
				
				this.$nextTick(()=>{
					q.selectAll('.created-time').boundingClientRect()
					q.selectAll('.chat-list').boundingClientRect()
					q.exec(res=>{
						res.forEach(item=>{
							item.forEach(item1=>{
								this.scrollTop += item1.height
							})
						})
					})
				})
				this.sendText=''
			},
			getChatList(){
				let arr=[
					{
						userimg:'http://img0.imgtn.bdimg.com/it/u=473578732,643667108&fm=26&gp=0.jpg',
						isFriend:true,
						type:'text',
						textContent:'生活如此美好',
						createdTime:1585162732
					},
					{
						userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590980610189&di=359d2be9015d52cb052c727f5d45dd1d&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2F7a0d2015e88c63ea9c57f8d2bb430ff2dcbbab50.jpg',
						isFriend:false,
						type:'img',
						imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590980610189&di=359d2be9015d52cb052c727f5d45dd1d&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2F7a0d2015e88c63ea9c57f8d2bb430ff2dcbbab50.jpg',
						createdTime:1591012111
					}
				]
				this.chatList=arr
			}
			
		},
		components:{
			uniNavBar
		},
		onLoad(option) {
			this.chatUsername= JSON.parse(option.username)
			this.getChatList()
		},
		filters:{
			dealChatTime(v){
				// v=v.trim();
				let time=v.toString().length < 13?v*1000:v;
				
				let dateYear=new Date(time).getFullYear(),
					dateMonth=new Date(time).getMonth()+1,
					dateDay=new Date(time).getDate(),
					dateHours=new Date(time).getHours(),
					dateMinutes=new Date(time).getMinutes(),
					dateSeconds=new Date(time).getSeconds();
				dateMonth=addZero(dateMonth)
				dateDay=addZero(dateDay)
				dateHours=addZero(dateHours)
				dateMinutes=addZero(dateMinutes)
				dateSeconds=addZero(dateSeconds)
				let nowYear=new Date().getFullYear(),
					nowMonth=new Date().getMonth()+1,
					nowDay=new Date().getDate(),
					nowHours=new Date().getHours(),
					nowMinutes=new Date().getMinutes(),
					nowSeconds=new Date().getSeconds();
				nowMonth=addZero(nowMonth)
				nowDay=addZero(nowDay)
				nowHours=addZero(nowHours)
				nowMinutes=addZero(nowMinutes)
				nowSeconds=addZero(nowSeconds)
				
				if(dateYear === nowYear && dateMonth === nowMonth && dateDay=== nowDay){
					return dateHours+':'+dateMinutes+':'+dateSeconds
				}else if(dateYear === nowYear){
					return `${dateMonth}月${dateDay}日 ${dateHours}:${dateMinutes}:${dateSeconds}`
				}else{
					return `${dateYear}年${dateMonth}月${dateDay}日 ${dateHours}:${dateMinutes}:${dateSeconds}`
				}			
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat-wrap{
		position: relative;
		height: 100vh;
	}
.top-nav-bar{
	align-items: center;
	.fa-chevron-left,.fa-user{
		color: #fff;
		font-size: 35rpx;
	}
	.chat-title{
		color: #fff ;
		width: 100%;
		text-align: center;
		font-size: 35rpx;
	}
}
scroll-view{
	height: calc(100vh - 170rpx - 90rpx);
	border:1px solid #000;
	padding: 20rpx;
	.created-time{
		margin: 60rpx 0 10rpx;
		color: #999;
		font-size: 25rpx;
		margin-left: 20rpx;
	}
	.created-time-me{
		text-align: right;
		margin-right: 20rpx;
	}
	.chat-list{
		
		.avatar{
			height: 100rpx;
			width: 100rpx;
			border-radius: 50%;
			// flex-shrink: 0;
			z-index: 10;
		}
		.chat-list-body{
			
			background-color: #eee;
			padding: 10rpx;
			font-size: 25rpx;
			margin-left: 40rpx;
			border-radius: 10rpx;
			margin-right: 150rpx;
			position: relative;
			
			image{
				max-width: 300rpx;
				max-height: 300rpx;
			}
		}
		.chat-list-body::before{
			position: absolute;
			left: -32rpx;
			background-color: #eee;
			content: "";
			width: 0;
			height: 0;
			top: 10rpx;
			border:16rpx solid #EEEEEE;
			border-color: #fff #eee #fff #fff;
		}
	}
	.chat-me{
		flex-direction: row-reverse;
		.chat-list-body{
			margin-right: 40rpx;
			margin-left: 150rpx;
		}
		.chat-list-body::before{
			right: -32rpx;
			left: auto;
			border-color: #fff #fff #fff #eee;
		}
	}
}
.chat-bottom{
	height: 100rpx;
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: $theme-color;
	padding: 20rpx;
	input{
		background-color: #fff;
		padding: 10rpx;
		font-size: 30rpx;
		border-radius: 10rpx;
		border:1px solid #eee;
	}
	view{
		padding: 10rpx 30rpx;
		background-color: #fff;
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #555;
		border-radius: 10rpx;
	}
}
</style>
