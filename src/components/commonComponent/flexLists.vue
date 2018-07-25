<template>
  <div class="flex-container">
      <div class="flex-wrapper swiper-wrapper">
        <div class="flex-lists swiper-slide">
          <div class="list" v-for="(item, index) in flexList1" :key="index">
            <div class="list-logo" >
              <!-- <img :src="item" /> -->
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
        <div class="flex-lists swiper-slide">
          <div class="list" v-for="(item, index) in flexList2" :key="index">
            <div class="list-logo" >
              <!-- <img :src="item" /> -->
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    flexList1: {
      type: Array,
      default: []
    },
    flexList2: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="stylus">
  .flex-container
    padding 10px
    width 100%
    background-color #ffffff
    box-sizing border-box
    .flex-lists
      display flex
      justify-content flex-start
      flex-wrap wrap
      width 100% 
      .list
        width 20%
        display flex
        justify-content center
        flex-direction column
        .list-logo
          width 35px
          height 35px
          background-color #f8f8f8
          border-radius 50%
          margin 0 auto
          img 
            margin 0 auto
        .name
          text-align center
          padding 5px 0 10px 0
</style>
