<template lang="pug">
  v-app
    v-navigation-drawer(fixed v-model="drawer" app)
      v-list(dense)
        v-list-tile(@click="$router.push('/')")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Home
        v-list-tile(@click="$router.push('contact')")
          v-list-tile-action
            v-icon contact_mail
          v-list-tile-content
            v-list-tile-title Contact
        v-list-tile(@click="$router.push('about')")
          v-list-tile-action
            v-icon info
          v-list-tile-content
            v-list-tile-title A propos

    v-toolbar(app dark color="primary" extended)
      .menu(@click.stop="drawer = !drawer")
        v-toolbar-side-icon
        span Menu
      v-toolbar-title.white--text(slot="extension") Title
      v-spacer
      v-btn(icon)
        v-icon search
      v-btn(icon)
        v-icon more_vert

    v-content
      router-view
        nuxt
    v-footer(app)
</template>

<style lang="scss" scoped>
  .menu {
    margin: 0 !important;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
  }
</style>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
