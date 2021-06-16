import Vue from 'vue'
export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit('idadeMudou', idade)
    },
    quandoIdadeMudar(callback) {
      this.$on('idadeMudou', callback)
    },

    changeUser(user) {
      this.$emit('userChanged', user)
    },
    whenUserChange(callback) {
      this.$on('userChanged', callback)
    },

    removeUser() {
      this.$emit('userRemove')
    },
    whenRemoveUser(callback) {
      this.$on('userRemove', callback)
    },
  }
})