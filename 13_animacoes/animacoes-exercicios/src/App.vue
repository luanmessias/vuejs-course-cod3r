<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Mostrar Menagem</b-button
    >
    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition name="slide" type="animation">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated bounce"
    >
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <hr>

    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Uma mensagem de informacoes para o usuario',
      exibir: false,
      exibirJs: true,
      tipoAnimacao: 'fade',
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
  font-size: 1.5rem;
}

/* Todos os passos da animacao: */
/* 
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-to {
  opacity: 0;
} */

/* Forma reduzida */

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
    visibility: hidden;
  }
  to {
    transform: translateY(40px);
    opacity: 0;
    visibility: visible;
  }
}

.slide-enter-active {
  animation: slide-in 1s ease;
}
.slide-leave-active {
  animation: slide-out 1s ease;
}
</style>
