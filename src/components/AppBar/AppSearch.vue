<template>
  <div class="d-f wrapperAppSearch">
      <div style="margin-right:10px;"><img src="https://i.ibb.co/515dW4R/Serch.png" alt=""></div>
      <input @input="searchMethod" v-model="search" type="text" class="app__search_input" placeholder="Поиск">
  </div>
</template>

<script>
export default {
    data:()=>({
        search:''
    }),
    methods:{
        searchMethod(){
            if(this.$route.name == 'Home'){
                this.$store.dispatch('searchDate', this.search)
            }
            if(this.$route.name == 'Artists'){
                this.$store.dispatch('searchArtist', this.search)
            }
        }
    }
}
</script>

<style lang="less">
@import '../../assets/less/atomic.less';
@import '../../assets/less/smart-grid.less';
@import '../../assets/less/mixins.less';
@import '../../assets/less/setDefaults.less';
    .app__search_input{
        border: none;
        height: 65px;
        width: 100%;
        &:focus{
            outline: none;
            border: none;
        }
    }
    .wrapperAppSearch{
        align-items: center;
        padding-left: 22px;
        .col();
        .size(6);
        border-right: 1px solid grey;
    }
</style>