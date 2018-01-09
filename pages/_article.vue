<template lang="pug">

  v-container(fluid grid-list-md)
    v-layout(row wrap)
      v-flex()
        p {{ content.title }} fddfg
        p khjdksqhfjdqshfldhl
        <nuxtent-body :body="content.body" />

</template>

<script>
export default {
  layout: 'content',
  asyncData: async ({ app, route, payload }) => ({
    content: await app.$content('/articles').get(route.path) || payload
  }),
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
