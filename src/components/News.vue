<template>
  <div class="card post">
    <div class="wrapper">
      <div class="content d-flex align-items-center">
        <div class="sub-card py-2">
          <i class="fas fa-link p-3 m-2 bg-secondary rounded-circle"></i>
          <i class="fas fa-search p-3 m-2 bg-secondary rounded-circle"></i>
          <h5>Redeveloping Florida Remote Southern Coast</h5>
          <span>Architecture Buildings News</span>
        </div>
      </div>

      <slot></slot>
    </div>
    <div class="title">{{ title }}</div>
    <Separator> <time>September 20, 2021</time> </Separator>
    <div class="description">{{ text }}</div>

    <div class="content">
      <slot name="hover"></slot>
    </div>
  </div>
</template>

<script>
import Separator from "../components/Separator.vue";
export default {
  name: "News",
  props: ["title", "text"],
  components: { Separator },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
.post {
  background-color: #fff;
  flex-basis: 30%;
  .title {
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .description {
    padding: 10px;
  }
}

.wrapper {
  position: relative;
  &:hover .content {
    opacity: 1;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: $secondary;
  }
}
</style>