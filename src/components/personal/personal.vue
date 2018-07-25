<template>
  <div class="personal">
    <div class="header">
      <i class="iconfont icon-email"></i>
      <i class="iconfont icon-shezhi"></i>
      <div class="login-bp">
        <div class="wrap"><i class="iconfont icon-jifen"></i></div>
        <div class="login">
          <div class="title">登录送积分</div>
          <div class="bp">+5积分</div>
        </div>
      </div>
    </div>
    <div class="login-container">
      <div class="logo"></div>
      <div class="click-logo">
        <div class="title">点击登录</div>
        <div class="detail">1秒登录，专享个性化服务</div>
      </div>
      <div class="bacImg">
        <div class="title">VIP会员</div>
        <div class="detail">精品臻选免费畅听</div>
      </div>
    </div>
    <div class="flex-logo">
      <div class="lists">
        <div class="list">
          <div class="main"></div>
          <div class="title"></div>
        </div>
      </div>
    </div>
    <!-- -----
    <div class="flex-logo">
      <div class="lists">
        <div class="list">
          <div class="main"></div>
          <div class="title"></div>
        </div>
      </div>
    </div>
    ----
    <div class="lists">
      <div class="list">
        <i class="iconfont"></i>
        <div class="title"></div>
        <i class="iconfont"></i>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.personal
  background-color #f4f6f8
  .header
    display flex
    justify-content flex-start
    height 45px
    line-height 45px
    i
      font-size 1.4rem
      color #333333
      margin-left 10px
    .login-bp
      padding-left 10px
      box-sizing border-box
      position absolute
      right 0
      overflow hidden
      width 120px
      height 45px
      display flex
      flex-direction row
      background-color #ffece8
      color #666666
      border-top-left-radius 40px
      border-bottom-left-radius 40px
      .wrap
        width 25px
        height 25px
        background-color #ff7b5d
        border-radius 50%
        margin-top 10px
        i
          font-size 0.9em
          position relative
          top -8px
          color #ffffff
          left -4px
      .login
        margin-left 4px
        height 100%
        background-color #ffece8
        margin-top 6px
        font-size 0.8em
        line-height 17px
        text-align center
        .title
          color #666666
          display inline
        .bp
          color #f86442
  .login-container
    overflow hidden
    position relative
    font-size 0.5em
    height 130px
    background-color #f4f6f8
    display flex
    justify-content flex-start
    flex-direction row
    box-sizing border-box
    padding-top 30px
    padding-left 10px
    .logo
      height 60px
      width 60px
      border-radius 50%
      background-color #ececec
    .click-logo
      display flex
      flex-direction column
      padding-left 10px
      box-sizing border-box
      padding-top 10px
      line-height 20px
      .title
        color #333333
        font-size 1.7em
        font-weight bold
      .detail
        color #999999
    .bacImg
      height 50px
      width 90px
      color #666666
      background-color #d3d3d3
      border-radius 10px
      position absolute
      right 10px
      bottom -10px
      transform rotate(15deg)
      padding-left 10px
      .title
        font-size 1.5em
        
        font-weight bold



        



</style>

