<template>
  
  <section class="src-components-nav-bar">

  

      <nav class="navbar navbar-dark bg-dark">

        <a class="navbar-brand" href="#">Parcial NT2</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link to="/notas">
              <li class="nav-item ">
                <a class="nav-link" href="#">Notas <span class="sr-only">(current)</span></a>
              </li>
            </router-link>
            <router-link to="/choice">
              <li class="nav-item ">
                <a class="nav-link" href="#">Multiple Choice</a>
              </li>
            </router-link>
          </ul>
        </div>

      </nav>

  
  </section>
  

</template>

<script>

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

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
