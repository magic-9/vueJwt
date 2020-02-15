<template>
  <div class="nav-site">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link
                to="/"
                active-class="active"
                :class="{ 'nav-link': true }"
                exact
                >Home</router-link
              >
            </li>

            <li class="nav-item" v-if="!getLogin">
              <router-link
                to="/login"
                active-class="active"
                :class="{ 'nav-link': true }"
                exact
                >Login</router-link
              >
            </li>
            <li class="nav-item" v-if="!getLogin">
              <router-link
                to="/register"
                active-class="active"
                :class="{ 'nav-link': true }"
                exact="true"
                >Register</router-link
              >
           <li class="nav-item" v-if="getLogin">
          <button class="btn btn-warning" @click.prevent="logout">Logout</button>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
//import {mapGetters} from 'vuex';
export default {
  name: "nav-site",
  data() {
    return {
      token: null
    };
  },
  methods: {
    checkUserState() {
      if (localStorage.getItem("token") != null) {
        this.token = localStorage.getItem("token");
      }
    },
    logout(){
     this.$store.dispatch("fireLogout").then(()=>{
          this.$noty.success("please visit this site again");
          this.$router.push("/login");
     });
    }
  },
  computed: {
    getLogin() {
      return this.$store.getters.getLoginIn;
    }
  },
  mounted() {
    this.checkUserState();
  }
};
</script>
