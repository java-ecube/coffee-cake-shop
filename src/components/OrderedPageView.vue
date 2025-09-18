<template>
  <v-card 
    class="mx-auto"
    max-width="80%"
    hover
  >
    <v-card-item >
      <v-card-title>
        {{item.title}}
      </v-card-title>

      <v-card-subtitle>
      {{ item.price }}  &nbsp;&nbsp; <span v-if="item.dis" style="color: brown;"> ({{ item.dis }} % )</span>
      </v-card-subtitle>

     
    </v-card-item>   

    <v-card-actions>
      <div>
        Quanity : <v-btn @click="increaseQty(item)"> + </v-btn> {{ item.qty }} <v-btn @click="decreaseQty(item)" :disabled="item.qty<=0"> - </v-btn>
      </div>
      <div>
        <v-btn @click="removeItem(item)"> Remove </v-btn>
      </div>
      <div>
        <v-btn @click="goToDetails(item)"> details </v-btn>
      </div>

    </v-card-actions>
  </v-card>
</template>

<script>
export default ({
    props:{
        item:{
            type:Object
        }
    },
    methods:{
      increaseQty(item){
        item.qty++
      },
      decreaseQty(item){
        item.qty--
      },
      removeItem(item){
        this.$store.dispatch('ACT_ORDER_REMOVE',item)
      },
      goToDetails(item){
        this.$router.push({
           name: 'details',
           params:{
            coffee: JSON.stringify(item)
           }
        })
      }
    }  
})
</script>