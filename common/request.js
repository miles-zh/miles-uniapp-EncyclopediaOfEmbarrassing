const baseUrl='http://rap2.taobao.org:38080/app/mock'
async function myRequest(options){
	const res= await uni.request({
		...options,
		url:baseUrl+options.url
	})
	// console.log(res[0],res[1].data.isOk,res)
	if(res[1].data.isOk === false){
		// console.log(res[1].data.errMsg)
		uni.showToast({
			title:res[1].data.errMsg
		})
		return null
	}else{
		return res[1].data
	}
	
}

export default myRequest