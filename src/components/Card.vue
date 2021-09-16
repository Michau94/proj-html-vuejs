<template>
  <div class="card d-flex wrapper" :class="cardType">
    <slot></slot>
    <div class="title">{{ title }}</div>
    <slot name="middle"></slot>
    <div class="description">{{ text }}</div>
    <slot name="bottom"></slot>
    <div class="content">
      <slot name="hover"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "text", "cardType"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.basic {
  background-color: transparent;
  border: transparent;
  color: #fff;
  font-weight: 600;

  .title {
    color: $secondary;
    font-size: 3rem;
  }

  i {
    color: $secondary;
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

.alternative {
  background: $card-back;
  color: $primary-text;
  font-weight: 200;
  flex-basis: 20%;
  padding: 10px;
  .title {
    color: $primary-text;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .icon {
    i.far,
    i.fas {
      display: inline-block;
      border-radius: 50%;
      box-shadow: 0px 0px 2px;
      padding: 0.5em 0.6em;
      background-color: transparent;
      color: $primary-text;
    }
  }
}

.post {
  background-color: #fff;
  flex-basis: 30%;
  .description,
  .title {
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
  }
}
</style>