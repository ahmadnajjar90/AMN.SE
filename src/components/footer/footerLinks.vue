<template>
    <div class="bg-footer-links footer-line pt-4">
        <div class="container">
            <div class="row">
                <div class="col-6 col-lg-3 mb-4">
                    <h3 class="them-color">AMN.se</h3>
                    <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, ipsam delectus magni fuga nam fugit? Ea, ipsam delectus magni fuga nam fugit.</p>
                    <h6 class="mt-4">Follow us</h6>
                    <a href="#"><i class="fab fa-facebook-f them-color mr-3"></i></a>
                    <a href="#"><i class="fab fa-twitter them-color mr-3"></i></a>
                    <a href="#"><i class="fab fa-instagram them-color mr-3"></i></a>
                    <a href="#"><i class="fab fa-youtube them-color"></i></a>
                </div>

                <div class="col-6 col-lg-3">
                    <h5 class="them-color">Contact info</h5>
                    <h6 class="them-color">Adress:</h6>
                    <p>Al-hmdaniha 77, <br>72227 Aleppo </p>
                    <h6 class="them-color">Phone:</h6>
                    <p>+46738941234</p>
                    <h6 class="them-color">Email:</h6>
                    <p><a href="#" class="footer-link">info@amn.se</a></p>
                </div>

                <div class="col-6 col-lg-3 mb-4">
                    <h5 class="them-color">Useful links</h5>
                    <a href="#" class="footer-link">Contact us</a> <br>
                    <a href="#" class="footer-link">Privacy policy</a> <br>
                    <a href="#" class="footer-link">Treams and conditions</a> <br>
                    <a href="#" class="footer-link">Latest news</a> <br>
                    <a href="#" class="footer-link">Our sitemap</a>
                </div>

                <div class="col-6 col-lg-3">
                    <h5 class="them-color">We accept</h5>
                    <img src="@/assets/paymentMethods/master.png" class="mr-2 mb-2" alt="">
                    <img src="@/assets/paymentMethods/visa.png" class="mr-2 mb-2" alt="">
                    <img src="@/assets/paymentMethods/paypal.png" class="mb-2" alt="">
                </div>

                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-footer-links{
    background: #f1f1f1;
}

.footer-line{
    border-top: 3px solid coral;
}

.footer-link{
    color: black;
}

.footer-link:hover{
    color: coral;   
}

.them-color{
    color: coral;
}
</style>