<template>
  <div>
    <p>{{string}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'stringComp',
  computed: mapGetters('String', {
    'string': 'getString'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red
}
</style>
