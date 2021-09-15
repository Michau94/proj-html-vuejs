<template>
  <section id="services" class="py-4">
    <div class="col-12">
      <div class="content p-3 d-flex flex-column align-items-center">
        <h5>{{ title }}</h5>
        <div class="separator my-3"></div>
        <p class="w-75">
          {{ text }}
        </p>
        <slot> </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  props: ["title", "text"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
#services {
  height: 100%;
  .separator {
    height: 2px;
    background-color: $secondary;
    width: 15%;
  }
}
</style>