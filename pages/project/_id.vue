<template>
<div class="project-page">
<div class="top-section">
<div class="row">
<div class="col-6">
<!-- <img class="" :src=posts.photo> -->
</div>
<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
<div class=""><h1>{{post.title}}</h1></div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
async asyncData({$axios , params}){

try {
let response = await $axios.$get(`/api/post/${params.id}`)
console.log(response);

return {
post: response.post
}

}
catch (err) {
console.log(err)
}
}
}
</script>

<style scoped>


.productid {
padding: 100px 0 100px 0;
}

img {
    width: auto;
    border-radius: .25rem;
    height: 250px;
}

@media (min-width: 768px) {
img {
max-width: 100%;
border-radius: .25rem;
height: auto;
}
}
.project-page {
background: #000;
height: 100vh;
}
</style>
