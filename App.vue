<script>
	export default {
    globalData:{
      view:25,
      width:375
    },
		onLaunch: function() {
			console.log('App Launch')
      const view=uni.getSystemInfoSync()
      console.log(view)
      this.globalData.width=view.windowWidth
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss" >
	/*每个页面公共css */
  page{
    background-color: #C8C7CC;
  }
 .c1{
   text-overflow: ellipsis;
   overflow: hidden;
   display: -webkit-box;
       -webkit-line-clamp: 1; /* 限制在一个块元素显示的文本的行数 */
       -webkit-box-orient: vertical; /* 垂直排列 */
       word-break: break-all;  /* 内容自动换行 */
 }
</style>
