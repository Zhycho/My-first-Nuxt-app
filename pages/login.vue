<template lang="pug">
  section
    v-alert(
      v-if="$route.query.message"
      type="warning"
      colored-border
      color="deep-purple"
      border="right"
      elevation="2"
      rounded="0"
    ) You need to login first
    form(@submit.prevent="submitHandler")
      v-text-field(label="Name" color="deep-purple")
      v-btn-toggle
        v-btn(type="submit") Login
        v-btn(text nuxt to='/') To home
</template>

<script>
export default {
  layout: 'login',
  methods: {
    submitHandler() {
      this.$store.dispatch('login');
      this.$router.push('/');
    }
  }
}
</script>
