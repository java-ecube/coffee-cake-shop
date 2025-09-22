import { createStore } from 'vuex'

export default createStore({
  state: {
    orderedcoffee:[],
    total:0
    
  },
  getters: {
    GET_ORDER_COFFEE(state){     
      return state.orderedcoffee
    },
    GET_ORDER_COFFEE_SIZE(state){
      return state.orderedcoffee.length
    },
    GET_TOTAL_PRICE(state){
      state.total=  state.orderedcoffee.reduce((total, item)=> total+=item.qty*item.price)
      console.log(state.total)
      return state.total
    }
  },
  mutations: {
    ORDER_COFFEE(state,item){
      console.log("Before ", item)
      state.orderedcoffee.push({...item, qty:1})
      console.log("After " , state.orderedcoffee[state.orderedcoffee.length-1])
    },
    ORDER_REMOVE(state, item){
       state.orderedcoffee= state.orderedcoffee.filter(ordered => ordered.title !=item.title)
    }
  },
  actions: {
    ACT_ORDER_COFFEE({commit},item){
      commit('ORDER_COFFEE',item)
    },
    ACT_ORDER_REMOVE({commit}, item){
      commit('ORDER_REMOVE', item)
    }
  },
  modules: {
  }
})
