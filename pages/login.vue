<template>
    <div class="container">
<div class="row">
<div class="col"></div>
<div class="col-sm-12 col-md-6 col-lg-5 login-pt">
<div class="card p-5">
<form>
<div class="form-group">
  <label for="email">Email</label>
  <input type="email" v-model="email"
    class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
</div>


<!---password-->
<div class="form-group">
  <label for="password">Password</label>
  <input type="text" v-model="password"
    class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
</div>


<b-button class="primary-button mt-2 mb-2 w-100" @click="onLogin">Login</b-button>

<div class="forget-pass text-center"><span>Don't have an account? </span><nuxt-link to="/register">Register</nuxt-link></div>

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
email: '',
password: ''
}
},
methods: {
async onLogin() {
try {
this.$auth.loginWith('local', {
data: {
username: this.username,
email: this.email,
password: this.password
}
})
this.$router.push('/dashboard')
}
catch(err) {
console.log(err.message)
}

}
}
};
</script>
