<template>
<section class="section-hero section-shaped my-0">

<div class="home">
<div class="hero__section">
<div class="hero__container">
<h1 class="hero-heading">This is a
<vue-typer
      :text='passions'
      :repeat='Infinity'
      :shuffle='false'
      initial-action='typing'
      :pre-type-delay='70'
      :type-delay='100'
      :pre-erase-delay='2000'
      :erase-delay='250'
      erase-style='clear'
      :erase-on-complete='true'
      caret-animation='blink'
    ></vue-typer></h1>

<p>...Building a test app...</p>

<div class="consult"><nuxt-link to="/">Contact Us</nuxt-link></div>
</div>
</div>



<div class="portfolio__section">
<div class="portfolio__section-container">
<div class="porfolio-wrapper">
<div class="item-container card" v-for="post in posts" :key="post._id" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
<img :src="post.photo" class="image" alt="" srcset="">
<div class="center-box"></div>
<div class="middle">
<div class="text">
<nuxt-link v-bind:to="`/project/${post.slug}`">
<h4>{{post.title}}</h4>
</nuxt-link><p>{{post.description}}</p>
</div>
</div>
</div>
</div>
</div>
</div>



<div class="how__section">
<div class="how__section-container">
<h1>How It Work's</h1>
<p class="how__section_text">...our body building process!</p>


<div class="how__wrapper">
<div class="how__content" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
<h4>Workout Videos</h4>






<p>Access to hundreds of free, full-length workout videos.</p>
</div>
<div class="how__content" data-aos="fade-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
<h4>Workout Programs</h4>
<p>Affordable and effective workout programs.
</p>
</div>
<div class="how__content" data-aos="fade-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
<h4>Meal Plans
</h4>
<p>Plans built with registered dietitians and nutritionists. </p>
</div>
<div class="how__content" data-aos="fade-in" data-aos-duration="2500" data-aos-easing="ease-in-out">
<h4>FB Plus ALL ACCESS</h4>
<p>
Add powerful features to your membership.

</p>
</div>

</div>
</div>
</div>


</div>
</section>
</template>



<script>

export default {
layouts: 'navbar',
data() {
return {
      passions: ["Test App", "Testing Nuxt App"],
}
},
async asyncData({$axios}) {
try {
let response = await $axios.$get('/api/posts')
console.log(response)
return {
posts: response.posts
}
} catch(err) {
console.log(err.message)
}
}
,
swiperOption: {
pagination: {
el: '.swiper-pagination',
clickable: true
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
},
breakpoints: {
480: {
slidesPerView: 1,
spaceBetween: 140,
},
640: {
slidesPerView: 1,
spaceBetween: 10,
},
},
}

}
</script>

<style scoped>


body {
overflow-x: hidden;
line-height: 1.0;
color: #000 !important;
letter-spacing: -1px;
}


.how__section h1 {
font-size: 29px;
}

p {
font-family: 'Poppins', sans-serif;
font-size: 14px;
line-height: 1.0;
}


/***************************** mobile media query **************************************************
****************************************************************************************************/

.hero__section {
width: 100%;
background-image: url('../static/images/id.jpg');
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
height: 640px;
position: relative;
}

h1.hero-heading {
font-size: 39px;
    text-align: center;
}

.consult {
background: #212529;
padding: 10px;
width: 40%;
margin: auto;
/* color: #fff; */
font-weight: 600;
transform: scale(1.0);
}

.consult:hover {
border-color: #000;
color: #000;
border: 1px solid black;
background: none;
padding: 10px;
width: 40%;
margin: auto;
font-weight: 600;
transform: scale(1.1);
transition: 0.35s;
transition-timing-function: ease-out;
}


.consult a {
/* background: #212529; */
padding: 10px;
/* width: 40%; */
margin: auto;
color: #fff;
text-decoration: none;
}


.consult a:hover{
padding: 10px;
margin: auto;
color: #000;
text-decoration: none;
}

.hero__container {
    width: 90%;
    margin: auto;
    background-color: #fff;
    position: inherit;
    padding: 29px 33px;
    top: 160px;
    color: #000;
}

.hero__container p {
    /* font-family: 'Source Code Pro', monospace; */
    font-size: 14px;
    text-align: center;
}

/******services section*******/
.services__section {
width: 100%;
background-color: #f9f9f9;
position: relative;
padding-top: 50px;
}

.services__container {
width: 85%;
margin: auto;
}

/* .services__container  */
.wrapper {
display: grid;
grid-template-columns: 1fr;
row-gap: 25px;
column-gap: 10px;
margin-top: 50px;
margin-bottom: 50px
}


.services__box1 {
width: 100%;
}

.services__section-img {
height: 50px;
width: 50px;
}

.how__section {
width: 100%;
background: #7f7e7e;
/* background-color: #000; */
/* background: linear-gradient(
110deg
 ,#7f7e7e 50%,#000000 50%); */
/* background-color: rgb(253, 207, 207); */
position: relative;
color: #fff;
text-align: left;
}

.how__section-container {
padding-top: 50px;
width: 85%;
margin: auto;
padding-bottom: 50px;
}

.how__wrapper {
display: grid;
grid-template-columns: 1fr;
row-gap: 35px;
column-gap: 20px;
margin-top: 50px;
}


.how__content img {
width: 100px;
height: 100px;
}




.items.card {
border: none;
box-shadow: 0 -1px 26px rgb(0 0 0 / -11%);
/* background: #f2f2f2; */
/* background: #9557F9; */
background: #7F7E7E;
line-height: 1.0;
border-radius: 0;
}

.items.card:hover {
background: #030101;
}

.items.card h4{
/* color: #d3a671; */
/* color: #fbff00; */
color: #fff;

}

.items.card p{
color: #eeeeee !important;
/* line-height: 1; */
}


.how__content {
text-align: left;
background: #f7f8fc;
/* background: #0a0a0a; */
padding: 5px 20px;
/* border-radius: 10px; */
height: 200px;
}

.how__content h4, .how__content p {
    color: #212529;
}

.how__content:hover {
background: #7F7E7E;
}

.how__content:hover p, .how__content:hover h4 {
color: #fff !important;
}

.portfolio__section {
width: 100%;
background-color: #fff;
height: 100%;
position: relative;
color: #000;
text-align: center;
}

.portfolio__section-container {
padding-top: 50px;
width: 90%;
margin: auto;
padding-bottom: 50px;
}

.porfolio-wrapper {
display: grid;
column-gap: 20px;
row-gap: 50px;
grid-template-columns: 1fr;
}

.porfolio-wrapper img {
max-width: 290px;
margin: auto;
}

.porfolio-item {
text-align: left;
}

.client__words__container {
    width: 85%;
    margin: auto;
    text-align: left;
    padding-top: 50px;
    padding-bottom: 50px;
}

.client__words__container h1 {
font-size: 29px;
}



/***************************** Desktop media query **************************************************
****************************************************************************************************/

@media (min-width: 768px) {

.item-container.card {
height: fit-content;
}

.item-container {
position: relative;
width: 100%;
overflow: hidden;
}

.image {
opacity: 1;
display: block;
width: 100%;
height: auto;
transition: .5s ease;
backface-visibility: hidden;
overflow: hidden;
}

/* .image:hover {
/* overflow: hidden; */
/* transform: scale(1.1); */
/* transition-duration: 0.5s; *
} */

.middle {
background: red;
transition: .5s ease;
opacity: 0;
position: absolute;
top: 90%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;
}



.item-container:hover .image {
opacity: 0.8;
transform: scale(1.1);
transition-duration: 0.5s;

}

.item-container:hover .middle {
opacity: 1;
}

.text {
background-color:#fff;
color: #000;
font-size: 16px;
padding: 16px 32px;
width: 350px;
}

.text a {
text-decoration: none;
color: #000;
}

.text h3 {
margin-bottom: 16px;
}


/*********************/
.how__section h1 {
font-size: 45px;
/* font-family: "montserrat-medium", sans-serif; */
color: #fff;
}

p.how__section_text{
color: #fff !important;
}


h4 {
/* font-family: "montserrat-medium", sans-serif; */
}

.hero__section {
width: 100%;
/* background-image: url('./images/11.jpg'); */
height: 640px;
position: relative;
/* background: #743BD1; */
/* background: rgb(70,8,173); */
/* background: linear-gradient(180deg, rgba(70,8,173,1) 0%, rgba(116,59,209,1) 100%); */
}

.hero__container {
width: 50%;
max-width: 665px;
margin: auto;
position: inherit;
height: 380px;
top: 100px;
text-align: center;
}

h1.hero-heading {
padding-bottom: 20px;
font-size: 60px;
margin: 0 20px;
padding-top: 65px;
line-height: 1;
font-weight: 600;
}


/* .services__container  */

.wrapper {
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 35px;
column-gap: 20px;
margin-top: 50px;
}

.services__section {
width: 100%;
background-color: #f9f9f9;
height: 100%;
/* position: relative; */
padding-top: 50px;
padding-bottom: 50px;

}


.services__section-img {
width: 70px;
height: 70px;
}


.services__container {
width: 80%;
max-width: 1140px;
margin: auto;
/* height: 380px; */
}

.services__box1 {
width: 60%;
/* margin: auto; */
}

.serviceimage {
/* float: left; */
position: absolute;
left: -63%;
height: 500px;
top: 70px;
overflow-x: hidden;
}

.service_img {
position: absolute;
right: 0;
background: #efeff0;
width: 45%;
height: 100%;
top: 0;
/* padding-bottom: 100px; */
/* background: repeating-radial-gradient(black, transparent 100px); */

}

.service-box-wrapper {
display: grid;
grid-template-columns: 1fr 1fr;
}

.items {
width: 250px;
}

/* .services__box2 {} */


.how__section {
width: 100%;
background-color: #000;
/* background: linear-gradient(
110deg
 ,#7f7e7e 50%,#000000 50%); */
height: 600px;
position: relative;
color: #fff;
text-align: left;
}

.how__section-container {
padding-top: 100px;
width: 80%;
max-width: 1140px;
margin: auto;
}

.how__wrapper {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 35px;
column-gap: 20px;
margin-top: 50px;
}

.how__content img {
width: 70px;
height: 70px;
}

.client__words__container h1 {
font-size: 45px;
}

.portfolio__section {
width: 100%;
background-color: #fff;
height: 100%;
color: #000;
text-align: center;
}

.portfolio__section-container {
padding-top: 100px;
width: 80%;
max-width: 1140px;
margin: auto;
padding-bottom: 100px;
}

.porfolio-wrapper {
display: grid;
column-gap: 80px;
row-gap: 30px;
grid-template-columns: 1fr 1fr;
margin: auto;
}

.porfolio-wrapper img {
max-width: 500px;
}

.porfolio-item {
text-align: left;
}

.client__words__section {
width: 100%;
height: 590px;
background: #efeff0;
}

.client__words__container {
padding-top: 50px;
width: 80%;
max-width: 1140px;
margin: auto;
padding-bottom: 50px;
}

.swiper-wrapper {
height: 600px;
}


.slide {
height: 500px;
width: 100%;
border-radius: 10px;
}

.swiper {
width: 90%;
margin: auto;
}

.slider-text-box {
background: rgb(15 172 23 / 60%);

/* background: rgb(149, 185, 151); */
width: 290px;
height: 170px;
top: -210px;
position: relative;
margin-left: 20px;
color: #fff;
transition: all .2s ease-in-out;
}

.slider-text-box:hover {
transform: scale(1.1);
transition: 0.35s;
transition-timing-function: ease-out;
}

p.slider-text-box {
text-align: left;
width: 20px;
}

.text-area {
margin-left: 20px;
margin-top: 20px;
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
left: 1051px;
right: auto;
background: rgb(15,172,23);
border-radius: 50%;
/* padding: 26px; */
height: 90px;
width: 90px;
}

.swiper-button-next, .swiper-container-rtl .swiper-button-next {
right: 10px;
left: auto;
background:rgb(15,172,23);
border-radius: 50%;
/* padding: 26px; */
height: 90px;
width: 90px;
}

.swiper-button-prev:after, .swiper-button-next:after {
font-family: swiper-icons;
font-size: 25px;
text-transform: none !important;
letter-spacing: 0;
text-transform: none;
font-variant: initial;
line-height: 1;
}


.swiper-button-prev, .swiper-button-next {
position: absolute;
top: 54%;
width: 40px;
height: 40px;
margin-top: 91px;
z-index: 10;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
}


.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
bottom: 10px;
left: 0;
width: 50%;
top: 379px;
}

/*
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
height: 200px !important;
} */

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
bottom: 10px;
left: 0;
width: 50%;
top: 412px;
}

.swiper-slide {
margin-top: 179px;
}


}
</style>
