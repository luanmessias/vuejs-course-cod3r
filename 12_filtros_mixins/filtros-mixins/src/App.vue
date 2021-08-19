<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>

		<fieldset>
			<legend>Exemplo de filtro local e filtro global</legend>
			<p>
				{{ cpf | localFilter_cpf | globalFilter_inverter }}
			</p>
		</fieldset>
		<br><br>
		<fieldset>
			<legend>Exemplo de filtro com bind no campo de texto</legend>
			<input type="text" :value="cpf | localFilter_cpf">
		</fieldset>
		<br><br>
		<fieldset>
			<legend>Exemplo de mixin usando component Frutas</legend>
			<frutas />
		</fieldset>
		<br><br>
		<fieldset>
			<legend>Mixin de usuario logado</legend>
			<p>{{ usuarioLogado }}</p>
		</fieldset>
			<br><br>
		<fieldset>
			<legend>Mixin global criado no main.js</legend>
			<p>{{ mixinGlobal }}</p>
		</fieldset>
	
	</div>
</template>

<script>
import FrutasMixin from './FrutasMixin'
import UserMixin from './userMixin'
import Frutas from './Frutas.vue'

export default {
  components: { Frutas },
  mixins: [FrutasMixin, UserMixin],
  filters: {
    localFilter_cpf(valor) {
      const arr = valor.split('')
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    },
  },
  data() {
    return {
      cpf: '60050042106',
    }
  },
  created() {
    console.log('Created - App.vue!')
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

input {
  font-size: 1.5rem;
}

legend {
  font-size: 1.3rem;
}
</style>
