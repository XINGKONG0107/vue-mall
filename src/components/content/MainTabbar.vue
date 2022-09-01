<template>
    <!-- tabbar大组件 -->
    <tab-bar>
      <!-- 通过path向tabbarItem传递数据，确认跳转路径 ,cativecolor传递文字颜色-->
      <!-- tababritem小组件 -->
      <tabbar-item path="/home" activecolor="#60B7E4">
        <img src="~assets/img/tabbar/_ic_tabbar_home.png" slot="item-img" />
        <img src="~assets/img/tabbar/_ic_tabbar_home (1).png" slot="item-img-active" />
        <div slot="item-name">首页</div>
      </tabbar-item>

      <tabbar-item path="/category" activecolor="#60B7E4">
        <img src="~assets/img/tabbar/tabbar-icon-chanpin-default.png" slot="item-img" />
        <img src="~assets/img/tabbar/tabbar-icon-chanpin-default (1).png" slot="item-img-active" />
        <div slot="item-name">分类</div>
      </tabbar-item>

      <tabbar-item path="/cart" activecolor="#60B7E4">
        <img src="~assets/img/tabbar/icon_tabbar_shoppingup.png" slot="item-img" />
        <img src="~assets/img/tabbar/icon_tabbar_shoppingup (1).png" slot="item-img-active" />
        <div slot="item-name">购物车</div>
      </tabbar-item>

      <tabbar-item path="/my" activecolor="#60B7E4">
        <img src="~assets/img/tabbar/icon_tabbar_myup.png" slot="item-img" />
        <img src="~assets/img/tabbar/icon_tabbar_myup (1).png" slot="item-img-active" />
        <div slot="item-name">我的</div></tabbar-item
      >
    </tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/tabbar.vue'
import TabbarItem from '../common/tabbar/tabbarItem.vue'
export default {
  name:'MainTabbar',
  components:{
    TabBar,
    TabbarItem
  }
}
</script>