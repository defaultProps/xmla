<template>
  <div class="nav">
    <div class="nav-lists">
      <div class="list" v-for="(item, index) in nav" @click="tabClick(index)" :key="index" :class="{'on': currentIndex === index}">{{item}}</div>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
export default {
  data() {
    return {
      nav: ['分类', '推荐', '会员', '直播', '广播'],
      currentIndex: 1
    }
  },
  props: {
    routes: {
      type: Array,
      default: []
    }
  },
  created() {
    
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$root.eventBus.$emit('changeTab', index);
    }
  },
  mounted() {
    this.$root.eventBus.$on('slideTab', (index) => {
      this.currentIndex = index
    })
  }
}
</script>

<style lang="stylus" scroped>

@import '../../common/stylus/mixin.styl';

.nav-lists
  flex(10px,39px, #f3f4f5)
  box-shadow -1px -1px 1px #d8d8d8
  border-bottom 1px solid #fff
  .list
    color #333
    font-weight 520
    font-size 17px
    position relative
  .on:after
    position absolute
    width 120%
    height 2px
    border-radius 2px
    left -3px
    top 30px
    background-color red
    content  ''

</style>
