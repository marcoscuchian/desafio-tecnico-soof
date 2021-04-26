<template>
      <div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-right  ">Horario <a href="!#" @click="ordenarReservas()"><i class="material-icons arrowButton ">arrow_upward</i></a></th>
          <th class="text-right accionList">Acción  </th>
        </tr>
      </thead>
        <tbody>
  
            <tr v-for="i,index in titledef.nuevaReserva">
              <th class="text-left">{{i.nombre}}</th>
              <td class="text-right horarioList">de {{i.desde}} a {{i.hasta}} </td>
              <td class="text-right"><a href="!#" @click="borrarReserva(index)"><i class="material-icons deleteButton">delete</i></a></td>
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
  name: 'ListaNombres',
  props: {
  },
  data: () => ({
  }),
  computed:{
    ...mapState(['nombresReserva']),
    titledef:function(){
        var titles = [];
      for(var i = 0; i < this.nombresReserva.length; i++){
          titles.push(this.nombresReserva[i]);
      }
      var titlecero = titles[0];
      var titledef = titlecero;

      return  titledef;

    },

  },
  methods:{
    ...mapMutations(['borrarReserva','ordenarReservas']),

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
  thead{
    border-top: hidden;
  }
  .accionList{
    width: 120px;
  }
</style>
