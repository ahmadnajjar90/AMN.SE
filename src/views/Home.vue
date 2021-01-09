<template>
  <div class="home">
    <carousel/>
    <subscribe/>
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from '@/components/carousel'
import subscribe from '@/components/subscribe'

export default {
  name: 'Home',
  components: {
    carousel,
    subscribe
  }
}
</script>
