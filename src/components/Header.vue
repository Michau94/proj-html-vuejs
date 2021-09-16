<template>
  <header class="d-flex align-items-center">
    <div class="container-fluid">
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
            <div class="d-flex align-items-center">
              <ul class="d-flex align-items-center">
                <li v-for="link in links" :key="link.id" class="mx-2">
                  <a :href="link.path">{{ link.title }}</a>
                </li>
              </ul>
            </div>

            <div>
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
  data() {
    return {
      links: [
        {
          id: 1,
          title: "Home",
          path: "#",
        },
        {
          id: 2,
          title: "About",
          path: "#",
        },
        {
          id: 3,
          title: "Services",
          path: "#",
        },
        {
          id: 4,
          title: "Work",
          path: "#",
        },
        {
          id: 5,
          title: "Articles",
          path: "#",
        },
      ],
    };
  },
};
</script>



<style lang="scss" scoped>
@import "../scss/vars";
header {
  height: 100px;
  border: 1px solid black;
  width: 100%;
  figure {
    margin: 0;
  }
}

nav {
  ul {
    list-style-type: none;
    margin: 0;

    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
