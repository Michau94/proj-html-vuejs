<template>
  <section id="services" :class="sectionType">
    <div class="container">
      <div class="col-12">
        <div
          :class="alternative"
          class="content p-5 d-flex flex-column align-items-center"
        >
          <h5>{{ title }}</h5>
          <div class="separator my-3"></div>
          <p class="w-75">
            {{ text }}
          </p>
          <slot></slot>
          <slot name="middle"></slot>
        </div>
      </div>
    </div>
    <slot name="bottom"></slot>
  </section>
</template>

<script>
export default {
  name: "Services",
  props: ["title", "text", "sectionType", "alternative"],
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

.alternative {
  background-color: #f0ede6;
}

.testimonial,
.light {
  color: #fff;
}

.align-left {
  text-align: start;
}
</style>

