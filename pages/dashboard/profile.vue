<template>
    <div class="container">
<div class="row">
<div class="col"></div>
<div class="col pt-5 pb-5 mt-5 mb-5 card">
<!-- <a href="#" @click="onLogout">Logout</a> -->

<form>
<!--name-->
<div class="form-group">
  <label for="username">Username</label>
  <input type="text" v-model="username"
    class="form-control" name="" id="" aria-describedby="helpId" :placeholder="$auth.$state.user.username">
</div>


<!--email-->
<div class="form-group">
  <label for="email">Email</label>
  <input type="email" v-model="email"
    class="form-control" name="" id="" aria-describedby="helpId" :placeholder="$auth.$state.user.email">
</div>

<!--name-->
<div class="form-group">
  <label for="Password">Password</label>
  <input type="text" v-model="password"
    class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
</div>
<b-button @click="onUpdateProfile">Update Profile</b-button>
</form>

</div>
<div class="col"></div>
</div>
</div>

</template>

<script>
export default {
data() {
return {
username: '',
email:'',
password: ''
}
},
methods: {
async onUpdateProfile() {
let data = {
username: this.username,
email: this.email,
password: this.password,
}
try {
let response = await this.$axios.$put('/api/auth/user', data)
if (response.success) {
this.username = '';
this.email = '';
this.password = '';

await this.$auth.fetchUser();

}
}
catch(err) {
console.log(err.message)
}
},

async onLogout() {
await this.$auth.logout()
}
}
}


</script>

<style>


</style>