<template>
  <view>
    <!-- 状态栏 -->
  <view class="status_bar" ></view>
    <homeSwiper>
      <swiper-item v-for="i in 4">
        <view class="swiper-item">{{i}}</view>
      </swiper-item>
    </homeSwiper>
    <gird>
      <gridItem v-for="i in icons" >
        <view class="img_box" :style="{width:width+'px',height:width+'px'}">
          <image class="image" :src="i" mode="aspectFit" ></image>
        </view>
        <text class="c1">{{js(i)}}</text>
      </gridItem>
    </gird>
    <view class="twoS">
      <homeSwiper :height="110" >
        <swiper-item v-for="i in 2" >
         <homeGrid>
           <homeGridItem v-for="i in 4">
             <view class="bl">
               <image class="image" src="../../static/icons/其他.png" mode="aspectFit"></image>
             </view>
             <text>{{i}}</text>
           </homeGridItem>
         </homeGrid>
        </swiper-item>
      </homeSwiper>
    </view>
  <homeBody>
    
  </homeBody>
  </view>
</template>

<script>
  import pngs from "./icons.js"
	export default {
		data() {
			return {
        icons:[],
        width:75
			}
		},
    onLoad() {
      console.log(pngs,this.$data.icons)
      this.$data.icons.splice(0,0,...pngs)
      this.$data.width=(getApp().globalData.width/5)*0.5
      console.log(this.$data.width,getApp().globalData)
    },
		methods: {
			js(i){
        return i.slice(12).slice(0,i.slice(12).search(/\./))
      }
		}
	}
</script>

<style lang="scss" scoped>
.status_bar {
      height: var(--status-bar-height);
      width: 100%;
  }
.img_box{
  background: blue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image{
    width: 75%;
    height: 75%;
}
.twoS{
  margin: 5px 0;
  box-sizing: border-box;
  padding-top: 10px ;
  background-color: white;
}
.bl{
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
}
</style>
