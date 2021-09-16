<template>
  <div>
    <slot></slot>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Separator",
};
</script>

<style lang="scss" scoped>
hr {
  width: 80%;
  margin: 0 auto;
}
</style>