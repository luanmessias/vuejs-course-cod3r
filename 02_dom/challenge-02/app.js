new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlertOnCLick() {
            alert('You cliked on button!')
        },
        storeValue(event) {
            this.valor = event.target.value
        }
    }
})