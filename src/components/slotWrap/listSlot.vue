<template>
  <div>
    <!-- <slot name="gussLike">
      <div class="unusual">
        <i class="iconfont icon-bazi" style="dispaly:block;float:left"></i>点我猜测更准
      </div>
    </slot> -->
    <slot></slot>
    <!-- <slot name="recommend">
      <div class="recommend">
        <i class="iconfont icon-bazi" style="dispaly:block;float:left"></i>不一样的新概念 |
      </div>
    </slot> -->
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
.unusual
  margin 0 10px
  color #f86442
  float left
  font-size 0.9em
.recommend
  margin 0 10px
  color #666666
  float right
  font-size 0.9em 
</style>
