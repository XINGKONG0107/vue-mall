<template>
  <div class="home">
    <nav-bar>
      <div slot="center">
        购物街
      </div>
    </nav-bar>

    <home-swiper :banner="banner"></home-swiper>
    <recommend :recommendData="recommendData"></recommend>

  </div>

</template>

<script>
//引入头部导航栏
import NavBar from 'components/common/navbar/navbar.vue'

//引入轮播图
import homeSwiper from './childComponents/homeSwiper.vue'

//引入推荐部分
import recommend from './childComponents/recommend.vue'

//引入首页轮播图数据请求
import { getHomeUrl } from 'network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    homeSwiper,
    recommend
  },

  data() {
    return {
      banner: null,
      recommendData:null

    }
  },

  created() {
    //请求轮播图数据
    getHomeUrl().then(res => {
      this.banner = res.data.banner.list
      this.recommendData = res.data.recommend.list
      console.log(res.data.recommend.list)
    })
  }
}
</script>

<style>
</style>
    Navbar