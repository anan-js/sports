<template>
    <swiper class="swiper_box"  :style="{height:height+'px'}"  :indicator-dots="indicatorDots" :indicator-active-color="indicatorColor" :autoplay="false" :interval="3000" :duration="500">
      <slot></slot>
    </swiper>
</template>

<script>
	export default {
		name:"homeSwiper",
    props:{
      indicatorColor:{
        type:String,
        default:"#ff9800",
      },
      height:{
        type:Number,
        default:150,
      },
      indicatorDots:{
        type:Boolean,
        default:true
      }
    },
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.swiper_box{
  background-color: white;
}
</style>
