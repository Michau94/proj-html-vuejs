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
        <button id="explore" class="btn">Explore Recent Work</button>
        <button id="quote" class="btn">Get a Quote Today</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
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
  #explore {
    background-color: $explore-btn;
    color: white;
  }

  #quote {
    background-color: $secondary;
  }
}
</style>