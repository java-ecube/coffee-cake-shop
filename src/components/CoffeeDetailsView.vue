<template>
  <v-card
    class="mx-auto my-12"
    max-width="30%"
  >
    <v-img
    v-if="coffee.img"
      height="100%"
      :src=getURL(coffee.img)
      cover
    ></v-img>

    <v-card-title>
     {{coffee.title}}
    </v-card-title>

    <v-card-subtitle>
    {{coffee.price}}
    </v-card-subtitle>
    <v-card-text>
      <v-rating
            hover
            :length="5"
            :size="32"
            :model-value="coffee.like"
            active-color="primary"
          />
    </v-card-text>

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

<script setup>


  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const show = ref(false)
  const route=useRoute()
  const coffee=ref({})
  const getURL=(path)=>{
    console.log(path)
    return require('@/assets/'+path)    
  }   
  onMounted(()=>{
    console.log("hello world")
        coffee.value=JSON.parse(route.params.coffee)
         })
   
    

 
</script>