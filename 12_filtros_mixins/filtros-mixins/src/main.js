import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('globalFilter_inverter', (valor) => {
  return valor
    .split('')
    .reverse()
    .join('')
})

Vue.mixin({
  data() {
    return {
      mixinGlobal: 'Ola eu sou um mixin global',
    }
  },
  created() {
    console.log('Created - Mixin Global!')
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
