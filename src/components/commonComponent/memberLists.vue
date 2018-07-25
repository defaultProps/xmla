<template>
  <div class="memberLists">
    <div class="lists-header">
      <div class="list" ref="list">
        <div class="list-wrap">
          <span class="title" v-for="(item, index) in memberListTitle" :key="index">{{item}}</span>
        </div>
      </div>
      <div class="list-up"></div>
    </div>
    <template v-for="item in memberList"> 
      <lists-down :listsdown="item"/>
    </template>
  </div>
</template>

<script>
import _BScroll from '@/common/js/BScroll'
import listsDown from '@/components/commonComponent/listsDown'
import memberVue from '../member/member.vue'
export default {
  data() {
    return {
    }
  },
  created() {
    this.$nextTick(()=>{
     new  _BScroll(this.$refs.list,{
       scrollX: true,
       scrollY: false,
       click: true
     });
    })
  },
  props: {
    memberList: {
      type: Array,
      default: []
    },
    memberListTitle: {
      type: Array,
      default: []
    }
  },
  components: {
    'lists-down': listsDown
  }
}
</script>

<style lang="stylus" scoped>
.memberLists
  background-color #ffffff
  .lists-header
    height 30px
    width 100%
    .list
      font-size 0.8em
      width 100%
      overflow-x auto
      line-height 30px
      background-color #e3e4e5
      white-space nowrap
      .title
        width 50px
        margin 0 10px
</style>
