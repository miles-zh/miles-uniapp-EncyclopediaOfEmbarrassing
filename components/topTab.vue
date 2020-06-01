<template>
	<view>
		<view class="tabs">
			<scroll-view class="scroll-h" id="tab-bar" :scroll-x='true' :show-scrollbar="false" :scroll-into-view="scrollInto">
				<view :class="['uni-tab-item', tabIndex === index ? 'tab-active':'']" v-for="(item,index) in tabList" :key="item.id" @tap="clickTab(index)" :style="{width:(itemWidth || 'auto')}">
					{{item.name}}{{item.number||''}}
					<view :class="[tabIndex === index?'active-line':'','line']"></view>
				</view>
		
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['tabList','tabIndex','scrollInto','itemWidth'],
		methods:{
			clickTab(index){
				this.$emit('changeTab',index)
			},
			
		},
		mounted() {
			
		},
		updated() {
			// console.log(this.scrollInto,"aa")
		}
	}
	
</script>

<style lang="scss" scoped>


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
			.line{
				width: 70rpx;
				margin:0 auto;
				height: 2rpx;
			}
			.active-line{
				
				background-color: $theme-color;
				
				
			}
			.tab-active{
				color: $theme-color;
				font-weight: 600;
				
			}
		}
	}
</style>
