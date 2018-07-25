<template>
 <div class="member" ref="member">
    <div class="member-wrapper">
      <swiper-ad :swiperAD="swiperAD"/>
      <bscroll-x :bscrollX="bscrollX"/>
      <cut-line />
      <lists-wrap :listswrap="VIP" :maxLength="3" />
      <cut-line />
      <lists-wrap :listswrap="VIPHOT" :maxLength="3" />
      <cut-line />
      <member-lists :memberList="memberList" :memberListTitle="memberListTitle" />
    </div>
 </div>
</template>
<script>
const URL = "static/member.json";

import memberLists from '@/components/commonComponent/memberLists'
import _BScroll from '@/common/js/BScroll'  
import listsWrap from '@/components/commonComponent/listsWrap'
import swiperAd from '@/components/commonComponent/swiperAD'
import bscrollX from '@/components/commonComponent/bscrollX'
import cutLine from '@/components/commonComponent/cutLine'
export default {
  data() {
    return {
      swiperAD: [],
      bscrollX: [],
      VIP: {},
      VIPHOT: {},
      memberList: [],
      memberListTitle: []
    }
  },
  created() {
    this.$nextTick( () => {
      _BScroll(this.$refs.member);
    })
  },
  components: {
    'cut-line': cutLine,
    'swiper-ad': swiperAd,
    'bscroll-x': bscrollX,
    'lists-wrap': listsWrap,
    'member-lists': memberLists
  },
  mounted() {
    this.$http.get(URL).then(res => {
      if(res.confirm) {
        this.swiperAD = res.data.swiperAD;
        this.bscrollX = res.data.bscrollX;
        this.VIP = res.data.VIP;
        this.VIPHOT = res.data.VIPHOT;
        this.memberList = res.data.memberList;
        this.memberListTitle = res.data.memberListTitle;
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.member
  padding 0
  margin 0
  position absolute
  top 0px
  left 0
  right 0
  bottom 0
  background-color #f8f8f8
  overflow hidden
</style>

