<template>
  <div class="container">
    <Cardreservar/>
    <timeline v-bind:items="items" v-bind:groups="groups">kjguhlig</timeline>
    <br>
    <br>
    <br>
    <ListaNombres/>

    
  </div>
</template>

<script>
// @ is an alias to /src
import timeline from '@/components/Timeline/timeline.vue'
import Cardreservar from '@/components/reservarCard/Cardreservar.vue'
import ListaNombres from '@/components/listadoNombres/ListaNombres.vue'
export default {
  name: 'Home',
  components: {
    timeline,
    Cardreservar,
    ListaNombres
  }
}
</script>
