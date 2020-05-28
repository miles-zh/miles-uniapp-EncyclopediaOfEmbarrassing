<template>
	<view class="content ">
		<!-- 顶部导航 -->
		<uniNavBar fixed background-color="#2196f3" class="top-tab">
			<text class="fa fa-certificate" slot="left"></text>
			<navigator url="">
				<text class="fa fa-search"></text>搜索糗事
			</navigator>
			<text class="fa fa-pencil" slot="right"></text>
		</uniNavBar>
		<!-- 页面导航 -->

		<!-- <topTab @changeTab="changeTab" :tabList='tabBars' :tabIndex="tabIndex" style="margin-top:20px" scrollInto='scrollInto' ></topTab> -->
		
		<view class="tabs">
			<scroll-view class="scroll-h" id="tab-bar" :scroll-x='true' :show-scrollbar="false" scroll-into-view="entertainment1">
				<view :class="['uni-tab-item', tabIndex === index ? 'tab-active':'']" v-for="(item,index) in tabBars" :key="item.id"
				 @tap="clickTab(index)">
					{{item.name}}
					<view class="active-line" v-show="tabIndex === index"></view>
				</view>
		
			</scroll-view>
		</view>


		<!-- 内容区域 -->

		<swiper @change="changeTabContent" :current="currentContentIndex">
			<swiper-item>
				<view class="swiper-item">关注</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<scroll-view scroll-y="true" @scrolltolower="pullUpload">
						<recommend></recommend>
					</scroll-view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">体育</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">热点</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">财经</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">娱乐</view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import recommend from "@/components/recommend.vue"
	// import topTab from "@/components/topTab.vue"
	export default {
		data() {
			return {
				tabIndex: 1,
				tabBars: [{
						id: 'follow1',
						// id: 0,
						name: '关注'
					},
					{
						id: 'recommend2',
						// id: 1,
						name: '推荐'
					},
					{
						id: 'sports3',
						// id: 2,
						name: '体育'
					},
					{
						id: 'hotspot4',
						// id: 3,
						name: '热点'
					},
					{
						id: "economics5",
						// id: 4,
						name: '财经'
					},
					{
						id: 'entertainment6',
						// id: 5,
						name: '娱乐'
					}
				],
				// topTabScrollLeft: 0,
				scrollIntoa:"entertainment",
				currentContentIndex: 1
			}
		},
		onLoad() {

		},
		methods: {
			pullUpload(e) {
				console.log(e)
			},

			changeTabContent(e) {
				// console.log(e)
				this.tabIndex = e.detail.current
				// this.scrollInto=this.tabBars[e.detail.current].id
				// console.log(this.scrollInto)
				this.scrollIntoa =this.tabBars[this.tabIndex].id
				console.log(this.scrollIntoa)
			},

			changeTab(index) {
				// console.log(index)
				this.tabIndex = index
				this.currentContentIndex = index


			},
				
			clickTab(index){
				
				this.currentContentIndex = index
			}
			
		},

		computed: {

		},
		components: {
			uniNavBar,
			recommend,
			// topTab
		}
	}
</script>

<style scoped lang="scss">
	.top-tab {
		display: flex;
		padding: 0rpx 10rpx 0;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;

		.fa-certificate {
			color: #FFFF00;
		}

		navigator {
			background-color: #eee;
			flex: 1;
			font-size: 25rpx;
			color: #999 !important;
			height: 50rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10rpx;

			.fa-search {
				color: #999 !important;
				margin-right: 20rpx;
			}

		}
	}

	swiper {
		height: calc(100vh - 100rpx - 88rpx - 72rpx) !important;

		swiper-item {
			height: 100%;

			.swiper-item {
				height: 100% !important;

				scroll-view {
					height: 100%;
				}
			}
		}
	}
	
	
	.tabs {
			overflow: hidden;
			.scroll-h {
			    width: 750rpx;
			    height: 70rpx;
			    flex-direction: row;
			    
			    white-space: nowrap;
				line-height: 50rpx;
				border-bottom: 2rpx solid #eee !important;
			    
				.uni-tab-item {
				    
					display: inline-block;
				    flex-wrap: nowrap;
				    padding-left: 45rpx;
				    padding-right: 45rpx;
					font-size: 30rpx;
					text-align: center;
				}
				.active-line{
					height: 2rpx;
					background-color: $theme-color;
					width: 70rpx;
					margin:0 auto;
					
				}
				.tab-active{
					color: $theme-color;
					font-weight: 600;
					
				}
			}
		}
</style>
