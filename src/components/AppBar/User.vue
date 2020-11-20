<template>
    <div v-if="user" class="d-f appBar__user">
        <div style="align-items: center;" class="d-f appBar__avatar" >
            <img src="https://i.ibb.co/XsJ7DHf/Pro-Pic.png" alt="">
        </div>
        <div>
            <p>{{user.display_name}}</p>
            <div>
                <p style="font-size:10px; line-height:4px;">{{user.email}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        user(){
            return this.$store.getters.user
        }
    },
 
}
</script>

<style lang="less" scoped>
@import '../../assets/less/smart-grid.less';
@import '../../assets/less/mixins.less';
@import '../../assets/less/setDefaults.less';
.appBar__user{
    align-items: center;
    .col();
    .size(3);
}
.appBar__avatar{
    margin-right: 10px;
}
</style>