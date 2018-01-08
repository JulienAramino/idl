<template lang="pug">

  v-container(fluid grid-list-md)
    v-layout(row wrap)
      v-flex()
        p {{ content.title }} fddfg
        p khjdksqhfjdqshfldhl

</template>

<script>
export default {
  layout: 'content',
  asyncData: async ({ app, params, payload }) => ({
    content: await app.$content('/pages').get(params.slug) || payload
  }),
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
