<template lang="pug">
  section
    h1(class="mb-3") Profile
    p This page is only available when you logged in.
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
