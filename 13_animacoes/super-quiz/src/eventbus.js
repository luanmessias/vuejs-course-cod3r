import Vue from 'vue'
export default new Vue({
    methods: {
        setAnswer(answer) {
            this.$emit('setAnswer', answer)
        },
        setNewQuestion(callback) {
            this.$emit('setNewQuestion', callback)
        },
    },
})
