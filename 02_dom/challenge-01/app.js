new Vue({
    el: '#desafio',
    data: {
        name: 'Luan Messias',
        age: 31,
        imgUrl: 'https://wallpapercave.com/wp/wp6878944.jpg'
    },
    methods: {
        ageMultipleByThree() {
            const newAge = this.age * 3
            return newAge
        },
        randomNumber() {
            return Math.random(0, 1)
        }
    }
})