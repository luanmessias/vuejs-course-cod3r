<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import FrutasMixin from './FrutasMixin'
import UserMixin from './userMixin'
export default {
  mixins: [FrutasMixin, UserMixin],
  created() {
    console.log('Created - Frutas.vue!')
  },
}
</script>

<style>
</style>
