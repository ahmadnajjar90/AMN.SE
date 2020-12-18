<template>
    <div class="navbar-bg">
        <div class="container">
            <div class="row">
                <div class="col-6 order-1 col-lg-3">
                    <brand/>
                </div>

                <div class="col-12 order-3 col-lg-6 my-auto order-lg-2">
                    <navbar1 class=""/>
                </div>

                <div class="col-6 order-4 mt-1">
                    <navbar2/>
                </div>

                <div class="col-3 order-2 col-lg-2 my-auto ml-auto">
                    <navbarCart/>
                </div>

                <div class="col-3 order-5 col-lg-2 ml-auto my-auto">
                    <navbarlogin/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import brand from "@/components/navbar/brand.vue";
import navbar1 from "@/components/navbar/navbar1.vue";
import navbar2 from "@/components/navbar/navbar2.vue";
import navbarCart from "@/components/navbar/navbarCart.vue";
import navbarlogin from "@/components/navbar/navbarlogin.vue";

export default {
    components: {
        brand,
        navbar1,
        navbar2,
        navbarCart,
        navbarlogin,
    }
}
</script>

<style>
.navbar-bg{
    background-color: #f1f1f1;
}
.cart-icon{
    color: coral;
    font-weight: bolder;
    font-size: 18px;
}
</style>