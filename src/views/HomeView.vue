<template>
  <v-container>
    <v-row>
      <v-col cols="12" >
        <div style="color: brown; 
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
        font-size: 200%; 
        text-align: center;">
        Enjoy the deciluous taste of Cafe and Cake
        </div>
        </v-col>
    </v-row>

    <v-row class="my-12">
      <v-col cols="12" >
          <v-carousel >
            <v-carousel-item v-for="n in item" :key="n"
              :src=getImg(n)
              cover
            ></v-carousel-item>  
      </v-carousel>
      </v-col>
    </v-row>
  </v-container> 

  
</template>
<script>
  export default {
    name: 'HomeView',
    data: () => ({
      length: 3,
      window: 0,
      item:['one.jpg','cake1.jpg','two.jpg','cake2.jpg','three.jpg','cake3.jpg']
    }),
    methods:{
      getImg(n){
        return require('@/assets/'+n)
      }
    }
  }
</script>


