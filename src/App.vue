<template>
  <v-app>
    <v-app-bar color="brown">
      Coffee Shop
      <v-spacer></v-spacer>
      <v-badge location="top right" color="secondary" @click="goOrderedPage()" :content="GET_ORDER_COFFEE_SIZE">
        <v-icon icon="mdi-cart"></v-icon>
      </v-badge>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </v-app-bar>
    <NavigationDrawerView/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawerView from '@/components/NavigationDrawerView.vue';
import { mapGetters } from 'vuex';
export default {

  name: 'App',
    components: {
    NavigationDrawerView
  
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapGetters(['GET_ORDER_COFFEE_SIZE'])
  },
  methods:{
    goOrderedPage(){
      this.$router.push("/order")
    }
  }
}
</script>
