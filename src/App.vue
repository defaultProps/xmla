<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="footer">
      <div class="wrappr-footer">
        <div class="list">
          <router-link to="/Home">
          <i class="iconfont icon-xingqiu- footer-icon"></i>
            <div class="footer-title">首页</div>
          </router-link>
        </div>
        <div class="list">
          <router-link to="/listen">
            <i class="iconfont icon-erji footer-icon"></i>
            <div class="footer-title">我听</div>
          </router-link>
        </div>
        <div class="list">
          <router-link to="/listen">
           <div class="player">
             <img src="http://imagev2.xmcdn.com/group39/M06/01/19/wKgJnlphjGuwslJPAAGfGRV4Y-o110.jpg!op_type=5&upload_type=album&device_type=ios&name=web_large&strip=0&quality=7" alt="">
           </div>
          </router-link>
        </div>
        <div class="list">
          <router-link to="/personal">
            <i class="iconfont icon-compass footer-icon"></i>
            <div class="footer-title">发现</div>
          </router-link>
        </div>
        <div class="list">
          <router-link to="/find">
          <i class="iconfont icon-geren footer-icon"></i>
          <div class="footer-title">未登录</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video, input
    margin 0
    padding 0
    border 0
    font-size: 100%
    font-weight normal
    vertical-align baseline
    list-style none
    text-decoration none
  html,body
    width 100vw
    height 100vh
    background-color #f8f8f8
  .footer
    position absolute
    bottom 0
    left 0
    right 0
    height 52px
    background-color #fff
    box-shadow 0px -1px 1px #f8f8f8
    .wrappr-footer
      display flex
      justify-content space-around
      align-items center
      flex-direction row
      a
        display flex
        justify-content center
        align-items center
        flex-direction column
        font-size 12px
        color #949494
        &.active
          color red
          i
            color #ff572e
        i
          font-size 31px
          margin 0 auto
          color #424242
        
        .player
          width: 60px
          height: 30px
          border: 1px solid #e3e4e5
          border-radius:60px 60px 0 0
          border-bottom 0
          background-color #fff
          margin-top -40px
          box-shadow 0px -1px 1px #e3e4e5
          padding 10px
          box-sizing border-box
          position relative
          img
            position absolute
            top 5px
            left 5px
            width 50px
            height 50px
            border-radius 50%
</style>
