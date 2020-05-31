<template>
	<view class="topics-classify-wrap">
		<topTab @changeTab="changeTab" :tabList='tabBars' :tabIndex="tabIndex" style="margin-top:10rpx" :scrollInto='scrollInto' ></topTab>
		<swiper @change="changeTabContent" :current="currentContentIndex" class="">
			<swiper-item>
				
					<view class="swiper-item">
						<scroll-view scroll-y="true" @scrolltolower="loadmore(currentContentIndex)">
							<block v-for="(item,index) in followedTopicsList" :key="index">
								<TopicsList :topic="item"></TopicsList>
							</block>
							<view class="load-more">
								{{loadText}}
							</view>
						</scroll-view>
					</view>
				
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" @scrolltolower="loadmore(currentContentIndex)">
						<block v-for="(item,index) in recommendTopicsList" :key="index">
							<TopicsList :topic="item"></TopicsList>
						</block>
						<view class="load-more">
							{{loadText}}
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" @scrolltolower="loadmore(currentContentIndex)">
						<block v-for="(item,index) in sportsTopicsList" :key="index">
							<TopicsList :topic="item"></TopicsList>
						</block>
						<view class="load-more">
							{{loadText}}
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" @scrolltolower="loadmore(currentContentIndex)">
						<block v-for="(item,index) in entertainmentTopicsList" :key="index">
							<TopicsList :topic="item"></TopicsList>
						</block>
						<view class="load-more">
							{{loadText}}
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" @scrolltolower="loadmore(currentContentIndex)">
						<block v-for="(item,index) in recommendTopicsList" :key="index">
							<TopicsList :topic="item"></TopicsList>
						</block>
						<view class="load-more">
							{{loadText}}
						</view>
					</scroll-view>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	import topTab from '@/components/topTab.vue'
	import TopicsList from '@/components/topicslist.vue'
	export default {
		data() {
			return {
				tabIndex: 0,
				currentContentIndex:0,
				scrollInto:'',
				loadText:'上拉加载更多',
				tabBars:[
					{
						id:'0',
						name:'关注'
					},
					{
						id:'1',
						name:'推荐'
					},
					{
						id:'2',
						name:'体育'
					},
					{
						id:'3',
						name:'娱乐'
					},
					{
						id:'4',
						name:'财经'
					}
				],
				followedTopicsList:[
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
				],
				recommendTopicsList:[
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
				],
				sportsTopicsList:[
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
				],
				entertainmentTopicsList:[
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
				],
				economicsTopicsList:[
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
				],
				
				
			}
		},
		methods: {
				
			changeTab(index){
				this.tabIndex=index
				this.currentContentIndex=index
			},
				
			changeTabContent(e){
				this.tabIndex = e.detail.current
			},
			loadmore(index){
				switch(index){
					case 0:
					this.loadText='加载中...'
					setTimeout(()=>{
						let obj={
							img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
							topicsTitle:'我的话题',
							topicsContent:'我的话题dddd',
							topicsTotal:20,
							topicsNow:4
						}
						this.followedTopicsList.push(obj)
						this.loadText='上拉加载更多'
					},2000)
					break;
					case 1:
					this.loadText='加载中...'
					setTimeout(()=>{
						let obj={
							img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
							topicsTitle:'我的话题',
							topicsContent:'我的话题dddd',
							topicsTotal:20,
							topicsNow:4
						}
						this.recommendTopicsList.push(obj)
						this.loadText='上拉加载更多'
					},2000)
					break;
					case 2:
					this.loadText='加载中...'
					setTimeout(()=>{
						let obj={
							img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
							topicsTitle:'我的话题',
							topicsContent:'我的话题dddd',
							topicsTotal:20,
							topicsNow:4
						}
						this.sportsTopicsList.push(obj)
						this.loadText='上拉加载更多'
					},2000)
					break;
					case 3:
					this.loadText='加载中...'
					setTimeout(()=>{
						let obj={
							img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
							topicsTitle:'我的话题',
							topicsContent:'我的话题dddd',
							topicsTotal:20,
							topicsNow:4
						}
						this.entertainmentTopicsList.push(obj)
						this.loadText='上拉加载更多'
					},2000)
					break;
					case 4:
					this.loadText='加载中...'
					setTimeout(()=>{
						let obj={
							img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1592023939,2457909057&fm=26&gp=0.jpg',
							topicsTitle:'我的话题',
							topicsContent:'我的话题dddd',
							topicsTotal:20,
							topicsNow:4
						}
						this.economicsTopicsList.push(obj)
						this.loadText='上拉加载更多'
					},2000)
					break;
				}
			}
			
		},
		components:{
			topTab,
			TopicsList
		}
	}
</script>

<style scoped lang="scss">
	.topics-classify-wrap{
		width: 100%;
	}
	swiper{
		height: calc(100vh - 90rpx) !important;
		
		swiper-item {
			height: 100% !important;
		
			.swiper-item {
				height: 100% !important;
				// border: 1px solid #000;
				scroll-view{
					height: 100%;
					.load-more{
						font-size: 30rpx;
						color: #999;
						text-align: center;
						padding: 20rpx;
					}
				}
			}
		}
	}
</style>
