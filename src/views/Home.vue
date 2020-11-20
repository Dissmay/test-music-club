<template>
  <div class="home">
   <Table></Table>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Playlist/Table'
export default {
  name: 'Home',
  components: {
    Table
  },
  methods:{
  
  },
  mounted(){
      if(this.$route.query['code']){
        this.$store.dispatch('getToken')
        .then(()=>{
          this.$router.replace({'query': null});
        })
      }
        

    
   
  }
}
</script>
