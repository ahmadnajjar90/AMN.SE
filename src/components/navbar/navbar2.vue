<template>
    <div class="bg-dark">
        <nav class="px-0 navbar navbar-expand-lg navbar-light my-navbar-bg">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link my-nav-link" href="../">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link my-nav-link" href="../Products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link my-nav-link" href="../Offers">Offers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link my-nav-link" href="../About">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link my-nav-link" href="../contactus">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
.my-navbar-bg{
    background: #f1f1f1;
    margin-right: 0  !important;
}

.my-nav-link{
    color: black !important;
}

.my-nav-link:hover{
    color: coral !important;
}
</style>