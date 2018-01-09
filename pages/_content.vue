<template lang="pug">

  v-container(fluid grid-list-md)
    v-layout(row wrap)
      v-flex()
        v-card
          v-card-title(primary-title="")
            div
              h3.headline.mb-0 {{ content.title }}
          v-card-text
              nuxtent-body(:body="content.body")

</template>

<script>
// import _ from 'lodash'
export default {
  layout: 'content',
  asyncData: async ({ app, route, payload }) => ({
    content: await app.$content('/articles').get(route.path) || payload
  }),
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  created: function () {
  }
}
</script>
