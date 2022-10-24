<template lang="pug">
  section
    h1(class="mb-3") Description
    p This is my first Nuxt app made with&nbsp;
      a(href="https://github.com/nuxt/create-nuxt-app" target="_blank") Create Nuxt App
      |. I learned the main concepts of Nuxt by developing this.
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
