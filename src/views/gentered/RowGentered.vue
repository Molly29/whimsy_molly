<template>
  <div class="container1">
    <div class="item1">居中</div>
  </div>
  <div>
    <p>display：flex布局</p>
    <div class="container1-1">
      <div class="item1">居中</div>
    </div>
    <p>display：grid布局</p>
    <div class="container1-2">
      <div class="item1">居中</div>
    </div>
    <p>margin:0 auto 布局</p>
    <div class="container1-3">
      <div class="item1-3">居中</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div + div {
  margin-bottom: 10px;
}
.container1 {
  height: 80px;
  width: 100px;
  background-color: orange;
  margin-bottom: 10px;
  .item1 {
    background-color: aqua;
  }
}
.container1-1 {
  @extend .container1;
  display: flex;
  justify-content: center;
}
.container1-2 {
  @extend .container1;
  display: grid;
  justify-content: center;
}
.container1-3 {
  @extend .container1;
  .item1-3 {
    //已经居中但是由于占满一行所以看不出来居中，可以设置一个宽度达到效果;或者text-align:center；
    margin: 0 auto;
    text-align: center;
    background-color: aqua;
  }
}
</style>
