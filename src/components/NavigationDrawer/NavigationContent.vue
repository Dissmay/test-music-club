<template>
<div class="navigation__drawer__content">
    <p v-if="title" class="navigation__drawer_title">{{title}}</p>
    <ul class="navigation__drawer_ul list-type-none">
        <li class="navigation__drawer_li" v-for="(l, i) in listLinks" :key="i">
           <img :src="l.img" alt="" class="navigation__drawer_li__img"> <router-link :to="l.to" class="navigation__li_color">{{l.title}}</router-link>
        </li>
    </ul>
</div>
  
</template>

<script>
export default {
    props:['listLinks', 'title']

}
</script>

<style lang="less" scoped>
@import '../../assets/less/smart-grid.less';
@import '../../assets/less/atomic.less';
@import '../../assets/less/mixins.less';
@import '../../assets/less/setDefaults.less';
    .navigation__drawer_title{
        color: #0F1E36;
        margin-bottom: 20px;
    }
    .navigation__drawer_ul{
        margin-bottom: 73px;

    }
    .navigation__drawer_li{
        margin-bottom: 24px;
        color: #878E9A;
        display: flex;
        align-items: center;
        &__img{
            margin-right: 10px;
        }
    }
    .navigation__li_color{
        color: #878E9A;
    }
    .navigation__drawer__content{
        padding-left: 23px;
    }
</style>