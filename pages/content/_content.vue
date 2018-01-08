<template lang="pug">

  v-container(fluid grid-list-md)
    p page _content
    v-layout(row wrap)
      v-flex()
        p {{ content.title }} fddfg
        p khjdksqhfjdqshfldhl

</template>

<script>
export default {
  layout: 'content',
  asyncData: async ({ app, route, payload }) => ({
    content: await app.$content('/').get(route.path) || payload
  }),
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
