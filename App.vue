<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import url("./common/animate.css");
	@import url("./common/font-awesome.min.css");
	
	
	
	/*每个页面公共css */
	view{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.m-f{
		display: flex;
	}
	.m-f-fdc{
		flex-direction: column;
	}
		
	.m-f-aic{
		align-items: center;
	}
	
	.m-f-jcc{
		justify-content: center;
	}
	.m-f-jcsa{
		justify-content: space-around;
	}
	
	.m-f-jcsb{
		justify-content: space-between;
	}
	.m-f-f1{
		flex: 1;
	}
	.m-f-fww{
		flex-wrap: wrap;
	}
	
	
	
	
	
	
	
</style>
