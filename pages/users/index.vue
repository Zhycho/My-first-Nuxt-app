<template lang="pug">
  section
    h1(class="mb-3") Users
    v-row
      v-col(v-for="user in users" cols="12" sm="4" :key="user.id")
        user-card(:user-data="user")
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetchUsers');
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users'];
    }
  }
}
</script>
