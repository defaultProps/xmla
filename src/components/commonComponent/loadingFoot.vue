<template>
  <div class="upLoading">
    <div class="up">向上拉取更多</div>
    <span class="report">我要举报
      <i class="iconfont icon-shuangyoujiantou-"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      up: ['向上拉取更多','正在努力获取...','没有更多了~']
    }
  },
  created() {

  }
}
</script>
<style lang="stylus" scoped>
.upLoading
  text-align center
  margin 0 auto
  height 100px
  .up
    color #333333
    font-size 0.85em
    text-align center
    margin 10px 0 40px 0
  .report
    border 1px solid #999999
    border-radius 3px
    padding 1px 2px
    color #999999
    font-size 0.9em
  i 
    font-size 0.85em

</style>
