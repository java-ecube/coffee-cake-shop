<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4" v v-for="cc in types" :key="cc.id">
       <OrderDetailsPageView :item="cc"
       @event-like-item="IncLikeCount"
       @event-order-item="OrderItem">
        <template #price>
           <div style="color: brown; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">{{ cc.price }} MMK</div>
        </template>
        </OrderDetailsPageView>
      </v-col>
    </v-row>


    <v-row >
      <v-col cols="12"><v-btn width="100%" height="200%" color="brown" @click="goOrderedPage()">Order Now!!!</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
import OrderDetailsPageView from './OrderDetailsPageView.vue';

export default {
  name: 'HelloWorld',
  components:{OrderDetailsPageView},

  data: () => ({
    types: [
      {
        id: 1,
        title: 'Caramel White Mocha Iced Coffee',
        img:'one.jpg',
        des: 'Treat yourself to a refreshing twist on your coffee routine with this Caramel White Mocha Iced Coffee! Creamy white chocolate meets rich espresso, finished with a swirl of buttery caramel—perfect for hot days or any time you need a little sweet pick-me-up. Whether you\'re a DIY coffee lover or just craving café vibes at home, this iced drink is sure to become your new favorite.',
        price:6500,
        dis:6,
        like:0,
        ordered:false
      },
      {
        id: 2,
        title: 'Ultimate Chocolate Overload Freakshake',
        img:'two.jpg',
        des:'This one\'s for the real chocolate lovers! A thick, creamy chocolate shake loaded with cookies, ice cream, chocolate drizzle, and crunchy toppings. If you’re craving something over-the-top and Instagram-worthy, this freakshake will hit the spot!',
        price:7500,
        like:0,
        ordered:false

      },
      {
        id: 3,
        title: 'Milkshake',
        img:'three.jpg',
        des:'From Blackout Chocolate to DIY shake kits, these milkshake secrets will blow your taste buds away! Ready to find out why the Milkshake Factory is the go-to spot?',
        price:8500,
        dic:5,
         like:0,
        ordered:false

      },
   
      {
       id: 4,
        title: 'Lotus Biscoff Latte Recipe',
        img:'four.jpg',
        des:'Learn how to make a very delicious latte drink with unexpected ingredients - Lotus Biscoff cookies and cookie butter spread!',
        price:9000,
         like:0,
        ordered:false
      },
      {
       id: 5,
        title: 'Steaming Coffee Love',
        img:'five.jpg',
        des:'Rich coffee meets velvety milk in a beautifully crafted latte, expertly poured by a skilled barista',
        price:3000,
        dis:3, 
        like:0,
        ordered:false
      },
      {
        id: 6,
        title: 'Americano',
        img:'six.jpg',
        des: 'Need a simple, energizing and refreshing drink? The Iced Americano is a refreshing, bold and tasty coffee drink! A tall, cold homemade iced americano may just be one of the best drinks of summer. It is a great replacement for iced coffee and can actually be made faster than an iced coffee. Here\'s what it is and a recipe for how to make it at home.',
        price:8000,
        like:0,
        ordered:false
      },      
    ],
  }),
  methods:{
    IncLikeCount(item){
      item.like++;
    },
    OrderItem(item){
      console.log("ordered item", item)
      item.ordered=!item.ordered
      this.$store.dispatch('ACT_ORDER_COFFEE',item)//action
    },
    goOrderedPage(){
      this.$router.push('/order')
    }
  }
}
</script>
