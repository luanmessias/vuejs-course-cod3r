export default {
  filters: {
    changeSpaceToComma(value) {
      return value.replaceAll(' ', ',')
    },
    countWordSize(value) {
      const arr = value.split(' ')
      const arrWithNumber = []
      arr.map((arr) => {
        arrWithNumber.push(`${arr} (${arr.length}) `)
      })
      return arrWithNumber.join('')
    },
  },
  data() {
    return {
      sentense: 'Test sentense to check the results',
    }
  },
  computed: {
    changeSpaceToCommaComputed() {
      return this.sentense.replaceAll(' ', ',')
    },
    countWordSizeComputed() {
      return this.sentense
        .split(' ')
        .map((word) => `${word} (${word.length}) `)
        .join('')
    },
  },
}
