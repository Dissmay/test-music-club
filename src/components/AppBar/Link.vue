<template>
  <div class="app__link">
      <router-link :to="link.to" class="d-f"><img  :src="link.img" alt=""></router-link>
  </div>
</template>

<script>
export default {
  props:['link']

}
</script>

<style lang="less" scoped>
@import '../../assets/less/smart-grid.less';
@import '../../assets/less/mixins.less';
@import '../../assets/less/setDefaults.less';
  .app__link{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0 !important;
    padding-right: 10px;
    border-right: 1px solid black;
    .col();
    .size(1);
  }
</style>