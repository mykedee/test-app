<template>
<div class="post-body">
<div class="post-container container">
<div class="">
<h1>Post Page</h1>
<div>
<b-button v-b-modal.modal-lg variant="primary">Add Post</b-button>

<b-modal id="modal-lg" size="lg" title="Create Post" hide-footer>
<div class="form-group">
<label for="title"></label>
<input type="text" name="" id="" v-model="title" class="form-control" placeholder="Title">
</div>

<div class="form-group">
<label for="description"></label>
<input type="text" name="" id="" v-model="description" class="form-control" placeholder="Description">
</div>

<b-button class="btn btn-primary" @click="createPost">Submit</b-button>
</b-modal>

</div>

<div class="mt-2 pb-5">
<b-table :items="post" :fields="fields" :current-page ="currentPage" :per-page="perPage" responsive="sm">
<template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
<template #cell(modify)>
<b-button size="sm" @click="editItem">Edit</b-button> | <b-button size="sm" @click="deleteItem">Delete</b-button>
</template>


</b-table>
<b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage"></b-pagination>
</div>
</div>
</div>
</div>
</template>


<script>
// import axios from 'axios'
export default {
async asyncData({$axios}){
try {
let response = await $axios.$get('http://localhost:1110')
console.log(response)
return {
post: response.posts
}
} catch(err) {

};
},

data() {
return {
selectAll: false,
perPage: 5,
currentPage: 1,
pageOptions: [5, 10, 15],
post: [],
fields: ['index', 'title', 'description', 'modify'],
title: '',
description: ''
}
},
computed: {
hasPosts(){
return this.post.length > 0;
},
totalRows() {
return this.post.length;
}
},
// mounted(){
// this.fetchPost()
// },
methods: {
createPost(){
return axios({
method: 'post',
data: {
title: this.title,
description: this.description
},
url: 'http://localhost:1111/post',
headers: {
'Content-Type': 'application/json'
}
})
.then(() => {
Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
);
this.$router.push('/')
}).catch(() => {
Swal.fire(
  'Opps!',
  'Creating post failed!',
  'error'
)})
},


deleteItem(){
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
},
editItem(){
this.$bvModal.show('modal-lg')
}
}
}
</script>


<style scoped>
.post-body {
background: #000;
height: 100%;
}

.post-container {
padding-top: 100px;
}
</style>