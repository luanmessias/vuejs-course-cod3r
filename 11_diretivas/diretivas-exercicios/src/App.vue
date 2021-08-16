<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <h1>Diretivas Personalizadas Global</h1>
    <!-- 
			Anatomia de uma diretiva:
			<div v-nome:argumento.modificador1.modificador2.modificador3="valor" />
		-->
    <p v-destaque="cor">Usandro diretiva personalizada v-destaque padrao</p>
    <p v-destaque:fundo="'lightblue'">
      Usandro diretiva personalizada v-destaque com diretiva fundo
    </p>
    <p v-destaque:fundo.atrasar="'lightblue'">
      Usandro diretiva personalizada v-destaque com modificador de atraso
    </p>
    <hr />
    <h1>Diretivas Personalizadas Local</h1>
    <p v-destaque-local="cor">
      Usandro diretiva personalizada v-destaque padrao
    </p>
    <p v-destaque-local:fundo="'lightblue'">
      Usandro diretiva personalizada v-destaque com diretiva fundo
    </p>
    <p v-destaque-local:fundo.atrasar="'lightblue'">
      Usandro diretiva personalizada v-destaque com modificador de atraso
    </p>
    <p v-destaque-local:fundo.atrasar.alternar="{ cor1: 'lightblue' }">
      Usandro diretiva v-destaque com modificador de atraso e alternancia de cor
    </p>
    <p
      v-destaque-local:fundo.atrasar="{
        cor1: 'black',
        atraso: 5000,
      }"
    >
      Usandro diretiva v-destaque com modificador de atraso e alternancia de cor
    </p>
    <p
      v-destaque-local:fundo.atrasar.alternar="{
        cor1: 'green',
        cor2: 'red',
        atraso: 2000,
        intervalo: 1,
      }"
    >
      Usandro diretiva v-destaque com modificador de atraso e alternancia de cor
    </p>
  </div>
</template>

<script>
  export default {
    directives: {
      'destaque-local': {
        bind(el, binding, vnode) {
          const aplicarCor = (cor) => {
            if (binding.arg === 'fundo') {
              el.style.backgroundColor = cor
            } else {
              el.style.color = cor
            }
          }

          let atraso = 0
          const cor1 = binding.value.cor1
          const cor2 = binding.value.cor2
          let corAtual = cor1

          if (binding.modifiers['atrasar']) atraso = binding.value.atraso

          setTimeout(() => {
            if (binding.modifiers['alternar']) {
              setInterval(() => {
                corAtual = corAtual === cor1 ? cor2 : cor1
                aplicarCor(corAtual)
              }, binding.value.intervalo)
            } else {
              aplicarCor(binding.value.cor1)
            }
          }, atraso)
        },
      },
    },
    data() {
      return {
        cor: 'lightgreen',
      }
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
</style>
