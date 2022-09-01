<template>
<div class="tabbar-item" @click="itemclick()">
<slot v-if="!isActive" name="item-img"></slot>
<slot v-else name="item-img-active"></slot>
<div :style="activestyle"><slot name="item-name"></slot></div>
 
</div>
</template>

<script>
export default {
  name:"TabbarItem",
  props:{
    path:String,
    activecolor:{
      type:String,
      default:'#60B7E4'
    }
  },
    data(){
    return{
      // isActive:true
    }
  },
  computed:{
    //判断哪个组件被选中
    isActive() {
      return this.$route.path.indexOf(this.path)!==-1
    },
    //接收文字颜色数据
    activestyle() {
      return this.isActive?{color:this.activecolor}:{}
    }
  },
  methods:{
    itemclick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style >
 .tabbar-item{
  flex: 1;
  text-align: center;
  align-items: center;
  height: 49px;
}

 .tabbar-item img{
  width: 24px;
  height: 24px;
  /* 图片下面会有三个像素的空间，与文字会有间隔，去除三个像素空间 */
  vertical-align: middle;  
}

</style>