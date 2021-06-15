<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuario: <strong>{{ idade }}</strong></p>
        <hr>
        Add new age: <br>
        <input type="text" v-model="age">
        <hr>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="changeAgeFn(Number(age))">Mudar Idade (Callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        idade: Number,
        changeAgeFn: Function,
    },
    data() {
        return {
            age: this.idade
        }
    },
    methods: {
        alterarIdade() {
            //this.idade = 33
            this.$emit('idadeMudou', 33)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
