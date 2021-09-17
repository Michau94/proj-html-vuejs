<template>
  <div class="card d-flex wrapper" :class="cardType">
    <div class="icon"><i :class="icon"></i></div>
    <div class="title">{{ title }}</div>
    <div class="description">{{ text }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "text", "cardType", "icon"],
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