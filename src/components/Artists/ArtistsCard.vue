<template>
    <div class="artists__card">
        <div>
            <img class="artists__img" :src="img" alt="">
        </div>
        <p>{{title}}</p>
        <p>{{name}}</p>
    </div>
   
</template>

<script>
export default {
    props:['img', 'name', 'title']

}
</script>

<style lang="less" scoped>
.artists{
    &__card{
    }
    &__img{
        width: 100%;
    }
}
</style>