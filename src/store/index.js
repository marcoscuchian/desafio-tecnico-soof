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
    console.log("las reservas",state.nombresReserva[0].nuevaReserva);
    
    },

    borrarReserva(state,index){
      state.nombresReserva[0].nuevaReserva.splice(index,1);
    },

    ordenarReservas(state){
      var reservas = state.nombresReserva[0].nuevaReserva;
      console.log("antes",reservas)
      reservas.sort(function (a, b) {
        if (a.desde > b.desde) {
          return 1;
        }
        if (a.desde < b.desde) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      console.log(reservas)

    }
  },
  actions: {

  },


  modules: {
  }
})
