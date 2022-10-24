<template lang="pug">
  section
    h1(class="mb-3") Error {{ error.statusCode }}
    v-alert(
      type="error"
      colored-border
      color="red"
      border="left"
      elevation="2"
      rounded="0"
    ) {{ errorText }}
    v-btn(nuxt to='/') To home
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorText() {
      return this.error.statusCode === 404 ? 'Page not found' : 'Something went wrong';
    }
  }
}
</script>
