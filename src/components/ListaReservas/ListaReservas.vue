<template>
  <div>
  <div>
    <h1 class="agenda text-left">Agenda de Reservas</h1>
  </div>  
    <table class="table">
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-right ">Horario 
            <a href="!#" @click="ordenarMenorMayor()" v-if="seleccionado">
              <i class="material-icons arrowButton" @click="seleccionado = !seleccionado"  data-toggle="tooltip" data-placement="top" title="Ordemar de mayor a menor">arrow_downward</i>
            </a>
            <a href="!#" @click="ordenarMayorMenor()" v-if="!seleccionado">
              <i class="material-icons arrowButton"data-toggle="tooltip" data-placement="top" title="Ordemar de menor a mayor" @click="seleccionado = !seleccionado">arrow_upward</i>
            </a>
          </th>
          <th class="text-right accionList">Acción  </th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="i,index in titledef.nuevaReserva">
            <th class="text-left">{{i.nombre}}</th>
            <td class="text-right horarioList">de {{i.desde}} a {{i.hasta}} </td>
            <td class="text-right">
            <a href="!#" @click="borrarReserva(index)"><i class="material-icons deleteButton">delete</i></a></td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'ListaReservas',
  props: {
  },
  data: () => ({
    seleccionado: false,
  }),
  computed:{
    ...mapState(['nombresReserva']),
    titledef:function(){
        var arrayReserva = [];
      for(var i = 0; i < this.nombresReserva.length; i++){
          arrayReserva.push(this.nombresReserva[i]);
      }
      var arrayReserva = arrayReserva[0];

      return  arrayReserva;

    },

  },
  methods:{
    ...mapMutations(['borrarReserva','ordenarMenorMayor','ordenarMayorMenor']),


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .deleteButton{
    color:#cccccc;
  }
  .arrowButton{
    color:#cccccc;
    font-size: 17px;
  }
  thead , .horarioList{
    color:#a1a1a1;
  }
  .agenda{
    color: #a1a1a1;
    font-size: 18px;
  }
  thead{
    border-top: hidden;
  }
  .accionList{
    width: 120px;
  }
</style>
