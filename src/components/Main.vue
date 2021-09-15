<template>
  <div>
    <Banner />

    <section class="question d-flex justify-content-center align-items-center">
      <h4>Do you have a construction project we can help with?</h4>
      <button class="btn">Get a Quote Today</button>
    </section>

    <!-- rivedere riutilizzabilità di services -->
    <Services
      title="Specialists in modern construction"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
          facilis veritatis nostrum non repudiandae, ratione vero libero nihil
          debitis?"
    >
      <div class="cards d-flex justify-content-evenly my-5">
        <div class="card">
          <span class="icon">
            <i class="far fa-building fa-2x m-3"></i>
            <h3>Buildings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,
            </p>
          </span>
        </div>
        <div class="card">
          <span class="icon">
            <i class="far fa-building fa-2x m-3"></i>
            <h3>Buildings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,
            </p>
          </span>
        </div>
        <div class="card">
          <span class="icon">
            <i class="far fa-building fa-2x m-3"></i>
            <h3>Buildings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,
            </p>
          </span>
        </div>
        <div class="card">
          <span class="icon">
            <i class="far fa-building fa-2x m-3"></i>
            <h3>Buildings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,
            </p>
          </span>
        </div>
      </div>
    </Services>

    <div class="upper-wave"></div>

    <Home />

    <Services
      title="Explore Recent Work"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet dicta ipsam beatae earum aut. Corporis consequatur dolorum similique facilis veritatis nostrum non"
    >
      <div class="d-flex align-items-center justify-content-between">
        <figure class="mx-1">
          <img
            src="../assets/images/project1-featured-294276386-400x400.jpg"
            alt="prj1"
          />
        </figure>
        <figure class="mx-1">
          <img
            src="../assets/images/project2-featured-15013609-400x400.jpg"
            alt="prj2"
          />
        </figure>
        <figure class="mx-1">
          <img
            src="../assets/images/project3-featured-189023420-400x400.jpg"
            alt="prj3"
          />
        </figure>
      </div>
    </Services>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Services from "./Services.vue";
import Home from "./Home.vue";
export default {
  name: "Main",
  components: {
    Banner,
    Services,
    Home,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.question {
  height: 100px;
  background-color: $secondary;
  position: relative;

  h4 {
    text-transform: capitalize;
  }
  button {
    background-color: $explore-btn;
    color: #fff;
    position: absolute;
    right: 50%;
    transform: translate(50%);
    bottom: -20px;
  }
}

.card {
  background-color: $card-back;
  flex-basis: 20%;

  padding: 10px;
  .icon {
    i.far {
      display: inline-block;
      border-radius: 60px;
      box-shadow: 0px 0px 2px grey;
      padding: 0.5em 0.6em;
    }
  }
}
</style>