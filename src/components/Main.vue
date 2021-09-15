<template>
  <div>
    <Banner />

    <section class="question d-flex justify-content-center align-items-center">
      <h4>Do you have a construction project we can help with?</h4>
      <button class="btn">Get a Quote Today</button>
    </section>

    <!-- rivedere riutilizzabilità di services -->
    <Services />
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Services from "./Services.vue";
export default {
  name: "Main",
  components: {
    Banner,
    Services,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.question {
  height: 100px;
  background-color: $secondary;
  position: relative;

  h4 {
    text-transform: capitalize;
  }
  button {
    background-color: $explore-btn;
    color: #fff;
    position: absolute;
    right: 50%;
    transform: translate(50%);
    bottom: -20px;
  }
}
</style>