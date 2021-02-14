<template>
  <div>
    <about1/>
    <about2/>
    <aboutStatics/>
    <subscribe/>
  </div>
</template>

<script>
import about1 from '@/components/about1'
import about2 from '@/components/about2'
import aboutStatics from '@/components/aboutStatics'
import Subscribe from '@/components/subscribe.vue'

export default {
  name: 'About',
  components: {
    about1,
    about2,
    aboutStatics,
    Subscribe,
  }
}
</script>

<style>

</style>
