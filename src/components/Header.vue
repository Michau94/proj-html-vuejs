<template>
  <header class="d-flex align-items-center">
    <div class="container">
      <div class="row h-100">
        <div class="col-6">
          <figure class="h-100 d-flex align-items-center">
            <img
              class="img-fluid"
              :src="require('../assets/images/construction_logo.png')"
              alt="Logo"
            />
          </figure>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-end">
          <nav class="d-flex">
            <ul class="d-flex align-items-center">
              <li
                v-for="(link, index) in linkprop"
                :key="link.id"
                class="mx-4 d-flex align-items-center"
                @click="currentLink(index)"
              >
                <a :class="{ active: link.selected }" :href="link.path">{{
                  link.title
                }}</a>
                <span
                  class="arrow-down"
                  :class="{ active: link.selected }"
                ></span>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <Button text="Get Quote" buttonType="basic" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>



<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  components: { Button },
  props: ["linkprop"],
  data() {
    return {};
  },
  methods: {
    currentLink(idx) {
      this.linkprop.forEach((el, ind) => {
        ind == idx ? (el.selected = true) : (el.selected = false);
      });
    },
  },
};
</script>



<style lang="scss" scoped>
@import "../scss/vars";
header {
  height: 100px;
  width: 100%;
  figure {
    margin: 0;
  }
}

nav {
  ul {
    list-style-type: none;
    margin: 0;
    li {
      text-transform: uppercase;
      font-weight: 200;
      height: 100px;
      position: relative;
      a {
        text-decoration: none;
        color: $primary-text;
        &:hover {
          color: $secondary;
        }
      }
    }
  }

  div {
    width: 120px;
  }
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #fff;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%);
  opacity: 0;
}

.active {
  color: $secondary;
  opacity: 1;
}
</style>
