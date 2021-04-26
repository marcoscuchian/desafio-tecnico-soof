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

    ordenarMenorMayor(state){
      var reservas = state.nombresReserva[0].nuevaReserva;
      var reservasDef = reservas.sort(function (a, b) {
        if (a.desde > b.desde) {
          return 1;
        }
        if (a.desde < b.desde) {
          return -1;
        }
        return 0;
      });
      
      reservasDef.sort(function (a, b) {
        if (a.fecha > b.fecha) {
          return 1;
        }
        if (a.fecha < b.fecha) {
          return -1;
        }
        return 0;
      });
    },
    ordenarMayorMenor(state){
      var reservas = state.nombresReserva[0].nuevaReserva;
      var reservasDef = reservas.sort(function (a, b) {
        if (a.desde < b.desde) {
          return 1;
        }
        if (a.desde > b.desde) {
          return -1;
        }
        return 0;
      });
      
      reservasDef.sort(function (a, b) {
        if (a.fecha < b.fecha) {
          return 1;
        }
        if (a.fecha > b.fecha) {
          return -1;
        }
        return 0;
      });
    }
  },
  actions: {

  },


  modules: {
  }
})
