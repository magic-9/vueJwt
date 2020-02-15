<template>
  <div class="profile-data">
    <div class="container">
        <div class="form-row">
           <p class="lead">Email :<span class="text-primary">{{getUserFire.name}}</span></p>
        </div>

        <div class="form-row">
           <p class="lead">Name :<span class="text-primary">{{getUserFire.email}}</span></p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "profileData",
  methods:{
     
  },
  computed:{
      getUserFire(){
          return this.$store.getters.getUser;
      }
  },
  mounted(){
      
  }
};
</script>
