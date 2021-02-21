<template>
    <div>
        <shopProduct/>
        <subscribe/>
    </div>
</template>

<script>
import shopProduct from '@/components/shopProduct'
import subscribe from '@/components/subscribe'

export default {
    name: 'Products',
    components: {
        shopProduct,
        subscribe,
    }
}
</script>

<style>

</style>