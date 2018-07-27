# 使用文档

- 克隆本地: git clone https://github.com/hellolittleBear/xmla.git
- 安装依赖： npm install
- 运行： npm run dev

``` 
如果遇到任何问题，请私信[segmentfault](https://segmentfault.com/u/spike_5aae27dfc9a8f) 、   
[掘金](https://juejin.im/user/5ae120906fb9a07abd0d578a)
如果是妹纸：加个QQ:1748416084

```


# 开发文档

### 1. 页面结构

##### 首要页面
- 首页：典型的顶部、底部固定、中间内容区滚动、滑动、动态路由加载页面，
    - 分类页面 100%
    - 推荐页面 100%
    - 会员页面 90%
    - 直播页面 0%
    - 广播页面 0%
- 我听：0%
- 发现：0%
- 我的：30%

##### 组件

- bscrollX.vue 横向滚动列表组件
- crown.vue  精品付费图标
- cutLine.vue 间隔组件，用于分割组件
- flexLists.vue 横向swiper列表组件
- headerNav.vue 顶部输入、登录、扫码组件
- headerTop.vue 顶部分类swiper滑动组件
- ImageWrap.vue 图片组件、组合其他组件
- lazyRadio.vue 懒人电台组件
- listsDown.vue 纵向列表组件显示列表信息
- listsWrap.vue 横向图片列表组件
- loadingFoot.vue 底部拉取加载更多组件
- memberLists.vue 组合listsDon和swiper组件
- recommendAd.vue 广告组件-用于插入列表之间的广告组件
- swiperAD.vue 轮播图组件
- swiperPage.vue home主页的swiper横向滑动切换页面组件
- updateList.vue 更新（换一批）组件


#### 数据流通：
- axios数据获取


w