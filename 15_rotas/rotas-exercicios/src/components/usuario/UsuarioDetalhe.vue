<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <p><strong>Codigo:</strong> {{ id }}</p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link
      tag="button"
      primario
      :to="{
        name: 'editarUsuario',
        params: { id },
        query: { completo: true, idioma: 'pt' },
        hash: '#rodape',
      }"
      >Editar</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("dentro do componente -> usuario detalhe");
    next();
  },
  data() {
    return {
      confirmou: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else {
      if (confirm("Tem certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
};
</script>

<style>
</style>