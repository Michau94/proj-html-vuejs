<template>
  <div class="card d-flex wrapper post">
    <slot></slot>
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
</style>