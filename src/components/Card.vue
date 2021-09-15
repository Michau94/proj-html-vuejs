<template>
  <div class="card d-flex">
    <slot></slot>

    <div class="count">{{ count }}</div>

    <div class="description">Planning applications</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["count"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
.card {
  background: transparent;
  border: transparent;
  color: #fff;
  font-weight: 600;
  .count {
    color: $secondary;
    font-size: 3rem;
  }

  i {
    color: $secondary;
  }
}
</style>