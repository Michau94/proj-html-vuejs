<template>
  <section class="question d-flex justify-content-center align-items-center">
    <h4>{{ text }}</h4>
    <Button text="Get a Quote Today" buttonType="light" />
  </section>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Slogan",
  props: ["text"],
  components: {
    Button,
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
    position: absolute;
    right: 50%;
    transform: translate(50%);
    bottom: -20px;
  }
}
</style>