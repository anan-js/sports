<template>
	<view class="gird" :style="{height:height+'px'}">
		<view class="gird_box">
		  <slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"gird",
    props:{
      height:{
        type:String,
        default:"144"
      }
    },
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.gird{
  width: 100%;
  background-color: white;
  padding: 10px 0;
  &_box{
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
}
</style>
