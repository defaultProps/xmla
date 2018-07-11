<template>
<div>
  <div class="header">
    <div class="login">登录</div>
    <div class="input-wrap">
      <i class="icon-chazhao iconfont"></i>
      <input type="text" placeholder="权谋:升迁有道 | 扶摇皇后 | 穿越" />
    </div>
    <div class="icon-wrapper"><i class="icon-naozhong iconfont"></i></div>
    <div class="icon-wrapper"><i class="icon-xiazai iconfont"></i></div>
  </div>
  <router-link to="/Home/classify">分类</router-link>
  <router-link to="/Home/recommend">推荐</router-link>
  <router-link to="/Home/directSeeding">直播</router-link>
  <router-link to="/Home/member">会员</router-link>
  <router-link to="/Home/radio">广播</router-link>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
import headerTop from '@/components/headerTop/headerTop'
export default {

  components: {
    // 数据修改
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
  html,body
    font-size 14px
.header
  table(10px, 40px, #ffffff)
  .login
    font-weight bolder
    color #666
  .input-wrap
    position relative
    color #cccccc

    input
      -webkit-appearance none
      background-color #eff1f4
      
      background-image none
      border-radius 30px
      border 1px solid #e7e7e7  
      -webkit-box-sizing border-box
      box-sizing border-box
      color #000
      display inline-block
      height 30px
      line-height 30px
      outline 0
      padding 0 20px
      width 68vw
      font-size 14px
    i
      position absolute
      top 5px
      left 5px
      color #ccc
      font-size 16px

  .icon-wrapper
    i
      font-size 23px
      color #666
</style>
