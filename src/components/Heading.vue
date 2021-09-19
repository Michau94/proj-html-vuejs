<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div
          class="content p-3 my-4 d-flex flex-column align-items-center"
          :class="mod"
        >
          <h5>{{ title }}</h5>
          <div class="separator my-3"></div>
          <p class="w-75">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: ["title", "text", "mod"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.container {
  height: 100%;
  .separator {
    height: 2px;
    background-color: $secondary;
    width: 15%;
  }
}

.light {
  color: #fff;
  text-align: flex-start;
}
</style>