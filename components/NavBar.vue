<template>
  <header>
<nav class="container">
<ul>
<li class="logo"><nuxt-link to="/">Logo</nuxt-link></li>

<div class="fff">
<li class="site-link"><nuxt-link to="/login">About</nuxt-link></li>

<li class="site-link"><nuxt-link to="/post">Post</nuxt-link></li>


<li class="site-link"><nuxt-link to="/login">Contact Us</nuxt-link></li>

<template v-if="$auth.$state.loggedIn">
<!-- <li class="site-link"><nuxt-link to="/dashboard"><span>Dashboard</span></nuxt-link></li> -->

 <li class="site-link"><nuxt-link to="/dashboard/profile"><span>Hello, {{$auth.$state.user.username}}</span></nuxt-link></li>
</template>

<template v-else>
  <li><nuxt-link to="/login"><span>Hello, signin</span></nuxt-link></li>
</template>
</div>
</ul>
</nav>

</header>
</template>

<script>
export default {

}
</script>

<style>

.logo {
/* text-align: left; */
}

header {
  background-color: #000;
padding: 10px 0;
}

ul {
 list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


li a {
color: #fff;
text-decoration: none;
padding: 14px 16px;
font-weight: 500;
}


li a:hover {
color: #7f7e7e;
}
/* li a:hover {
padding: 14px 16px;
text-decoration: none;
border-bottom: 1px solid red;
} */


.logo a {
float: left;
  padding: 14px 16px;

}

.logo {
}


.fff {
float: right;
padding: 14px 16px;

}

.fff li {
text-decoration: none;
/* border-bottom: 1px solid red; */
display: inline;
}



.fff a:hover {
text-decoration: none;
border-bottom: 1px solid #7f7e7e;
}

.site-link {
}
</style>