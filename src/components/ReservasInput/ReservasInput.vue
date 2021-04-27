<template>
  <div class="Cardreservar">
    <div class="card p-4 text-left shadow-sm p-3 mb-5 bg-white rounded border-top-0">
        <h3 class="title-reservar">RESERVAR</h3>
      <div class="p-2">  
        <form class="needs-validation">
          <div class=" d-flex justify-content-between ">
            <div class="col-4">
              <label for="nombre">Nombre</label>
              <input type="text" class="form-control" v-model="nuevoNombre" id="nombre" :state="valida"  >
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
            </div>
            <div class="col-md-3">
              <label for="fecha">Fecha</label>
              <input type="date" class="form-control" placeholder="30/9/2019" id="fecha" v-model="fechaReserva">
            </div>
            <div class="col-md-2">
              <label for="desde" >Desde</label>
              <input type="time" class="form-control" placeholder="12:00" id="desde" v-model="desdeReserva">
            </div>
            <div class="col-md-2">
              <label for="hasta">Hasta</label>
              <input type="time" class="form-control" placeholder="13:00" id="hasta" v-model="hastaReserva">
            </div>
            <div class=" my-class-form-control-group ">
              <button :disabled="!valida" 
                type="button" 
                class="btn btn-success" 
                @click="guardarReserva();limpiarcampo()" 
                data-toggle="tooltip" data-placement="top" title="Guardar">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>  
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

  export default {
    name: 'Cardreservar',
    props: {

    },
    data: () => ({
      nuevoNombre:'',
      fechaReserva:'',
      desdeReserva:'',
      hastaReserva:'',
      nombrerere:'',
      nombresReserva:[],

    }),
    methods: {
      ...mapMutations(['completarreser','completarLista']),
      limpiarcampo:function(){
        this.nuevoNombre='',
        this.fechaReserva='',
        this.desdeReserva='',
        this.hastaReserva=''
      },
    guardarReserva:function(){
      this.nombresReserva.push({
        nombre:this.nuevoNombre,
        fecha:this.fechaReserva,
        desde:this.desdeReserva,
        hasta:this.hastaReserva,
      });      
      this.completarLista(this.nombresReserva);
    }
    },
    computed:{
      ...mapState(['nombresReserva']),

      
      valida(){
        if(this.nuevoNombre && this.fechaReserva && this.desdeReserva && this.hastaReserva){
          return true
        }
        else {
          return false
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,
  html,
  input {
    font-family: "Montserrat", sans-serif;
    font-size: 12pt;
  }
  label{
    font-size:11pt;
    vertical-align: middle;
    padding: 0px;
    margin: 0px;
    height: 20px;
    margin-right: 12px;
    color:#a1a1a1;

  }
  .title-reservar{
    font-family: "Montserrat", sans-serif;
    font-size:15pt;
    color: #266854;
    font-weight: bold;



  }   
  button{
        padding-left:20px;
        padding-right:20px;
  }
  

  .my-class-form-control-group{
  display:flex;
  align-items:center;
  padding-top: 23px;
}
.card {
  box-shadow: 0 5px 5px -5px #333 !import;
}

</style>
