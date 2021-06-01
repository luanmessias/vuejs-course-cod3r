new Vue({
  el: "#desafio",
  data: {
    activeEffect: "",
    divThreeClass: "",
    divFourClass: "",
    applyColors: false,
    divFiveStyles: "",
    width: 0,
  },
  methods: {
    iniciarEfeito() {
      const testValue = this.activeEffect;

      switch (testValue) {
        case "destaque":
          this.activeEffect = "encolher";
          break;
        case "encolher":
          this.activeEffect = "destaque";
          break;
        default:
          this.activeEffect = "destaque";
          break;
      }
    },
    iniciarProgresso() {
      let valor = 0;
      const temporizador = setInterval(() => {
        valor += 10;
        this.width = `${valor}%`;
        if (valor === 100) clearInterval(temporizador);
      }, 500);
    },
  },
});
