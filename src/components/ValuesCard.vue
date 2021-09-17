<template>
  <div>
    <div class="card d-flex wrapper standard">
      <div class="icon"><i :class="icon"></i></div>
      <div class="title">{{ title }}</div>
      <div class="d-flex justify-content-center">
        <hr class="w-25" />
      </div>
      <div class="description">{{ text }}</div>
      <div class="content">
        <slot name="hover"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ValuesCard",
  props: ["title", "text", "icon"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
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
  }
}
.standard {
  background-color: transparent;
  border: transparent;
  color: #1e1e1e;
  font-weight: 200;
  flex-basis: 20%;
  padding: 10px;
  .title {
    color: Black;
    font-size: 1rem;
  }

  &:hover i.fas,
  i.far {
    background-color: $secondary;
  }
  &:hover .title {
    color: $secondary;
  }
  i.far,
  i.fas {
    display: inline-block;
    border-radius: 50%;
    box-shadow: 0px 0px 2px;
    padding: 0.5em 0.6em;
  }
}
</style>