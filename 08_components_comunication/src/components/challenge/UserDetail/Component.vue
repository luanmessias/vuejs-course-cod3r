<template>
  <div class="userCard">
    <div v-if="user">
      <p><strong>id:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
      <button @click="removeUser({})">Remove</button>
    </div>
    <p v-else>Nenhum usuario selecionado</p>
  </div>
</template>

<script>
import EventBus from "@/EventBus";

export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    removeUser() {
      EventBus.removeUser()
    }
  },
  created() {
    EventBus.whenUserChange(user =>  {
        this.user = user
    }),
    EventBus.whenRemoveUser(() =>  {
        this.user = null
    })
  }
};
</script>

<style scoped>

.userCard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
</style>