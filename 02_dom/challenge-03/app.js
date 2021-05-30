new Vue({
  el: "#desafio",
  data: {
    valor: 0,
    resultado: "",
  },
  watch: {
    valor(newData) {
      newData === 37
        ? (this.resultado =
            '<span style="color: green">Value is equall to 37</span>')
        : (this.resultado =
            '<span style="color: red">Value is diferent of 37</span>');
    },
    resultado() {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
});
