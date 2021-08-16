<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-quando:click="acao">Executar</button>
		<h3 v-quando:mouseenter="mouseEnter"> Mouse enter </h3>
		<h3 v-quando:mouseleave="mouseLeave"> Mouse leave </h3>

	</div>
</template>

<script>
export default {
  directives: {
    quando: {
      bind(el, binding) {
        // el.onclick = function() {
        //   binding.value()
        // }

        const tipo = binding.arg
        const fn = binding.value
        el.addEventListener(tipo, fn)
      },
    },
  },
  data() {
    return {
      buttonEvent: '',
    }
  },
  methods: {
    acao() {
      console.log('Button clicked!')
    },
    mouseEnter() {
      console.log('Mouse enter!')
    },
    mouseLeave() {
      console.log('Mouse leave!')
    },
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
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
