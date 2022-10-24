<template lang="pug">
  section
    h1(class="mb-3") User: {{ userData.name }}
    v-list-item(two-line class="px-0")
      v-list-item-content
        v-list-item-title Address
        v-list-item-subtitle(v-if="userData.address") {{ userData.address.city }}, {{ userData.address.street }}, {{ userData.address.suite }}
    v-list-item(two-line class="px-0")
      v-list-item-content
        v-list-item-title Company
        v-list-item-subtitle(v-if="userData.company") {{ userData.company.name }}
    v-list-item(two-line class="px-0")
      v-list-item-content
        v-list-item-title Email
        v-list-item-subtitle {{ userData.email }}
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      userData: {}
    }
  },
  async fetch() {
    this.userData = await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`);
  }
}
</script>
