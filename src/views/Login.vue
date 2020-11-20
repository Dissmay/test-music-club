<template>
    <div class="about">
        <!-- для быстроты, стили записал в тег style -->
        <button @click="getLogin" style="z-index:100; position:absolute; left:300px; top:300px;">LOGIN</button>
    </div>
</template>

<script>
export default {
methods:{
    getLogin(){
    this.$store.dispatch('loginUser')
},
}
}
</script>