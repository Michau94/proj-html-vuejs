<template>
  <section id="home" :class="bg">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: ["bg"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
#home {
  height: 100%;
}

.background {
  background-image: url("../assets/images/home-244125289.jpg");
  background-size: cover;
  background-position: center;
}

.background2 {
  background-image: url("../assets/images/home-parallax-144609983.jpg");
  background-size: cover;
  background-position: center;
}
</style>