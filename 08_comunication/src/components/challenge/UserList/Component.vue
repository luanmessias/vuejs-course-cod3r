<template>
  <div class="userList">
    <table>
      <thead>
        <tr>
          <th> #ID </th>
          <th> Name </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users"
          :key="user.id"
          @click="setUser(user.id)"
          :class="{selected: activeUser === user.id}"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name  }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
import EventBus from '@/EventBus'

export default {
  data() {
    return {
      activeUser: null,
      users: [
        {
          id: 1,
          name: "Ana",
          age: 25,
        },
        {
          id: 2,
          name: "Carlos",
          age: 45,
        },
        {
          id: 3,
          name: "Daniel",
          age: 34,
        },
        {
          id: 4,
          name: "Ema",
          age: 15,
        },
        {
          id: 5,
          name: "Lia",
          age: 23,
        },
      ],
    };
  },
  methods: {
    setUser(id) {
      const selectedUser = this.users.find(user => user.id === id)
      this.activeUser = id
      EventBus.changeUser(selectedUser)
    }
  },
  created() {
    EventBus.whenRemoveUser(() =>  {
        this.activeUser = null
    })
  }
};
</script>

<style scoped>
  .userList {
    width: 50%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  tbody tr {
    transition: all .3s;
    cursor: pointer;
  }

  tbody tr.selected {
    background-color: #CCC;
  }

  tbody tr:hover {
    background-color: #CCC;
  }
</style>