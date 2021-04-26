import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombresReserva:[]
  },
  mutations: {

    completarLista(state,nuevaReserva){
      state.nombresReserva.push({
        nuevaReserva
    })
    console.log(state.nombresReserva);
    
    },


    borrarReserva(state,index){
      console.log(index)
      state.nombresReserva.splice(index,1);
    },
  },
  actions: {

  },


  modules: {
  }
})
