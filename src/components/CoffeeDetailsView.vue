<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="200px"
      :src=getURL(coffee.img)
      cover
    ></v-img>

    <v-card-title>
      {{ coffee.title }}
    </v-card-title>

    <v-card-subtitle>
      {{coffee.price}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Explore"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ coffee.des }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script >

  export default({
     data: () => ({
        coffee:{}
    }),
    created(){
        this.coffee=JSON.parse(this.$route.params.coffee)
    },
    methods:{
      getURL(path){
         return require('@/assets/'+path)        
      }
    }
    

  })
</script>