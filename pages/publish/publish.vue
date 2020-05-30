<template>
	<view>
		<!-- 顶部导航 -->
		<uniNavBar fixed background-color="#2196f3" class="top-tab" @clickRight="publishContent" @clickLeft="goBack">
			<text class="fa fa-chevron-left" slot="left"></text>
			<view class="authority" @tap="changeAuthority">
				<text>{{authorityText}}</text><text class="fa fa-angle-down"></text>
			</view>
			<text slot='right'>发布</text>
		</uniNavBar>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				authorityText:'所有人可见'
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			publishContent(){
				
			},
			// 改变查看权限
			changeAuthority(){
				let authorityList=['所有人可见','仅自己可见']
				uni.showActionSheet({
					itemList:authorityList,
					success:(res)=> {
						let index=res.tapIndex
						// console.log(authorityList)
						this.authorityText=authorityList[index]
					}
				})
			}
		},
		components:{
			uniNavBar
		}
	}
</script>

<style scoped lang="scss">
	.top-tab{
		.authority{
			width: 100%;
			text-align: center;
			
			text:nth-of-type(1){
				margin-right: 20rpx;
			}
		}
		text{
			color: #fff;
		}
	}
	
</style>
