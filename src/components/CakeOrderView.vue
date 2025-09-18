<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4" v v-for="cc in cakes" :key="cc.id">
       <OrderDetailsPageView :item="cc">
        <template #price>
          <div style="color: lightsalmon; font-size: 200%; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">{{ cc.price }} MMK</div>
        </template>
        </OrderDetailsPageView>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OrderDetailsPageView from './OrderDetailsPageView.vue';

export default {
  name: 'HelloWorld',
  components:{OrderDetailsPageView},

  data: () => ({
    cakes: [
      {
        id: 1,
        title: 'Red Velvet Strawberry Cheesecake',
        img:'cake1.jpg',
        price:5000
      },
      {
        id: 2,
        title: ' Velvet Chotoloate Cheesecake',
        img:'cake2.jpg',
        price:6000
      },
      {
        id: 3,
        title: 'Magdolna Farkas',
        img:'cake3.jpg',
        price:6000     
       },
   
      
    ],
  }),
}
</script>
