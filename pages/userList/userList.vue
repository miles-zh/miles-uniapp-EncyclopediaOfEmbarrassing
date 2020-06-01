<template>
	<view class="userlist-wrap animate__animated animate__fadeInLeft">
		<!-- 顶部导航 -->
		<view class="top-nav">
			<view class="search">
				<text class="fa fa-search"></text>
				<input type="text" value="" class="search-text" placeholder="请输入搜索内容" @input="getSearchResult" />
			</view>
			<view class="cancel-button" @tap="cancelSearch">取消</view>
		</view>
		<topTab :tabList='tabBars' :tabIndex='tabIndex' scrollInto='' @changeTab='changeTab' class="top-tab" itemWidth='33%'></topTab>
		<scroll-view scroll-y="true" @scrolltolower='loadMore'>
			<block v-for="(item,index) in userShowList" :key='index'>
				<view class="user-list m-f m-f-aic">
					<image :src="item.userimg" lazy-load></image>
					<view class="user-info m-f-f1 m-f m-f-fdc m-f-jcsa">
						<view>
							{{item.username}}
						</view>
						<view class="sex-age" :style="{'background-color':item.sex ===0 ?'#2196f3':'#f40'}">
							<text :class="['fa',item.sex ===0 ?'fa-mars':'fa-venus']"></text> {{item.age}}
						</view>
					</view>
					<view class="select-icon">
						<template v-if='item.isFollowed'>
							<i class="fa fa-check-circle" aria-hidden="true" @tap='cancelFollow(item.userid)'></i>
						</template>
						<template v-else>
							<i class="fa fa-plus-circle" aria-hidden="true" @tap='follow(item.userid)'></i>
						</template>

					</view>
				</view>
			</block>
			<view class="load-more">
				{{loadText}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import topTab from '@/components/topTab.vue'
	export default {
		data() {
			return {
				tabBars: [{
						id: '0',
						name: '互关',
						number: 0
					},
					{
						id: '1',
						name: '关注',
						number: 0

					},
					{
						id: '2',
						name: '粉丝',
						number: 0
					}

				],
				tabIndex: 0,
				userShowList: [],
				userFollowedEachotherList: [],
				userFollowedList: [],
				userFans: [],
				loadText:'上拉加载更多'
			}
		},
		methods: {
			cancelSearch() {
				uni.navigateBack({
					delta: 1
				})
			},
			changeTab(index) {
				this.tabIndex = index
				switch (this.tabIndex) {
					case 0:
						this.userShowList = this.userFollowedEachotherList
						break;
					case 1:
						this.userShowList = this.userFollowedList
						break;
					default:
						this.userShowList = this.userFansList
				}
			},
			getUserFollowedEachotherList() {
				let arr = [{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好',
						// 0代表男性，1代表女性
						sex: 0,
						age: 35,
						isFollowed: true,
						userid: 1
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 2
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 0,
						age: 25,
						isFollowed: true,
						userid: 3
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 4
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 5
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 6
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 7
					}
				]
				
				this.userFollowedEachotherList = arr
			},
			getUserFollowedList() {
				let arr = [{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好',
						// 0代表男性，1代表女性
						sex: 0,
						age: 35,
						isFollowed: true,
						userid: 1
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 2
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 0,
						age: 25,
						isFollowed: true,
						userid: 3
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 4
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 5
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 6
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 25,
						isFollowed: true,
						userid: 7
					}
				]
				this.userFollowedList = arr
			},
			getUserFansList() {
				let arr = [{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好',
						// 0代表男性，1代表女性
						sex: 0,
						age: 30,
						isFollowed: false,
						userid: 20
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 23,
						isFollowed: false,
						userid: 21
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 23,
						isFollowed: false,
						userid:22
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 23,
						isFollowed: false,
						userid: 23
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 23,
						isFollowed: false,
						userid: 24
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 23,
						isFollowed: false,
						userid: 25
					},
					{
						userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
						username: '你好a',
						// 0代表男性，1代表女性
						sex: 1,
						age: 23,
						isFollowed: false,
						userid: 26
					}
				]
				this.userFansList = arr
			},
			follow(id) {
				let index=this.userFansList.findIndex(item=>{
					return item.userid===id
				})
				this.userFansList[index].isFollowed = true
				let obj=this.userFansList[index]
				console.log(obj)
				this.userFollowedEachotherList.push(obj)

				this.userFollowedList.push(obj)
				this.calculateTabNumber()
				// console.log(this.userFansList,this.userFollowedEachotherList,this.userFollowedList)
			},
			cancelFollow(id) {
				switch (this.tabIndex) {
					case 0:
						let index= this.userFollowedEachotherList.findIndex(item=>item.userid === id)
						this.userFollowedEachotherList.splice(index, 1);
						let index1 = this.userFollowedList.findIndex(item => item.userid === id)
						if (index1 !== -1) {
							this.userFollowedList.splice(index1, 1)
						}
						this.userFansList.forEach(item => {
							if (item.userid === id) {
								item.isFollowed = false
							}
						})
						this.userShowList = this.userFollowedEachotherList
						break;
					case 1:
						let index2 = this.userFollowedList.findIndex(item=>item.userid === id)
						this.userFollowedList.splice(index2, 1);
						let index3 = this.userFollowedEachotherList.findIndex(item => item.userid === id)
						if (index3 !== -1) {
							this.userFollowedEachotherList.splice(index3, 1)
						}
						this.userFansList.forEach(item => {
							if (item.userid === id) {
								item.isFollowed = false
							}
						})
						this.userShowList = this.userFollowedList
						break;
					case 2:
						this.userFansList.forEach(item=>{
							if(item.userid === id){
								item.isFollowed = false
							}
						})
						
						let index4 = this.userFollowedEachotherList.findIndex(item => item.userid === id)
						if (index4 !== -1) {
							// console.log(this.userFollowedEachotherList.splice(index, 1))
							this.userFollowedEachotherList.splice(index4, 1)
						}
						let index5 = this.userFollowedList.findIndex(item => item.userid === id)
						if (index5 !== -1) {
							this.userFollowedList.splice(index5, 1)
						}
						this.userShowList = this.userFansList
						// console.log(index4,index5,this.userFollowedEachotherList)
				}
				this.calculateTabNumber()
			},
			calculateTabNumber() {
				this.tabBars[0].number = this.userFollowedEachotherList.length
				this.tabBars[1].number = this.userFollowedList.length
				this.tabBars[2].number = this.userFansList.length
			},
			loadMore(){
				this.loadText='加载中...'
				switch(this.tabIndex){
					case 0:
						let obj1={
							userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
							username: '你好',
							// 0代表男性，1代表女性
							sex: Math.round(Math.random()),
							age: 18 + Math.floor(Math.random()*50),
							isFollowed: true,
							userid: 1+Math.floor(Math.random()*9998)
						}
						setTimeout(()=>{
							this.userFollowedEachotherList.push(obj1)
							this.loadText='上拉加载更多'
							this.userShowList=this.userFollowedEachotherList
						},2000)
						break;
					case 1:
						let obj2={
							userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
							username: '你好',
							// 0代表男性，1代表女性
							sex: Math.round(Math.random()),
							age: 18 + Math.floor(Math.random()*50),
							isFollowed: true,
							userid: 1+Math.floor(Math.random()*9998)
						}
						setTimeout(()=>{
							this.userFollowedList.push(obj2)
							this.loadText='上拉加载更多'
							this.userShowList=this.userFollowedList
						},2000)
						break;
					default:
						let obj3={
							userimg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=572352412,65998790&fm=11&gp=0.jpg',
							username: '你好',
							// 0代表男性，1代表女性
							sex: Math.round(Math.random()),
							age: 18 + Math.floor(Math.random()*50),
							isFollowed: false,
							userid: 1+Math.floor(Math.random()*9998)
						}
						setTimeout(()=>{
							this.userFansList.push(obj3)
							this.loadText='上拉加载更多'
							this.userShowList=this.userFansList
						},2000)
				}
			}
		},
		onLoad() {
			this.getUserFollowedEachotherList()

			this.getUserFansList()
			this.getUserFollowedList()

			this.userShowList = this.userFollowedEachotherList
			this.calculateTabNumber()
		},
		components: {
			topTab
		}
	}
</script>

<style scoped lang="scss">
	.userlist-wrap {
		position: relative;
		width: 100%;
	}

	.top-nav {
		display: flex;
		background-color: #2196F3;
		// height: 100rpx;
		align-items: center;
		padding: 80rpx 20rpx 20rpx 20rpx;
		position: relative;
		width: 100%;

		.search {
			background-color: #fff;
			flex: 1;
			padding: 5rpx 10rpx;
			border-radius: 10rpx;
			font-size: 18rpx;
			height: 60rpx !important;
			color: #999;
			display: flex;
			align-items: center;

			text {
				padding: 0 20rpx;
			}

			input {
				flex: 1;
				font-size: 20rpx;
			}
		}

		view {
			color: #fff;
			margin-left: 10rpx;
			font-size: 25rpx;
		}
	}

	.top-tab {
		margin-top: 20rpx;
	}

	scroll-view {
		width: 100%;
		height: calc(100vh - 170rpx - 90rpx);
		// border:1px solid #000;
		padding: 20rpx;

		// box-sizing: border-box;
		.user-list {
			border-bottom: 1px solid #eee;
			padding: 20rpx 0;

			image {
				height: 100rpx;
				width: 100rpx;
				margin-right: 20rpx;
			}

			.user-info {
				font-size: 28rpx;
				height: 100rpx;
				color: #555;

				.sex-age {

					background-color: #2196F3;
					width: 80rpx;
					height: 40rpx;
					font-size: 20rpx;
					text-align: center;
					line-height: 40rpx;
					color: #fff;
					letter-spacing: 2rpx;
					border-radius: 20rpx;
				}
			}

			.select-icon {
				color: #999;
			}
		}
		.load-more{
			text-align: center;
			padding: 20rpx;
			font-size: 30rpx;
			color: #999;
		}
	}
</style>
