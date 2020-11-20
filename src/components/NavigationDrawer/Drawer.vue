<template>
  <nav class="navigation__drawer">
     <slot></slot>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="less">
    .navigation__drawer{
        position: absolute;
        width: 169px;
        left: 0;
        top: 0;
        bottom: 0;
        border-right: 1px solid rgb(192,192,192, 0.4);
    }
</style>