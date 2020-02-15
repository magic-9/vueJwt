<template>
  <div class="register">
    <div class="container">
      <h3 class="lead text-center">
        Register page
      </h3>
      <form @submit.prevent="Register">
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
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label>Full name</label>
          <input
            type="text"
            class="form-control"
            placeholder="full name"
            v-model="name"
          />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  margin-top: 10px;
}
</style>
<script>
export default {
  name: "register",
  data() {
    return {
      email: null,
      password: null,
      name: null
    };
  },
  methods: {
    Register() {
      //  this.$http
      //   .post("http://127.0.0.1:8000/api/register", {
      //     email: this.email,
      //     password: this.password
      //   })
      //   .then(res => {
      //     this.$noty.success("Login", "Login success");
      //     localStorage.setItem("token", res.data.access_token);
      //     localStorage.setItem("user", res.data.user);
      //     this.$router.push("/about");
      //   })
      //   .catch(() => {
      //     this.$noty.error("Oops, something went wrong!");
      //   });
      this.$store.dispatch("fireRegisterAction",{
        name : this.name,
        password: this.password,
        email: this.email
      }) .then(() => {
        this.$noty.success("Register", "Register success");
             this.$router.push("/about");
       })
      .catch(() => {
        this.$noty.error("Oops, something went wrong!");
      });
    }
  }
};
</script>
