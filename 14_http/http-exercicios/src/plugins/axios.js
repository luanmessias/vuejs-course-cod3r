import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = "https://curso-vue-29984-default-rtdb.firebaseio.com/"

// Config caso esteja recebendo os dados de forma global:
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-29984-default-rtdb.firebaseio.com/',
      headers: {
        Authorization: 'abc123',
      },
    })

    Vue.prototype.$http.interceptors.request.use(
      config => {
        console.log(config.method)
        if (config.method == 'post') {
          console.log('Dados adicionados ao banco')
        }
        if (config.method == 'get') {
          console.log('Foram requisitados dados do banco')
        }
        return config
      },
      error => Promise.reject(error)
    )

    Vue.prototype.$http.interceptors.response.use(
      res => {
        /* 
        // Exemplo de como manipular os dados recebidos antes de disponibilizar para o app:

        const array = []
        for (let key in res.data) {
          array.push({
            id: key,
            ...res.data[key],
          })
        }

        res.data = array
        */
        console.log('Dados requisitados: ', res)
        return res
      },
      error => Promise.reject(error)
    )
  },
})
