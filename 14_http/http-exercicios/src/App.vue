<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      v-for="msg in messages"
      :key="msg.text"
      :variant="msg.type"
      v-text="msg.text"
    />
    <b-card>
      <b-form-group label="name:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.name"
          placeholder="Informe o name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-Mail:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o E-Mail"
        ></b-form-input>
      </b-form-group>
      <b-button @click="saveData" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="getData" size="lg" class="ml-2" variant="success"
        >Obter usuarios</b-button
      >
    </b-card>
    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios">
        <strong>name:</strong> {{ usuario.name }} <br />
        <strong>E-Mail:</strong> {{ usuario.email }} <br />
        <strong>ID:</strong> {{ id }} <br />
        <b-button variant="warning" size="lg" @click="loadData(id)"
          >Carregar</b-button
        >
        <b-button
          variant="danger"
          class="ml-2"
          size="lg"
          @click="deleteData(id)"
          >Excluir</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      usuarios: [],
      id: null,
      usuario: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    clearForm() {
      this.id = null
      this.usuario.name = ''
      this.usuario.email = ''
      this.messages = []
    },
    saveData() {
      const selectedMethod = this.id ? 'patch' : 'post'
      const endOfUrl = this.id ? `/${this.id}.json` : '.json'
      this.$http[selectedMethod](`/usuarios${endOfUrl}`, this.usuario).then(
        () => {
          this.clearForm()
          this.messages.push({
            text: 'Person added successfully!',
            type: 'success',
          })
        }
      )
    },
    getData() {
      this.$http.get('usuarios.json').then((res) => {
        this.usuarios = res.data
      })
    },
    loadData(id) {
      this.id = id
      this.usuario = { ...this.usuarios[id] }
    },
    deleteData(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then(() => this.clearForm())
        .catch((err) => {
          this.messages.push({
            text: 'Error with deletion of this data',
            type: 'danger',
          })
        })
    },
  },
  //   created() {
  //     this.$http
  //       .post('usuarios.json', {
  //         name: 'Maria',
  //         email: 'maria@gmail.com',
  //       })
  //       .then((res) => console.log(res))
  //   },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
