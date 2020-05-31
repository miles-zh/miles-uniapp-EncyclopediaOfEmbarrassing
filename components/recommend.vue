<template>
	<view class="recommend-content ">

	<template v-if="newsList.length !== 0">
	<!-- 推荐列表页面 -->
	
	
	<scroll-view :scroll-y="true" @scrolltolower="loadMore">
		<block v-for='(item,index) in newsList' :key='index'>
		<mylist :list="item.listContent" @handleLike="handleLike(index)" @handleDislike='handDislike(index)'  @follow='follow(index)'></mylist>
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
				newsList:[
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
				
			}
		},
		onLoad() {

		},
		methods: {
			// 顶
			handleLike(index){
				// console.log(index)
				let item =this.newsList[index].listContent
				if(item.info.type === 0){
					item.info.type=1
					item.info.likeNumber +=1
				}
				if(item.info.type === 2){
					item.info.type=1
					item.info.likeNumber +=1
					item.info.dislikeNumber -=1
				}
				this.newsList[index].listContent=item
			},
			// 踩
			handDislike(index){
				// console.log(index,this.newsList[index])
				
				let item =this.newsList[index].listContent
				if(item.info.type === 0){
					item.info.type=2
					item.info.dislikeNumber +=1
				}
				if(item.info.type === 1){
					item.info.type=2
					item.info.likeNumber -=1
					item.info.dislikeNumber +=1
				}
				this.newsList[index].listContent=item
			},
			// 关注
			follow(index){
				this.newsList[index].listContent.isFollowed = !this.newsList[index].listContent.isFollowed
				if(this.newsList[index].listContent.isFollowed){
					uni.showToast({
					title:'关注成功!'
				})
					
				}else{
					uni.showToast({
						title:'取消关注!'
					})
				}
				
				
				
			},
			loadMore(e){
					// console.log(e)
				if(this.loadText !== '上拉加载更多'){
					return
				}
				
				this.loadText='加载中...'
				setTimeout(()=>{
					let obj={
						
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
					this.newsList.push(obj)
					this.loadText='上拉加载更多'
				},1000)
				
				
				
				// this.loadText='没有更多数据了'
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

