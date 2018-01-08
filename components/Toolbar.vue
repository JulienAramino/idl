<template lang="pug">
  v-toolbar(app dark color="primary" extended)
    .menu(@click.stop='showMenu')
      v-toolbar-side-icon
      span Menu
    v-toolbar-title.white--text(slot="extension") Title
    v-spacer
    v-btn(icon)
      v-icon search
    v-btn(icon)
      v-icon more_vert
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
  import { mapState } from 'vuex'
  export default {
    data: () => ({
    }),
    props: {
    },
    computed: {
      ...mapState({
        // Mounts getter to the scope of your component.
        drawer: state => state.drawer
      })
    },
    methods: {
      showMenu: function () {
        this.$store.dispatch('setDrawer', true)
      }
    }
  }
</script>
