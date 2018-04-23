<template>
	<h2>Esto es la pagina de {{texto}}: {{id_restaurantes}}</h2>	
</template>


<script>
export default {
  name: 'restaurantes-top',
  mounted(){
  	this.id_restaurantes = this.$route.params.id;
  },
  data () {
    return {
      texto: 'Restaurante destacado',
      id_restaurantes: null
    }
  }
}
</script>