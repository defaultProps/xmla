<template>
  <div class="flex-container">
      <div class="flex-wrapper swiper-wrapper">
        <div class="flex-lists swiper-slide">
          <div class="list" v-for="(item, index) in flexList1" >
            <div class="list-logo" >
              <!-- <img :src="item" /> -->
            </div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
        <div class="flex-lists swiper-slide">
          <div class="list" v-for="(item, index) in flexList2" >
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

</style>
