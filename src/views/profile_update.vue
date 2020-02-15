<template>
    <div class="profile-update">
        <form @submit.prevent="updateProfile">
  <div class="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" v-model="getUserFire.name">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"  v-model="getUserFire.email">
  </div>
  <button class="btn btn-warning">Update</button>
</form>
    </div>
</template>

<script>
export default {
    name:"profile-date",
     methods:{
     updateProfile(){
         this.$store.dispatch("fireUpdataProfile",{
             name:this.getUserFire.name,
             email: this.getUserFire.email,
             token:this.$store.state.token
         }).then(()=>{
             this.$noty.success("Login","data has been update");
         });
     }
  },
  computed:{
      getUserFire(){
          return this.$store.getters.getUser;
      }
  },

}
</script>