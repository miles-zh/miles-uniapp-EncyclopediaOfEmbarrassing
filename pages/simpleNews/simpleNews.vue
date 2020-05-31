<template>
	<view>
		<uni-nav-bar fixed backgroundColor="#2196f3" class="top-nav-bar">
			<view class="fa fa-address-card-o" slot='left'></view>
			<view class="nav-bar-title">
				短消息
			</view>
			<view class="fa fa-plus" slot='right'></view>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			uniNavBar
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
</style>

