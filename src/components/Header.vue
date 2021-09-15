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
        <div class="col-6 d-flex align-items-center">
          <nav class="d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center">
              <ul class="d-flex align-items-center justify-content-between">
                <li v-for="link in links" :key="link.id" class="mx-2">
                  <a :href="link.path">{{ link.title }}</a>
                </li>
              </ul>
            </div>

            <div>
              <button type="button" class="mx-2 btn btn-warning">
                Get Quote
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>



<script>
export default {
  name: "Header",
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
  height: 150px;
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
