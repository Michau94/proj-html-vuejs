<template>
  <div
    class="
      presentation-banner
      d-flex
      justify-content-center
      align-items-center
      text-center
    "
  >
    <div class="message">
      <h1 class="text-light">BUILDING INPIRING SPACES</h1>
      <h5 class="subtitle">
        We build inspiring Residential & Commericial Spaces
      </h5>
      <div>
        <Button text="Explore Recent Work" buttonType="alternative" />
        <Button text="Get a Quote Today" buttonType="basic" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Banner",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.presentation-banner {
  background-image: url("../assets/images/home-slider-62528242.jpg");
  background-position: center;
  background-size: cover;
  height: 600px;

  h1 {
    font-weight: 600;
  }
  .subtitle {
    color: $secondary;
  }

  .btn {
    margin: 0 10px;
  }
}
</style>