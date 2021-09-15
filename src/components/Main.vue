<template>
  <div>
    <Banner />

    <section class="question d-flex justify-content-center align-items-center">
      <h4>Do you have a construction project we can help with?</h4>
      <button class="btn">Get a Quote Today</button>
    </section>

    <Services
      title="Specialists in modern construction"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
          facilis veritatis nostrum non repudiandae, ratione vero libero nihil
          debitis?"
    >
      <div class="cards d-flex justify-content-evenly my-5">
        <Card
          cardType="alternative"
          title="Buildings"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,"
        >
          <i class="far fa-building fa-2x m-3"></i>
        </Card>
        <Card
          cardType="alternative"
          title="Buildings"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,"
        >
          <i class="far fa-building fa-2x m-3"></i>
        </Card>

        <Card
          cardType="alternative"
          title="Buildings"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,"
        >
          <i class="far fa-building fa-2x m-3"></i>
        </Card>
        <Card
          cardType="alternative"
          title="Buildings"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              mollitia culpa harum ullam labore,"
        >
          <i class="far fa-building fa-2x m-3"></i>
        </Card>
      </div>
    </Services>

    <div class="upper-wave"></div>

    <Home bg="background">
      <div class="cards h-100 d-flex justify-content-evenly align-items-center">
        <Card title="147" text="Buildings" cardType="basic">
          <i class="fas fa-suitcase fa-5x"></i>
        </Card>
        <Card title="147" text="Buildings" cardType="basic">
          <i class="fas fa-suitcase fa-5x"></i>
        </Card>
        <Card title="147" text="Buildings" cardType="basic">
          <i class="fas fa-suitcase fa-5x"></i>
        </Card>
        <Card title="147" text="Buildings" cardType="basic">
          <i class="fas fa-suitcase fa-5x"></i>
        </Card>
      </div>
    </Home>

    <Services
      title="Explore Recent Work"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet dicta ipsam beatae earum aut. Corporis consequatur dolorum similique facilis veritatis nostrum non"
    >
      <div class="d-flex align-items-center justify-content-evenly col-7">
        <div>
          <img
            src="../assets/images/project1-featured-294276386-200x200.jpg"
            alt="prj1"
          />
        </div>
        <div>
          <img
            src="../assets/images/project2-featured-15013609-200x200.jpg"
            alt="prj2"
          />
        </div>
        <div>
          <img
            src="../assets/images/project3-featured-189023420-200x200.jpg"
            alt="prj3"
          />
        </div>
      </div>

      <!-- fare componente  -->
      <template v-slot:bottom>
        <div class="d-flex justify-content-center align-items-center col-12">
          <div class="line"></div>
          <h5 class="px-5">View all projects</h5>
          <div class="line"></div>
        </div>
      </template>
    </Services>

    <section id="values">
      <Services
        sectionType="alternative"
        title="Our Core Values"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
      >
        <div class="cards d-flex justify-content-evenly my-5">
          <Card
            cardType="standard"
            title="Great Services"
            text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          >
            <div class="icon"><i class="fas fa-home fa-3x"></i></div>
            <template v-slot:middle>
              <div class="d-flex justify-content-center">
                <hr class="w-25" />
              </div>
            </template>
          </Card>
          <Card
            cardType="standard"
            title="Great Services"
            text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          >
            <span class="icon"><i class="fas fa-home fa-3x"></i></span>
            <template v-slot:middle>
              <div class="d-flex justify-content-center">
                <hr class="w-25" />
              </div>
            </template>
          </Card>
          <Card
            cardType="standard"
            title="Great Services"
            text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          >
            <span class="icon"><i class="fas fa-home fa-3x"></i></span>
            <template v-slot:middle>
              <div class="d-flex justify-content-center">
                <hr class="w-25" />
              </div>
            </template>
          </Card>
          <Card
            cardType="standard"
            title="Great Services"
            text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          >
            <span class="icon"><i class="fas fa-home fa-3x"></i></span>
            <template v-slot:middle>
              <div class="d-flex justify-content-center">
                <hr class="w-25" />
              </div>
            </template>
          </Card>
        </div>
      </Services>
    </section>
    <Home bg="background2">
      <Services title="Our Home Owners Say" sectionType="testimonial">
        <figure class="col-2">
          <img
            class="rounded-circle img-fluid"
            src="../assets/images/home-testimonial-113165296.jpg"
            alt=""
          />
        </figure>

        <template v-slot:middle>
          <p class="text-italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            ducimus earum debitis adipisci nostrum exercitationem in neque,
            assumenda ipsum, quas provident dolor eius quasi. Dolore modi
            accusamus blanditiis ut aliquid.
          </p>
          <h6 class="text-uppercase">Harry Smith - New Home Owner</h6>
          <div class="slider">
            <i class="fas fa-circle px-1"></i>
            <i class="far fa-circle"></i>
          </div>
        </template>
      </Services>
    </Home>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Services from "./Services.vue";
import Home from "./Home.vue";
import Card from "./Card.vue";

export default {
  name: "Main",
  components: {
    Banner,
    Services,
    Home,
    Card,
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

.line {
  height: 1px;
  width: 25%;
  background-color: grey;
}

figure {
  margin: 0;
}
</style>