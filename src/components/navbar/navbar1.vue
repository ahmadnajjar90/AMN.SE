<template>
    <div class="mt-2">
        <nav class="my-navbar-bg">
            <div class="d-flex">
                <input class="col-9 col-lg-10 mr-2 form-control my-search-input" type="search" placeholder="Search...">
                <button class="col my-navbar-btn">Search</button>
            </div>
            
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.my-search-input:focus{
    border:none;
    box-shadow:0px 0px 3px 0.1px coral;
}

.my-navbar-btn{
    background-color: none;
    border: 1px solid coral;
    border-radius: 5px;
    color: coral;
    outline: none;
}

.my-navbar-btn:hover{
    background-color: coral;
    color: white;
}
</style>