<template>
	<view class="homeBody">
		<view class="homeBodyTitle">
		  <text>为你推荐</text>
      <view class="tags">
        <navigator url="" class="tags_item">培训</navigator>
        <navigator url="" class="tags_item">赛事</navigator>
        <navigator url="" class="tags_item">活动</navigator>
        <navigator url="" class="tags_item">公益</navigator>
      </view>
		</view>
    <view class="homeBody_box">
      2222
    </view>
	</view>
</template>

<script>
	export default {
		name:"homeBody",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.homeBody{
  background-color: white;
  &Title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: #cccccc;
      width: 100%;
      height: 1px;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
    .tags{
      display: flex;
      flex-direction: row-reverse;
      &_item{
        margin: 8px;
        padding: 4px 8px;
        box-sizing: border-box;
        border-radius: 4px;
        background-color: $uni-color-error;
        font-weight: 600;
        color: white;
      }
    }
  }
}
</style>
