<template lang="pug">
  v-card
    v-card-title(tag="h2" class="pb-2") {{ userData.name }}
    v-card-text {{ userData.address.city }}, {{ userData.address.street }}
    v-card-actions
      v-btn(text color="deep-purple" @click="openUser") Detail
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  methods: {
    openUser() {
      this.$router.push(`/users/${this.userData.id}`);
    }
  }
}
</script>
