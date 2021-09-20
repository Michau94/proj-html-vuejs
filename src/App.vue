<template>
  <div id="app">
    <Header :linkprop="links" />
    <Main />
    <Footer />
    <Credits />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import links from "@/data/links.js";
import Credits from "@/components/Credits.vue";
export default {
  name: "App",
  data() {
    return {
      links,
    };
  },
  components: {
    Header,
    Main,
    Footer,
    Credits,
  },
};
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>
