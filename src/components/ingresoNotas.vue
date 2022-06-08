<template >

  <section class="src-components-ingreso-notas">

    <div class="jumbotron">

      <h1>Ingreso de notas:</h1>

      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">

          <label for="nombre">Nombre:</label>
          <input 
          type="text"
          id="nombre"
          name="nombre"
          required
          class="form-control"
          autocomplete="off"
          v-model="formData.nombre"
          :minlength="textMin"
          :maxlength="textMax"
          no-espacios
          >

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Debe introducir {{textMin}} caracteres minimo.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Los espacios no son caracteres validos.
            </div>
          </field-messages>

        </validate>
        <br>
        <validate tag="div">

          <label for="apellido">Apellido:</label>
          <input 
          type="text"
          id="apellido"
          name="apellido"
          required
          class="form-control"
          autocomplete="off"
          v-model="formData.apellido"
          :minlength="textMin"
          :maxlength="textMax"
          no-espacios
          >

          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Debe introducir {{textMin}} caracteres minimo.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Los espacios no son caracteres validos.
            </div>
          </field-messages>

        </validate>
        <br>
        <validate tag="div">

          <label for="nota">Nota:</label>
          <input 
          type="number"
          id="nota"
          name="nota"
          required
          class="form-control"
          autocomplete="off"
          v-model="formData.nota"
          min="0"
          max="10"
          
          >

          <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido.
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota minima es {{notaMin}}
            </div>
            <div slot="max" class="alert alert-danger mt-1">
               La nota maxima es {{notaMax}}
            </div>
          </field-messages>

        </validate>
        <br>
        <button class="btn btn-warning" :disabled="formState.$invalid">
          Enviar
        </button>

      </vue-form>

      <hr>

      <div v-if="notas.length" class="table-responsive">
        <table class="table table-dark">
          <tr :style="{'color': 'lightGrey'}">
            <th>Alumno</th>
            <th>Nota</th>
          </tr>
          <tr v-for="(nota,index) in notas" :key="index">
            <td>{{ nota.alumno }}</td>
            <td :style="{color: definircolor(nota.nota) }">
              {{ nota.nota }}
            </td>
          </tr>

          <tr :style="{color: definircolor(getPromedio()) }">
            <td>Promedio Notas:</td>
            <td> {{ getPromedio()}} </td>
          </tr>
        </table>
      </div>
      <div v-else class="alert alert-info">No se ingresaron notas</div>


    </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-ingreso-notas',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        notas : [],
        textMin: 3,
        textMax: 15,
        notaMin: 0,
        notaMax: 10
        
      }
    },
    methods: {
      enviar(){
         this.notas.push({
          alumno: this.getNombreCompleto(this.formData.nombre,this.formData.apellido),
          nota: this.formData.nota
        })
        this.formData = this.getInicialData()
        this.formState._reset() 
      },
      getInicialData(){
        return{
          nombre: '',
          apellido: '',
          nota: ''
        }
      },
      getNombreCompleto(nombre, apellido){
        return nombre + " " + apellido
      },
      definircolor(nota){
        let color = "red"
        if(nota > 3){
          if(nota > 6){
            color = "green"
          }else{
            color = "yellow"
          }
        }
        return color
      },
      getPromedio(){
        let tot = 0,
        length = this.notas.length
        this.notas.forEach(nota => {
          tot += nota.nota;
          
        });
        return (tot/length);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
 
</style>
