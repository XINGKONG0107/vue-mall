<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: rgba(42, 149, 236, 0.877);
  text-align: center;
}
.left .right{
  width: 60px;
}
.center {
  flex: 1;
  color: white;
}

</style>