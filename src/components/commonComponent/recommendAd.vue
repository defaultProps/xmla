<template>
  <div class="container">
    <img :src="commendAD.img" />
    <div class="title">{{commendAD.title}}</div>
    <div class="detail">{{commendAD.detail}}</div>
  </div>
</template>

<script>
export default {
  props: {
    commendAD: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background-color #ffffff
  padding 10px
  img 
    width 100%
    height 127px
    border 1px solid #f8f8f8
  .title
    font-size 1.1em
    color #333333
  .detail
    font-size 0.9em
    color #999999
</style>
