<template lang="pug">

  v-app
    Navigation
    Toolbar
    v-content
      router-view
        nuxt

    Footerbar

</template>

<style lang="scss" scoped>

</style>

<script>
  import Navigation from '../components/Navigation'
  import Toolbar from '../components/Toolbar'
  import Footerbar from '../components/Footer'
  export default {
    components: {
      Navigation,
      Toolbar,
      Footerbar
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>
