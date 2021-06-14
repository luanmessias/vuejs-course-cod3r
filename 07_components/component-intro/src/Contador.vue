<template>
  <div class="contador">
    <button @click="subtrair">-</button>
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    adicionar() {
      this.contador++
    },
    subtrair() {
      this.contador--
    }
  }
}
</script>

<style scoped>
  .contador span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px;
  }

  .contador button {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: coral;
    color: #FFF;
    margin: 0px 5px;
    outline: none;
  }
</style>