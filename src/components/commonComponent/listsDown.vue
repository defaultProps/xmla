<template>
  <div class="container">
    <div class="header">
      <div class="title">{{listsdown.title}}</div>
      <div class="more" v-if="listsdown.title !== '为你推荐'">更多<i class="iconfont icon-youjiantou" style="dispaly:block;float:right"></i></div>
    </div>
    <div class="lists">
      <div class="classify-lists">
        <div class="classify-list" v-for="(item, index) in listsdown.list" :key="index">{{item}}</div>
      </div>
      <div class="list" v-for="(item, index) in  listsdown.content" :key="index" v-if="index < listsdown.showLength">
        <img :src="item.img" class="img"/>
        <div class="container-detail" >
          <div class="title">{{item.title}}</div>
          <div class="others">{{item.detail}}</div>
          <div class="player">
            <template v-if="item.number">
              <i class="iconfont "></i>
              <span>{{item.number}}</span>
            </template>
            <i class="iconfont"></i>
            <span>{{item.crown}}</span>
          </div>
        </div>
      </div>
      
    </div>
    <update-list />
  </div>
</template>
<script>
import updateList from '@/components/commonComponent/updateList'
export default {
  props: {
    listsdown: {
      type: Object,
      default: null
    }
  },
  components: {
    'update-list': updateList
  }
}
</script>
<style lang="stylus" scoped>
.container
  background-color #ffffff
  padding 10px 
  box-sizing border-box
  .header
    height 40px
    line-height 40px
    width 100%
    .title
      float left
      font-weight bold
    .more
      float right
      font-size 0.9em
      color #666666
  .lists
    overflow hidden
    .classify-lists
      display flex
      justify-content flex-start
      .classify-list
        color #666666
        padding 0 6px 
        border-radius 17px
        font-size 0.85em
        margin-right 5px
        border 1px solid #666666
    .list
      margin-top 10px
      display flex
      justify-content flex-start
      .img
        width 60px
        height 60px
        border 1px solid #e8e8e8  
      .container-detail
        width 100%
        padding-bottom 4px
        margin-left 4px
        border-bottom 1px solid #eaeaea
        .title
          font-size 1.1em
          color #333333
          font-weight 500
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          width  100%
        .others
          color #999999
          font-size .9em
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          width 100%
        .player
          display block
          font-size 0.9em
          i
            float left
            margin-left 4px
          span
            float left
            color #999999
            margin-left 4px
</style>
