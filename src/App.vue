<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
    <Credits />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import Credits from "@/components/Credits.vue";
export default {
  name: "App",
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
