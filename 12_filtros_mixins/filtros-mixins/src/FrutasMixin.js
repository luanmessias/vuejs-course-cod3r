export default {
  data() {
    return {
      fruta: '',
      frutas: ['banana', 'pera', 'kiwi'],
    }
  },
  methods: {
    add() {
      this.frutas.push(this.fruta)
      this.fruta = ''
    },
  },
}
