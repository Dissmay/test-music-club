<template>
<!-- В данном приложении решил выбрать такую структуру. То есть, бар и навигацию спозиционировать абсолютом.
а по центру контент (роуты) -->
<div id="app">
    <div id="appBar">
        <app-bar></app-bar>
    </div>
    <div id="nav">
        <navigation-drawer>
            <navigation-prepend/>
            <navigation-content :listLinks="links"  />
            <navigation-content :listLinks="links" title="Плейлисты" />
        </navigation-drawer>
    </div>
    <div id="contessnt">
        <router-view/>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import NavigationDrawer from '@/components/NavigationDrawer/Drawer.vue'
import NavigationContent from '@/components/NavigationDrawer/Content.vue'
import NavigationPrepend from '@/components/NavigationDrawer/Prepend.vue'
import AppBar from '@/components/AppBar/AppBar.vue'
export default {
name: 'Home',
components: {
    NavigationDrawer,
    NavigationContent,
    NavigationPrepend,
    AppBar,
},
data:()=>({
    links:[
        {to:'/', title:'HOME', img:'https://i.ibb.co/F0Rn452/Discover.png'},
        {to:'/artists', title:'Artists', img:'https://i.ibb.co/F0Rn452/Discover.png'},
        {to:'tracks', title:'Треки', img:'https://i.ibb.co/F0Rn452/Discover.png'},
    ]
}),
methods:{
},
async mounted(){
    this.$store.dispatch('getAccount')
}
}
</script>

<style lang="less">
#appBar{
    position: absolute;
    top: 0;
    left: 169px;
    right: 0;
}
#contessnt{
    position: absolute;
    top: 69px;
    left: 169px;
    right: 0;
}
</style>
