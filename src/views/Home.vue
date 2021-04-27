<template>
  <div class="container">
    <ReservasInput/>
    <ListaReservas/>

    
  </div>
</template>

<script>
// @ is an alias to /src
import ReservasInput from '@/components/ReservasInput/ReservasInput.vue'
import ListaReservas from '@/components/ListaReservas/ListaReservas.vue'
export default {
  name: 'Home',
  components: {
    ReservasInput,
    ListaReservas
  }
}
</script>
