<template>

<div class="contact__section">
<div class="contact__section-container">

<!-- <h1>Contact Us</h1> -->
<p class="share-text">we are available 24/7</p>
<h2>(+1)1234567</h2>
<p>E-mail: mymail@mail.com</p>

<p class="copy-right">copyright &copy; 2021.</p>

</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.contact__section {
width: 100%;
background-color: #000;
color: #fff;
padding-bottom: 25px;
}

.contact__section-container {
padding-top: 100px;
width: 85%;
margin: auto;
text-align: center;
}

.contact__section p, .contact__section h2 {
color: #fff !important;
}


.icon-border {
border-radius: 50%;
height: 70px;
width: 70px;
padding: 17px 20px;
margin: auto;
border: 1px solid #fff;
color: #fff;
}

.icon-cont {
margin-top: 25px;
}

.share-text {
margin-bottom: 15px;
}


.copy-right {
padding: 50px 0 20px 0;
position: inherit;
}

@media (min-width: 768px) {

.contact__section {
width: 100%;
/* background-color: #4608ad;
background: rgb(70,8,173); */
background: #000;
/* background: linear-gradient(180deg, rgba(70,8,173,1) 0%, rgb(84, 78, 94) 100%); */
}

.contact__section-container {
padding-top: 100px;
width: 80%;
max-width: 1140px;
margin: auto;
text-align: center;
}

/* .icon-border {
border-radius: 50%;
height: 70px;
width: 70px;
padding: 20px;
margin: auto;
border: 1px solid #fff;
} */

.icon-border {
border-radius: 50%;
height: 70px;
width: 70px;
padding: 17px 20px;
margin: auto;
border: 1px solid #fff;
}

.icon-cont {
margin-top: 25px;
}

.share-text {
margin-bottom: 15px;
}

.copy-right {
padding: 50px 0 20px 0;
position: inherit;
}
}
</style>