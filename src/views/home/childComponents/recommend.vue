<template>
  <div class="recommend">
    <div v-for="(item,index) in recommendData" :key="index" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'recommend',
  props: {
    recommendData: {
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  padding: 14px 0 20px;
  border-bottom: 5px solid #eee;
}
.recommendItem {
  flex: 1;
  font-size: 13px;
}
.recommendItem img{
height: 85px;
margin-bottom: 3px;
}
</style>