<template>
  <section id="home">
    <div class="cards h-100 d-flex justify-content-evenly align-items-center">
      <Card count="147">
        <i class="fas fa-suitcase fa-5x"></i>
      </Card>
      <Card count="147">
        <i class="fas fa-suitcase fa-5x"></i>
      </Card>
      <Card count="147">
        <i class="fas fa-suitcase fa-5x"></i>
      </Card>
      <Card count="147">
        <i class="fas fa-suitcase fa-5x"></i>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
#home {
  height: 300px;
  background-image: url("../assets/images/home-244125289.jpg");
  background-size: cover;
  background-position: center;
}
</style>