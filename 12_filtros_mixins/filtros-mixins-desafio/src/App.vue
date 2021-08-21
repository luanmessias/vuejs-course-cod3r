<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->

		<fieldset>
			<legend>Filtro local que troca espaços por vírgula</legend>
			<p>
				{{ sentense | changeSpaceToComma  }}
			</p>
		</fieldset>

		<fieldset>
			<legend>[COMPUED] - Filtro local que troca espaços por vírgula</legend>
			<p>
				{{ changeSpaceToCommaComputed }}
			</p>
		</fieldset>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<fieldset>
			<legend>Conta o tamanho de cada palavra e adiciona o 
			valor na string final</legend>
			<p>
				{{ sentense | countWordSize  }}
			</p>
		</fieldset>
		<fieldset>
			<legend>[COMPUED] - Conta o tamanho de cada palavra e adiciona o 
			valor na string final</legend>
			<p>
				{{ countWordSizeComputed  }}
			</p>
		</fieldset>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import AppMixin from './AppMixin'

export default {
  mixins: [AppMixin],
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
