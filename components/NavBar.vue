<template lang="pug">
  v-app-bar(app flat outlined)
    v-container(class="d-flex align-center")
      v-toolbar-title(class="mr-4 deep-purple--text") My First Nuxt App
      v-list(class="d-flex py-0" height="60")
        v-list-item(nuxt to='/') Home
        v-list-item(nuxt to='/users') Users
        v-list-item(nuxt to='/profile') Profile
        v-list-item(v-if="!isLoggedIn" nuxt to='/login') Login
        v-list-item(v-else @click.prevent="logout") Logout
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.hasToken;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
}
</script>
