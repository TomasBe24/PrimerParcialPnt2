<template>

  <section class="src-components-multi-choice">
    <div class="jumbotron">
      <h1>Multiple Choice:</h1>

       <table class="table table-dark">

      <tr>
        <th>Numero de Pregunta</th>
        <th>Respuesta</th>
      </tr>
      <tr v-for="(respuesta, index) in respuestas" :key="index">
        <td>{{ respuesta.numero }}</td>
        <td>{{ respuesta.respuestas  }}</td>
      </tr>

    </table>


    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-multi-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
          {numero: 1, respuestas: ['c'] },
          {numero: 2, respuestas: ['c'] },
          {numero: 3, respuestas: ['b'] }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  
</style>
