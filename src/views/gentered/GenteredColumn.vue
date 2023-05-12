<template>
  <div class="container1">
    <div class="item1">居中</div>
  </div>
  <div>
    <p>display：table布局</p>
    <div class="container1-1">
      <div class="item1-1">居中</div>
    </div>
  </div>
  <div>
    <p>position</p>
    <div class="container1-2">
      <div class="item1-2">居中</div>
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
  display: table;
  .item1-1 {
    display: table-cell;
    vertical-align: middle;
  }
}
.container1-2 {
  @extend .container1;
  position: relative;
  .item1-2 {
    position: absolute;
    top: 50%;
    //排除自身高度的影响
    transform: translateY(-50%);
  }
}
</style>
