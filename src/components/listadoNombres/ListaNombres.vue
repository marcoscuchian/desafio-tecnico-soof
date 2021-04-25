<template>
  <div class="ListaNombres">
    <table class="table">
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-right ">Horario <a href="#s"><i class="material-icons arrowButton ">arrow_upward</i></a></th>
          <th class="text-right accionList">Acción  </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="text-left">1gsghddhgdfthh</th>
          <td class="text-right horarioList">de 9:30 a 10:30</td>
          <td class="text-right"><a href="#"><i class="material-icons deleteButton">delete</i></a></td>
        </tr>
        <span class="material-icons-outlined">
  </span>
        <tr>
          <th class="text-left">fthsfhtfthhh2</th>
          <td class="text-right horarioList">de 9:30 a 10:30</td>
          <td class="text-right"><i class="material-icons deleteButton">delete</i></td>
        </tr>
        <tr>
          <th class="text-left">fhfhthrtht3</th>
          <td class="text-right horarioList">de 9:30 a 10:30</td>
          <td class="text-right"><i class="material-icons deleteButton">delete</i></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'ListaNombres',
  props: {
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
