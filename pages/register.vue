<template>
    <div class="container">
<div class="row">
<div class="col"></div>
<div class="col-sm-12 col-md-6 col-lg-5  login-pt">

<div class="card p-5">
<form>
<div class="form-group">
  <label for="username">Username</label>
  <input type="text" v-model="username"
    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter Username">
</div>

<div class="form-group">
  <label for="email">Email</label>
  <input type="email" v-model="email"
    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter Email">
</div>

<!---password-->
<div class="form-group">
  <label for="password">Password</label>
  <input type="text" v-model="password"
    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter Password">
</div>

<div class="forget-pass text-right"><nuxt-link to="/">forget password?</nuxt-link></div>


<b-button class="primary-button mt-2 mb-2 w-100" @click="onRegister">Register</b-button>

<div class="forget-pass text-center">Already have an account? <nuxt-link to="/login">Login</nuxt-link></div>
</form>
</div>





</div>
<div class="col"></div>

</div>


</div>
</template>

<script>
export default {
middleware: "auth",
auth: "guest",
layout: 'none',
data() {
return {
username: "",
email: "",
password: ""
}
},
methods: {
async onRegister() {
try {
let data = {
username: this.username,
email: this.email,
password: this.password
}
let response = await this.$axios.$post('/api/auth/signup', data)
console.log(response);
if(response.success) {
this.$auth.loginWith('local', {
data: {
email: this.email,
password: this.password
}
});
}
this.$router.push('/')
} catch(err) {
console.log(err)
}
},
}
};
</script>// data() {
// return {
// username: "",
// email: "",
// password: ""
// }
// },
// methods: {
// async onRegister() {
// try {
// let data = {
// username: this.username,
// email: this.email,
// password: this.password
// }
// let response = await this.$axios.$post('/api/auth/signup', data)
// console.log(response);
// if(response.success) {
// this.$auth.loginWith('local', {
// data: {
// email: this.email,
// password: this.password
// }
// });
// }
// this.$router.push('/')
// } catch(err) {
// console.log(err)
// }
// },
// }
// };
</script>