<template>
    <div class="question">
        <div>
            <span>{{ selectedQuestion.text }}</span>
            <ul class="answers">
                <li
                    v-for="(answer, answerIndex) in selectedQuestion.answers"
                    @click="setAnswer(answer.text)"
                    :key="answerIndex"
                >
                    <div class="number">{{ answerIndex + 1 }}</div>
                    <div class="text">{{ answer.text }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import questions from '../util/questions'
import eventbus from '@/eventbus'

export default {
    data() {
        return {
            questions,
            selectedQuestion: [],
        }
    },
    created() {
        const questionIndex =
            Math.floor(
                Math.random() * (Math.floor(this.questions.length) - 0)
            ) + 0
        this.selectedQuestion = this.questions[questionIndex]
    },
    methods: {
        setAnswer(choice) {
            const isCorrect = this.selectedQuestion.answers.find(
                ({ text }) => text === choice
            ).correct
            eventbus.$emit('setAnswer', isCorrect)
        },
    },
}
</script>

<style>
.question {
    height: 400px;
    color: #000;
    background-color: #fff;
    width: 70%;
    border-radius: 20px;
    font-size: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

ul.answers {
    font-size: 2rem;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.answers li {
    margin: 20px;
    background-color: #89c454;
    border-radius: 8px;
    width: 40%;
    cursor: pointer;
    display: flex;
}

.answers .number {
    padding: 10px;
    background-color: #1e9c31;
    color: #fff;
    flex-basis: 30px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.answers .text {
    flex: 1;
    align-self: center;
}
</style>
