<template>
    <div class="app__bar row">
        <app-search/>
        <Link :link="{to:'/', img:'https://i.ibb.co/cyq1Tym/TV.png'}"/>
        <Link :link="{to:'/', img:'https://i.ibb.co/cyq1Tym/TV.png'}"/>
        <Link :link="{to:'/', img:'https://i.ibb.co/cyq1Tym/TV.png'}"/>
        <user/>
    </div>
</template>

<script>
import AppSearch from './Search.vue'
import Link from './Link.vue'
import User from './User.vue'

export default {
  components: { AppSearch, Link, User },

}
</script>

<style lang="less" >
@import '../../assets/less/smart-grid.less';
@import '../../assets/less/mixins.less';
@import '../../assets/less/setDefaults.less';
    .app__bar{
        height: 67px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        border-bottom: 1px solid black;
        align-items: center;
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
</style>