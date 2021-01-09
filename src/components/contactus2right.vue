<template>
    <div>
        <form>
            <h3 class="them-color mb-3">Contact Us</h3>
            <div class="form-group">
                <input type="text" class="form-control my-search-input" placeholder="Your name...">
            </div>

            <div class="form-group">
                <input type="email" class="form-control my-search-input" placeholder="Email...">
            </div>

            <div class="form-group">
                <textarea rows="10" class="form-control my-search-input" placeholder="Message....."></textarea>
            </div>
            <button type="submit" class="my-navbar-btn px-4 py-1">Send message</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
textarea{
    resize: none;
}
</style>