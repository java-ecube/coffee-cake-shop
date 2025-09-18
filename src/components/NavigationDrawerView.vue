<template>
<v-navigation-drawer permanent :width="245" class="my-8">
  <v-list-item title="Coffee and Cake" subtitle="Availabe Item"></v-list-item>
  <v-divider></v-divider>
  <v-list-item link @click="goOrderPage('/coffee')" prepend-icon="mdi-coffee" title="Coffee"></v-list-item>
  <v-list-item link @click="goOrderPage('/cake')" prepend-icon="mdi-cake" title="Cake"></v-list-item>
</v-navigation-drawer>
</template>

<script>
export default ({
   data: () => ({

  }),
  methods:{
    goOrderPage(path){
          this.$router.push(path)
    }  
  }
   
})
</script>
