<template>
    <div id="app">
        <h1>Super Quiz</h1>
        <transition name="flip" mode="out-in">
            <component
                :is="activeComponent"
                :correct="answerIsCorrent"
            ></component>
        </transition>
    </div>
</template>

<script>
import Question from './components/Question.vue'
import Result from './components/Result.vue'
import eventbus from '@/eventbus'
export default {
    components: {
        Question,
        Result,
    },
    data() {
        return {
            activeComponent: 'Question',
            answerIsCorrent: false,
        }
    },
    created() {
        eventbus.$on('setAnswer', (answer) => {
            this.answerIsCorrent = answer
            this.activeComponent = 'Result'
        })

        eventbus.$on('setNewQuestion', () => {
            this.activeComponent = 'Question'
        })
    },
}
</script>


<style>
body {
    background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
    font-family: 'Oswald', sans-serif;
    color: #fff;
    height: 100vh;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    font-weight: 200;
    font-size: 4rem;
}

@keyframes flip-out {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(90deg);
    }
}

@keyframes flip-in {
    from {
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0deg);
    }
}

.flip-enter-active {
    animation: flip-in 0.3s ease;
}

.flip-leave-active {
    animation: flip-out 0.3s ease;
}
</style>
