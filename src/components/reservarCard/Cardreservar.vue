<template>
  <div class="Cardreservar">
    <div class="card p-4 text-left shadow-sm p-3 mb-5 bg-white rounded border-top-0">
        <h3 class="title-reservar">RESERVAR</h3>

        <div class="d-flex justify-content-between" v-for="i,index in  nombresReserva">
          <h3 class="">{{i.nombre}}</h3>
          <h3 class="">{{i.fecha}}</h3>
          <h3 class="">{{i.desde}}</h3>
          <h3 class="">{{i.hasta}}</h3>
          <h3 class="">{{index}}</h3>
          <button type="button" class="btn btn-success" @click="borrarReserva(index)">xxxx</button>
        </div>
      <div class="p-2">  
        <form>
          <div class=" d-flex justify-content-between ">
            <div class="col-4">
              <label for="nombre" class="pb-0">Nombre</label>
              <input type="text" class="form-control" v-model="nuevoNombre" id="nombre">
            </div>
            <div class="col-md-3">
              <label for="fecha">Fecha</label>
              <input type="text" class="form-control" placeholder="30/9/2019" id="fecha" v-model="fechaReserva">
            </div>
            <div class="col-md-2">
              <label for="desde" >Desde</label>
              <input type="text" class="form-control" placeholder="12:00" id="desde" v-model="desdeReserva">
            </div>
            <div class="col-md-2">
              <label for="hasta">Hasta</label>
              <input type="text" class="form-control" placeholder="13:00" id="hasta" v-model="hastaReserva">
            </div>
            <div class=" my-class-form-control-group ">
              <button type="button" class="btn btn-success" @click="guardarReserva">Guardar</button>
            </div>
          </div>
        </form>
      </div>  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cardreservar',
    props: {

    },
    data: () => ({
      nombresReserva:[],
      nuevoNombre:'',
      fechaReserva:'',
      desdeReserva:'',
      hastaReserva:'',

    }),
    methods: {
      guardarReserva: function(){
        this.nombresReserva.push({
          nombre:this.nuevoNombre,
          fecha:this.fechaReserva,
          desde:this.desdeReserva,
          hasta:this.hastaReserva,
        });
        this.nuevoNombre= '';
        this.fechaReserva='';
        this.desdeReserva='';
        this.hastaReserva='';
      },
      borrarReserva: function(index){
        console.log(index)
        this.nombresReserva.splice(index,1);
      },
    },
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
        background: #42a98f;
        padding-left:20px;
        padding-right:20px;
  }
  placeholder{
    color:red;
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
