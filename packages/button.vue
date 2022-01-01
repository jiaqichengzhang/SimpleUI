<template>
  <button class="sm-buttom" :class="[`sm-buttom-${type}`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
<style type="text/scss" lang="scss" scoped>
  @import "./theme/style/common/var";
  .sm-buttom{
    display: inline-block;
    padding: 10px 30px;
    border: 1px solid #999999;
    border-radius: 8px;
    margin: 0 10px;
    &.sm-buttom-primary{
      color: #ffffff;
      background:$--color-primary ;
      border-color: $--color-primary;
    }
    &.sm-buttom-success{
      color: #ffffff;
      background:$--color-success ;
      border-color: $--color-success
    }
    &.sm-buttom-warning{
      color: #ffffff;
      background:$--color-warning ;
      border-color: $--color-warning;
    }
    &.sm-buttom-danger{
      color: #ffffff;
      background:$--color-danger ;
      border-color: $--color-danger;
    }
    &.sm-buttom-info{
      color: #ffffff;
      background:$--color-info;
      border-color: $--color-info;
    }
  }
</style>
