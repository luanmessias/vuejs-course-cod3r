<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!showResult">
				<div class="cabecalho">Formulário</div>

					<form class="painel">
						<Rotulo nome="Nome">
							<input type="text" v-model.lazy.trim="name">
						</Rotulo>
						
						<Rotulo nome="Sobrenome">
							<input type="text" v-model.lazy.trim="surname">
						</Rotulo>

						<Rotulo nome="E-Mail">
							<input type="email" v-model.lazy.trim="email">
						</Rotulo>

						<Rotulo nome="Senha">
							<input type="password" v-model.lazy.trim="password">
						</Rotulo>

						<Rotulo nome="Qual produto?">
							<span class="mr-4">
								<input
									name="product"
									type="radio" 
									value="web" 
									v-model="product"> Web</span>
							<span class="mr-4">
								<input 
									name="product"
									type="radio" 
									value="mobile"
									v-model="product"> Mobile</span>
							<span>
								<input 
									name="product"
									type="radio" 
									value="outro" 
									v-model="product"> Outro</span>
						</Rotulo>

						<Rotulo nome="Armazenar os dados?">
							<span class="mr-4">
								<input
									name="storeData"
									type="radio" 
									value="true" 
									v-model="storeData"> Sim</span>
							<span class="mr-4">
								<input 
									name="storeData"
									type="radio" 
									value="false"
									v-model="storeData"> Nao</span>
						</Rotulo>

						<button @click.prevent="showResult = true">Enviar</button>
					</form>

			</form>
			<div class="painel" v-if="showResult">
				<div class="cabecalho">Resultado</div>
					<Rotulo nome="Nome Completo">
						{{ name }}	{{ surname }}
					</Rotulo>

					<Rotulo nome="E-Mail">
						{{ email }}
					</Rotulo>

					<Rotulo nome="Senha">
						<span>{{ password }}</span>
					</Rotulo>

					<Rotulo nome="Qual Produto">
						<span>{{ product }}</span>
					</Rotulo>

					<Rotulo nome="Armazenar dados?">
						<span>{{ storeData }}</span>
					</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'

export default {
  name: 'app',
  components: { Rotulo },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      product: '',
      storeData: false,
      showResult: false,
    }
  },
}
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
