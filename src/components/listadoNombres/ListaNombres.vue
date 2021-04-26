<template>
  <div class="ListaNombres">
              <div class=" my-class-form-control-group ">
              <button type="button" class="btn btn-success" @click="prueba()" >Guardar</button>
            </div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-right ">Horario <a href="#s"><i class="material-icons arrowButton ">arrow_upward</i></a></th>
          <th class="text-right accionList">Acción  </th>
        </tr>
      </thead>
      <tbody v-for="i,index of nombresReserva" >
      <div v-for="j,index of i"> 
        <tr v-for="g,index of j">
          <th class="text-left">{{j[index].nombre}}</th>
          <td class="text-right horarioList">de {{j[index].desde}} a {{j[index].desde}} </td>
          <td class="text-right"><a href="#" @click="borrarReserva(index)"><i class="material-icons deleteButton">delete</i></a></td>
        </tr>
       </div>  
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
    reservasArray:[]
  }),
  computed:{
    ...mapState(['nombresReserva']),
  },
  methods:{
    ...mapMutations(['borrarReserva']),
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
