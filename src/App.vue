<template>
  <div id="app">
     <nav-site></nav-site>
    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script>
import NavSite from "@/components/layouts/navbar.vue";
export default {
  name: "App",
  components: {
    NavSite
  }
};
</script>
