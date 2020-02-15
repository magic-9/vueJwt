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
  </div>
</template>

<style lang="scss">
.login {
  margin-top: 10px;
}
</style>
<script>
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    Login() {
      // this.$http
      //   .post("http://127.0.0.1:8000/api/login", {
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

      this.$store
        .dispatch("fireLoginAction", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$noty.success("Login", "Login success");
          this.$router.push("/about");
        })
        .catch(() => {
          this.$noty.error("Oops, something went wrong!");
        });
    }
  }
};
</script>
