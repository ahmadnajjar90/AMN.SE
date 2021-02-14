<template>
    <div class="container-fluid">
        <div class="d-flex row">
            <div class="dark-statics text-center col-6 col-md-3 py-3 py-md-5">
                <img src="@/assets/customer.png" width="20%" alt="">
                <h1 class="my-2 them-color">244</h1>
                <p>Registered Customer</p>
            </div>

            <div class="light-statics text-center col-6 col-md-3 py-3 py-md-5">
                <img src="@/assets/box.png" width="20%" alt="">
                <h1 class="my-2 them-color">7654</h1>
                <p>Products Delivered</p>
            </div>

            <div class="dark-statics order-4 order-md-3 bg-statics-ljus text-center col-6 col-md-3 py-3 py-md-5">
                <img src="@/assets/review.png" width="20%" alt="">
                <h1 class="my-2 them-color">570</h1>
                <p>5 Star Revirws</p>
            </div>

            <div class="light-statics order-3 order-md-4 bg-statics-dark text-center col-6 col-md-3 py-3 py-md-5">
                <img src="@/assets/team-member.png" width="20%" alt="">
                <h1 class="my-2 them-color">13</h1>
                <p>Team Members</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.dark-statics{
    background-color: #f5f5f5;
}

.light-statics{
    background-color: #fcfcfc;
}
</style>