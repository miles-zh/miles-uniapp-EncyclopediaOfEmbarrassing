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
		<!-- 多文本输入框 -->
		<view class="text-area">
			<textarea v-model.trim="textAreaText" placeholder="试一试说一句内容" />
		</view>
		<!-- 上传多图 -->
		<view class="upload-imgs">
			<view class="upload-imgs-head">
				<view class="img-title">
					点击可预览选好的图片
				</view>
				<view class="img-count">
					{{chooseImgCount}}/9
				</view>
			</view>
			<view class="upload-imgs-content">
				<view class="img-item" v-for="(item,index) in chooseImgList" :key='index'>
					<image :src="item" @tap="previewImg(index)"></image>
					<view class="close" @tap="deleteImg(index)">
						<i class="fa fa-trash" aria-hidden="true"></i>
					</view>
				</view>
				
			</view>
			<view class="upload-img-button" @tap="uploadImg">
				+
			</view>
		</view>
		<uni-popup ref="popup" type="center" :maskClick='false'>
			<view class="warning-wrap">
				<view class="warning-title">
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590851300420&di=18c27a60c40eaaf926111ba6a7e27b2e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20200421%2F1e493a7f35bd45188c74a52cdd23f45d.jpeg" mode="widthFix"></image>
					<view>
						严禁发表以下信息
					</view>
				</view>
				<view class="warning-text">
					<view>1、涉及黄色，政治，广告及骚扰信息</view>
					<view>2、涉及人生攻击</view>
					<view>3、留联系方式，透露他人隐私</view>
					<view>一经核实将被封禁，情节严重者永久封禁!!!</view>
				</view>
				<view class="warning-button" @tap="closePopup">
					朕知道了
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	// import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	// import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		data() {
			return {
				authorityText:'所有人可见',
				textAreaText:'',
				chooseImgList:[],
				chooseImgCount:0,
				isBack:false
			}
		},
		// 监听页面返回事件
		onBackPress() {
			
			
			// return true
			
		},
		methods: {
			// 返回上一页
			goBack(){
				uni.showModal({
					content:'是否保存为草稿',
					confirmText:'保存',
					cancelText:"取消",
					success:(res) =>{
						if(res.confirm){
							let publishContent = {title:this.textAreaText,imgList:this.chooseImgList}
							uni.setStorageSync('publishContent',publishContent)
						}
						uni.navigateBack({
							delta:1
						})
					}
				})
				
			},
			openPopup(){
			    this.$refs.popup.open()
			},
			closePopup(){
				this.$refs.popup.close()
			},
			// 发布
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
			},
			// 选择图片
			uploadImg(){
				if(this.chooseImgList.length === 9){
					uni.showToast({
						title:'最多可以选择9张图片'
					})
					return
				}
				uni.chooseImage({
					sourceType:['album','camera'],
					success: (res) => {
						// console.log(res)
						this.chooseImgList=[...this.chooseImgList,...res.tempFilePaths]
						this.chooseImgCount=this.chooseImgList.length
					}
				})
			},
			// 预览图片
			previewImg(index){
				uni.previewImage({
					current:this.chooseImgList[index],
					urls:this.chooseImgList
				})
			},
			// 删除图片
			deleteImg(index){
				uni.showModal({
					title:'删除警告',
					content:'是否删除选中图片?',
					success: (res) => {
						// console.log(res)
						if(res.confirm){
							this.chooseImgList.splice(index,1)
							this.chooseImgCount=this.chooseImgList.length
						}
					}
				})
				
			}
		},
		components:{
			uniNavBar,
			uniPopup,
			// uniPopupMessage,
			// uniPopupDialog
		},
		mounted() {
			this.openPopup()
		},
		onShow() {
			let publishContent=uni.getStorageSync('publishContent') || {}
			this.textAreaText=publishContent.title || ''
			this.chooseImgList=publishContent.imgList || []
			this.chooseImgCount=this.chooseImgList.length
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
	.text-area{
		// height: 300rpx;
		width: 100%;
		margin-top: 56rpx;
		textarea{
			width: 100%;
			height: 300rpx;
			border: 1px solid #eee;
			padding: 10px;
		}
	}
	.upload-imgs{
		padding: 10rpx;
		.upload-imgs-head{
			font-size: 25rpx;
			display: flex;
			.img-title{
				flex: 1;
			}
		}
		.upload-imgs-content{
			display: flex;
			flex-wrap: wrap;
			margin-top: 10rpx;
			.img-item{
				height: 100rpx;
				width: 100rpx;
				position: relative;
				margin-left: 20rpx;
				margin-top: 20rpx;
				border: 1px solid #999;
				image{
					height: 100%;
					width: 100%;
				}
				.close{
					position: absolute;
					right: -10rpx;
					top:-10rpx;
					font-size: 20rpx;
					background-color: #f40;
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #fff;
				}
			}
		}
			
		.upload-img-button{
			background-color: $theme-color;
			border:1px solid $theme-color;
			color: #fff;
			width: 100rpx;
			height: 50rpx;
			margin-top: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.warning-wrap{
		background-color: #fff;
		padding: 20rpx;
		font-size: 28rpx;
		border-radius: 10rpx;
		.warning-title{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image{
				width: 30%;
			}
			view{
				
				padding: 10px 0;
				color: $theme-color;
				letter-spacing: 2rpx;
			}
		}
		.warning-text{
			view{
				margin-top: 10rpx;
				color: #555;
			}
		}
		.warning-button{
			background-color: $theme-color;
			color: #fff;
			padding: 20rpx;
			margin-top: 10rpx;
			border-radius: 10rpx;
			text-align: center;
			letter-spacing: 5rpx;
		}
	}
</style>
