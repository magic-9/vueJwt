<template>
  <div class="login">
    <div class="container">
      <h3 class="lead text-center">
        Login page
      </h3>
      <form @submit.prevent="Login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>

    <div class="all-site" v-show="isLoading">
      <scale-loader class="custom-class loader-site" color="#ccc" />
    </div>
  </div>
</template>
<style lang="scss">
   
   

</style>

<style lang="scss">
.login {
  margin-top: 10px;
}
.all-site{
  top:0;
  width: 100%;
  height: 100%;
  position: fixed;

   display: flex;
    justify-content: center;
    align-items: center;
  .loader-site{
    color: #ccc;
  }
}
</style>
<script>
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      isLoading: false
    };
  },
  methods: {
    Login() {
      this.isLoading = true;
      this.$store
        .dispatch("fireLoginAction", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.isLoading = false;
          this.$noty.success("Login", "Login success");
          this.$router.push("/profile-data");
        })
        .catch(() => {
          this.isLoading = false;
          this.$noty.error("Oops, something went wrong!");
        });
    }
  }
};
</script>
