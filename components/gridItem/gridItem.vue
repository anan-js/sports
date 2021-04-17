<template>
		<view class="gird_item" :style="{width:width||'20%',height:height||'50%'}">
      <slot></slot>
		</view>
</template>

<script>
	export default {
		name:"gridItem",
    props:["height","width"],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.gird_item{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
