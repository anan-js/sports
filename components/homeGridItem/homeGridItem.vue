<template>
	<view class="homeGridItem">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"homeGridItem",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.homeGridItem{
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: space-around;
  flex-wrap: wrap;
}
</style>
