<template>
  <div>
    <div class="d-flex justify-content-center align-items-center col-12">
      <div class="line"></div>
      <h5 class="px-5">{{ text }}</h5>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  Name: "Showmore",
  props: ["text"],
};
</script>

<style lang="scss" scoped>
.line {
  height: 1px;
  width: 25%;
  background-color: grey;
}
</style>