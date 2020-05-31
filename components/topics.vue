<template>
	<view class="topics-wrap">
		<!-- 搜索框 -->
		<view class="search m-f m-f-aic">
			<text class="fa fa-search"></text> <input type="text" v-model="searchText" class="m-f-f1" placeholder="请输入搜索内容"
			 placeholder-style="text-align:center" />
		</view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#fff">
			<block v-for="(item,index) in swiperList" :key="index">
				<swiper-item>
					<image :src="item.imgUrl"></image>
				</swiper-item>
			</block>

		</swiper>
		<!-- 热门分类 -->
		<view class="topics-nav">
			<view class="topics-nav-title m-f m-f-jcsb m-f-aic">
				<view >
					热门分类
				</view>
				<view class="">
					更多 <i class="fa fa-angle-right" aria-hidden="true"></i>	
				</view>
			</view>
			<view class="topics-nav-item m-f m-f-jcsa">
				<view>最新</view>
				<view>游戏</view>
				<view>打卡</view>
				<view>情感</view>
				<view>故事</view>
				<view>喜爱</view>
			</view>
		</view>
		<!-- 自动更新 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchText: '',
				swiperList: [{
					imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590890677528&di=8d5ccd4ee18e7856fc6bc60952ffef6d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201210%2F04%2F20121004225459_YQehP.thumb.224_0.jpeg'
				}, {
					imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3823650407,1606007271&fm=26&gp=0.jpg'
				}, {
					imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1897508438,807292774&fm=26&gp=0.jpg'
				}]
			};
		}
	}
</script>

<style scoped lang="scss">
	.search {

		background-color: #eee;
		padding: 10rpx 20rpx;
		color: #999;
		width: 90%;
		margin: 20rpx auto;
		font-size: 25rpx;
		border-radius: 20rpx;

		text {
			margin-right: 20rpx;
		}

		input {
			font-size: 25rpx;
		}
	}

	swiper {
		height: 300rpx;
		width: 95%;
		border: 1px solid #ddd;
		border-radius: 20rpx;
		overflow: hidden;
		margin: 0 auto;

		image {
			height: 100%;
			width: 100%;

		}
	}
	.topics-nav{
		margin-top: 20rpx;
		padding: 20rpx;
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		.topics-nav-title{
			font: 30rpx;
			view:nth-of-type(2){
				color: #999;
				font-size: 30rpx;
				i{
					margin-left: 20rpx;
					font-size: 40rpx;
				}
			}
		}
		.topics-nav-item{
			padding: 20rpx 0;
			font-size: 25rpx;
			view{
				background-color: #eee;
				margin-right: 20rpx;
				padding: 10rpx 20rpx;
				margin-top: 20rpx;
				color: #777;
				border-radius: 10rpx;
			}
		}
	}
</style>
