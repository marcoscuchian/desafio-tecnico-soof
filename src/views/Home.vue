<template>
  <div class="container">
    <Cardreservar/>
    <ListaNombres/>

    
  </div>
</template>

<script>
// @ is an alias to /src
import Cardreservar from '@/components/reservarCard/Cardreservar.vue'
import ListaNombres from '@/components/listadoNombres/ListaNombres.vue'
export default {
  name: 'Home',
  components: {
    Cardreservar,
    ListaNombres
  }
}
</script>
