<template>
  <div class="card d-flex" :class="cardType">
    <slot></slot>

    <div class="title">{{ title }}</div>

    <slot name="middle"></slot>

    <div class="description">{{ text }}</div>

    <slot name="bottom"></slot>
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
  background: transparent;
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
  background: transparent;
  border: transparent;
  color: #1e1e1e;
  font-weight: 200;
  .title {
    color: Black;
    font-size: 1.2rem;
  }
  flex-basis: 20%;
  padding: 10px;
  .icon {
    i.far,
    i.fas {
      display: inline-block;
      border-radius: 50%;
      box-shadow: 0px 0px 2px;
      padding: 0.5em 0.6em;
    }
    i.fas {
      background-color: cadetblue;
      color: #fff;
    }
  }

  i {
    color: #fff;
  }
}

.alternative {
  background: lightgray;
  color: #1e1e1e;
  font-weight: 200;
  .title {
    color: Black;
    font-size: 1.5rem;
    font-weight: 500;
  }

  flex-basis: 20%;
  padding: 10px;
}

.post {
  background-color: #fff;
  flex-basis: 30%;
  .description {
    padding: 15px;
  }
}
</style>