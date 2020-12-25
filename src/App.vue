<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footerNav/>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue"
import footerNav from "@/components/footerNav.vue"

export default {
    components: {
        navbar,
        footerNav
    }
}
</script>>

<style>
</style>
