<template lang="pug">

  v-navigation-drawer(fixed, app, :value="drawer", @input="toggleMenu")
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

      template(v-for="(item, index) in pages")
        v-list-tile(@click="$router.push(item.permalink)")
          v-list-tile-action
            v-icon info
          v-list-tile-content
            v-list-tile-title {{item.title}}

</template>

<style lang="scss" scoped>

</style>

<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      source: String
    },
    computed: {
      ...mapState({
        // Mounts getter to the scope of your component.
        pages: state => state.pages,
        drawer: state => state.drawer
      })
    },
    methods: {
      toggleMenu: function (data) {
        this.$store.dispatch('setDrawer', data)
      }
    }
  }
</script>
