<template>
  <v-card
    class="mx-auto"
    max-width="400"
    
    
  >
     <v-img
      class="align-end text-white"
      height="200"      
      :src="getImgUrl(item.img)"
      cover
    >   
    <v-card-title> {{ item.title }}</v-card-title>
    </v-img>   
    <v-card-text>
      <slot name="price"></slot>
      <div v-if="item.dis">{{ item.dis }} %</div>
      <div>{{ item.des }}</div>
    </v-card-text>
  
    

    <v-card-actions>
      <v-btn color="orange" prepend-icon="mdi-thumb-up" @click="likeItem(item)" >{{ item.like }}</v-btn>
      <v-btn color="orange" prepend-icon="mdi-coffee-to-go" @click="orderItem(item)" :disabled="item.ordered"></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'DetailsCoffeePageView',
  props:{
    item:{
        type:Object
    }
  },
  data: () => ({
    
  }),
  methods:{
    getImgUrl(imgName) {
      return require(`@/assets/${imgName}`);
    },
    likeItem(item){
      this.$emit('event-like-item',item)     
    },
    orderItem(item){
      this.$emit("event-order-item",item)
    }
  }
}
</script>