<template>
<div>
<table v-if="playlists && playlists.items" style="width:100%;padding:20px;">
    <caption>Таблица размеров обуви</caption>
    <tr class="table__playlists table__tr">
    <th>#</th>
    <th>Трек</th>
    <th>Исполнитель</th>
    <th>Проигрываний</th>
    <th>Время</th>
    <th>Опции</th>
    </tr>
    <tr class="table__playlists"  v-for=" (list, i) in playlists.items" :key="i">
    <td class="table__td">{{i +1}}</td>
    <td class="table__td">
        {{list.name}}
    </td>
    <td class="table__td">
        {{list.owner.display_name}}
    </td>
    <td class="table__td">
        {{list.tracks.total}}
    </td>
    <td class="table__td">
        {{list.total}}
    </td>
    <td class="table__td">
        {{list.owner.display_name}}
    </td>
    </tr>
</table>
<div v-else>
    <!-- проверка на то, есть ли таблица. Можно так же воспользоваться store shared и пользоваться парамтером loading, чтобы определять
    произошла ли загрузка -->
    ВВЕДИТЕ НАЗВАНИЕ ПЛЕЙЛИСТА
</div>
</div>
</template>

<script>
export default {
computed:{
    playlists(){
    return this.$store.getters.playlists
    }
},
mounted(){
    console.log(
        encodeURIComponent('tania bowra')
    );
}
}
</script>

<style lang="less" >
table {
font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;
}
td, th {
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}
</style>