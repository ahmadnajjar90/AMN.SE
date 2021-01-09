<template>
    <div>
        <Contactus1/>
        <div class="container">
          <div class="row">
            <contactus2left class="col-12 col-lg-6"/>
            <contactus2right class="col-12 col-lg-6 pb-3"/>
          </div>          
        </div>
    </div>
</template>

<script>
import Contactus1 from '@/components/Contactus1.vue'
import contactus2left from '@/components/contactus2left.vue'
import contactus2right from '@/components/contactus2right.vue'

export default {
  name: 'contactus',
  components: {
    Contactus1,
    contactus2left,
    contactus2right,
  }
}
</script>

<style>

</style>