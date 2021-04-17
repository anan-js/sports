<template>
	<view class="homeGrid">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"homeGrid",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.homeGrid{
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
