<template>
  <div>
    <h1>Challenge: Event Bus</h1>
    <div class="stage">
      <user-list />
      <user-detail />
    </div>
    <hr>
  </div>
</template>

<script>
import UserList from '@/components/challenge/UserList/Component.vue'
import UserDetail from '@/components/challenge/UserDetail/Component.vue'

export default {
  components: {
    UserList,
    UserDetail
  }
}
</script>

<style scoped>
  .stage {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(233, 233, 233);
    box-sizing: border-box;
    padding: 10px;
  }
</style>