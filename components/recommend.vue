<template>
	<view class="content ">

		
	<!-- 推荐列表页面 -->
	
	
	<scroll-view :scroll-y="true" >
		<mylist :list="list" @handleLike="handleLike" @handleDislike='handDislike' @follow='follow'></mylist>
		
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		
	</scroll-view>	
	
		
	</view>
</template>

<script>
	
	import mylist from "./mylist.vue"
	export default {
		data() {
			return {
				list:[{
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
				}]
			}
		},
		onLoad() {

		},
		methods: {
			// 顶
			handleLike(index){
				let item =this.list[index]
				if(item.info.type === 0){
					this.list[index].info.type=1
					this.list[index].info.likeNumber +=1
				}
				if(item.info.type === 2){
					this.list[index].info.type=1
					this.list[index].info.likeNumber +=1
					this.list[index].info.dislikeNumber -=1
				}
				
			
			},
			// 踩
			handDislike(index){
				console.log(index)
				let item =this.list[index]
				if(item.info.type === 0){
					this.list[index].info.type=2
					this.list[index].info.dislikeNumber +=1
				}
				if(item.info.type === 1){
					this.list[index].info.type=2
					this.list[index].info.likeNumber -=1
					this.list[index].info.dislikeNumber +=1
				}
			},
			// 关注
			follow(index){
				this.list[index].isFollowed = !this.list[index].isFollowed
			},
				
			
		},
		components: {
			
			mylist
		}
	}
</script>

<style scoped lang="scss">
	
	.content{
		
	}
</style>

