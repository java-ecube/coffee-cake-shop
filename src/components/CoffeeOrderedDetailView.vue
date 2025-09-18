<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                 <v-row>
                    <v-col cols="12" v-for="order_coffee in GET_ORDER_COFFEE" :key="order_coffee.title">
                        <OrderedPageView :item="order_coffee"></OrderedPageView>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4">
                <TotalChargesView/>
            </v-col>
        </v-row>
      
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
import OrderedPageView from './OrderedPageView.vue';
import TotalChargesView from './TotalChargesView.vue';

export default ({
    components:{OrderedPageView, TotalChargesView},

    methods:{
    },
    computed:{
        ...mapGetters(['GET_ORDER_COFFEE'])
    }
   
})
</script>
