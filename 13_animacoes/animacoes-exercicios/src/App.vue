<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    
    <fieldset class="scheduler-border">
      <legend class="scheduler-border">With CSS</legend>

      <b-button
        variant="primary"
        class="mb-4"
        @click="exibir = !exibir"
      > Mostrar Menagem </b-button>

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

      <b-select v-model="tipoAnimacao" class="mb-4">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </b-select>

      <transition :name="tipoAnimacao" mode="out-in">
        <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
        <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
      </transition>
    </fieldset>

    <fieldset class="scheduler-border">
      <legend class="scheduler-border">With JS</legend>

      <b-button
        variant="primary"
        class="mb-4"
        @click="exibirJs = !exibirJs"
      > Alternar </b-button>

      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
        <div v-if="exibirJs" class="caixa"></div>
      </transition>

    </fieldset>

     <fieldset class="scheduler-border">
      <legend class="scheduler-border">Animated component variation</legend>

      <div class="d-flex justify-content-center">
        <b-button
          class="m-4" 
          variant="primary"
          @click="selectedComponent = 'AlertaInfo'">
        Info</b-button>

        <b-button
          class="m-4" 
          variant="warning"
          @click="selectedComponent = 'AlertaAdvertencia'">
        Alert</b-button>
      </div>
      
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>

     </fieldset>


    <fieldset class="scheduler-border">
      <legend class="scheduler-border">Using transition-group</legend>

      <b-button
        class="m-4" 
        variant="primary"
        @click="adicionarAluno">
      Adicionar Aluno</b-button>

      <transition-group name="slide" tag="div">
        <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
            <b-list-group-item @click="removerAluno(i)" >
              {{ aluno }}
            </b-list-group-item>
        </b-list-group>
      </transition-group>

     </fieldset>



    
  </div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'
export default {
  components: {
    AlertaAdvertencia,
    AlertaInfo
  },
  data() {
    return {
      alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
      msg: 'Uma mensagem de informacoes para o usuario',
      exibir: false,
      exibirJs: false,
      tipoAnimacao: 'fade',
      larguraBase: 0,
      selectedComponent: 'AlertaInfo'
    }
  },
  methods: {
    adicionarAluno() {
      const randomName = Math.random()
        .toString(36)
        .substring(2)
      this.alunos.push(randomName)
    },
    removerAluno(index) {
      this.alunos.splice(index, 1)
    },
    animate(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada++
        if (rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      }, 20)
    },
    beforeEnter(el) {
      this.larguraBase = 0
      el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
      this.animate(el, done, false)
    },
    afterEnter(el) {
      console.log('afterEnter')
    },
    enterCancelled(el) {
      console.log('enterCancelled')
    },

    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {
      this.animate(el, done, true)
    },
    afterLeave(el) {
      console.log('afterLeave')
    },
    leaveCancelled(el) {
      console.log('leaveCancelled')
    }
  }
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

fieldset.scheduler-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

legend.scheduler-border {
  font-size: 1.2em !important;
  font-weight: bold !important;
  text-align: left !important;
  width: auto;
  padding: 0 10px;
  border-bottom: none;
}

/* CSS - Animation */

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
  transition: opacity 1s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 1s ease;
  transition: opacity 1s;
}

.slide-move {
  transition: transform 1s;
}

/* JS - Animation */

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>
