<template>
    <v-container>          
            <v-table height="300px" striped="odd" style="color: brown; ">                
                <tbody>
                    <tr v-for="item in GET_ORDER_COFFEE" :key="item.title">
                        <td width="50%">{{ item.title }}</td>
                        <td width="150%" v-if="!item.dis">{{ item.price }} x {{ item.qty }} = {{ ( item.price*item.qty) }}</td>
                        <td width="150%" v-else>{{ item.price }} ({{ item.dis }}%) x {{ item.qty }} = {{ ( (item.price)-(item.price*item.dis)/100 )*item.qty }}</td>
                        
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td> </td>
                    </tr>
                   
                </tbody>
            </v-table>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default ({
    setup() {
        
        //  const calculateTotalMethod = () => {
        //             return GET_ORDER_COFFEE.reduce((total, item) => {
        //                 return total + (item.price * item.qty);
        //             }, 0);
        //         };
        
    },
    data: () => ({
        total:0
    }),
    computed:{
        ...mapGetters(['GET_ORDER_COFFEE','GET_TOTAL_PRICE']),     
        
    //     calculateTotal(){
    //         for(const item of this.GET_ORDER_COFFEE){
    //            this.total +=item.price
    //         }
    //       return this.total;

    //     }
    }
   
})
</script>
