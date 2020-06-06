<template>
	<view class="recommend-content ">

	<template v-if="newsList.length !== 0">
	<!-- 推荐列表页面 -->
	
	
	<scroll-view :scroll-y="true" @scrolltolower="loadMore">
		<block v-for='(item,index) in newsList' :key='index'>
		<mylist :list="item" @handleLike="handleLike(index)" @handleDislike='handDislike(index)'  @follow='follow(index)'></mylist>
		</block>
		<!-- 上拉加载更多 -->
		<view class="load-more">
			{{loadText}}
		</view>
		
	</scroll-view>	
	
	</template>
	<template v-else>
		<errPage></errPage>
	</template>
	</view>
</template>

<script>
	
	import mylist from "./mylist.vue"
	import errPage from './errPage.vue'
	export default {
		data() {
			return {
				loadText:"上拉加载更多",
				newsList:[]
				
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			// 顶
			handleLike(index){
				// console.log(index)
				let item =this.newsList[index]
				if(item.contentLikesInfo.type === 0){
					item.contentLikesInfo.type=1
					item.contentLikesInfo.likesNumber +=1
				}
				if(item.contentLikesInfo.type === 2){
					item.contentLikesInfo.type=1
					item.contentLikesInfo.likesNumber +=1
					item.contentLikesInfo.dislikesNumber -=1
				}
				this.newsList[index]=item
			},
			// 踩
			handDislike(index){
				// console.log(index,this.newsList[index])
				
				let item =this.newsList[index]
				if(item.contentLikesInfo.type === 0){
					item.contentLikesInfo.type=2
					item.contentLikesInfo.dislikesNumber +=1
				}
				if(item.contentLikesInfo.type === 1){
					item.contentLikesInfo.type=2
					item.contentLikesInfo.likesNumber -=1
					item.contentLikesInfo.dislikesNumber +=1
				}
				this.newsList[index]=item
			},
			// 关注
			follow(index){
				this.newsList[index].isFollowed = !this.newsList[index].isFollowed;
				if(this.newsList[index].isFollowed){
					uni.showToast({
						title:'关注成功!'
					})
				}else{
					uni.showToast({
						title:'取消关注!'
					})
				}	
			},
			async loadMore(e){
					// console.log(e)
				if(this.loadText !== '上拉加载更多'){
					return
				}
				
				this.loadText='加载中...'
				let {data}=await this.myRequest({
					url:'/256990/api/home/recomend/list'
				})
				if(!data || data.length !==5 ){
					this.loadText='没有更多数据'
					return
				}
				this.newsList=[...this.newsList,...data]
				
				this.loadText='上拉加载更多'

			}
				
			,async getNewsList(){
				
				let {data}=await this.myRequest({
					url:'/256990/api/home/recomend/list'
				})
				// console.log(data)
				this.newsList=data
			}
		},
		components: {
			
			mylist,
			errPage
		}
	}
</script>

<style scoped lang="scss">
	
	.recommend-content{
		height: calc(100vh - 100rpx - 88rpx - 30rpx) !important;
		scroll-view{
			height: calc(100vh - 100rpx - 88rpx - 30rpx) !important;
		}
		.load-more{
			text-align: center;
			color: #aaa;
			padding: 20rpx;
			font-size: 30rpx;
		}
	}
</style>

