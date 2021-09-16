<template>
  <button type="button" class="mx-2 btn" :class="buttonType">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["buttonType", "text"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
.basic {
  background-color: $secondary;

  &:hover {
    background-color: $primary-text;
    color: #fff;
  }
}

.alternative {
  background-color: $primary-text;
  color: #fff;

  &:hover {
    background-color: $secondary;
  }
}

.light {
  background-color: $primary-text;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: $primary-text;
    box-shadow: 0 0 0 2px $primary-text inset;
  }
}
</style>