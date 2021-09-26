<template>
<!-- <sidedashNav/>
<topdashNav/> -->
<div class="dash-main">
<!-- <template v-if="$auth.$state.loggedIn">
<li class="site-link"><nuxt-link to="/profile"><span>Hello, {{$auth.$state.user.username}}</span></nuxt-link></li>
</template> -->
    <NuxtChild/>
</div>
</template>

<script>
export default {
layout: 'dashLayout',
methods: {
async onLogout() {
await this.$auth.logout()
}
}
}
</script>

<style>
.dash-main {
background: transparent;
}
</style>