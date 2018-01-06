<template lang="pug">
  v-container(fluid grid-list-md)
    v-layout(row wrap)
      v-flex()
        v-card
          v-card-media(src="/images/idl.jpg" height="200px")
          v-card-title(primary-title="")
            div
              h3.headline.mb-0 IDL
              div
                | IDL project
          v-card-actions
            v-btn(flat="" color="orange") Share
            v-btn(flat="" color="orange") Explore
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>


</style>
