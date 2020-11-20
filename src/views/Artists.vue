<template>
<div v-if="artists" class="wrapper ">
    <div class=" row">
        <artists-card 
        class="cardItem" 
        v-for=" (a, i) in artists.items" 
        :key="i" 
        :img="a.images.length > 0 ? a.images[0].url : null " 
        :name="a.name" 
        :title="a.genres[0]"
        />
    </div>
</div>
<div v-else>
    <!-- проверка на то, есть ли таблица. Можно так же воспользоваться store shared и пользоваться парамтером loading, чтобы определять
    произошла ли загрузка -->
        ВВЕДИТЕ ИМЯ АРТИСТА
</div>
</template>

<script>
import ArtistsCard from '../components/Artists/ArtistsCard.vue'
export default {
components: { ArtistsCard },
computed:{
    artists(){
        return this.$store.getters.artists
    }
}
}
</script>

<style lang="less">
@import '../assets/less/smart-grid.less';
@import '../assets/less/mixins.less';
@import '../assets/less/setDefaults.less';
@import '../assets/less/global.less';
.card{
display: flex;
flex-wrap: wrap;
}
.cardItem{
.col();
.size(3);
padding:20px;
}
</style>