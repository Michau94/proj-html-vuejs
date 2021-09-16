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
      <template v-slot:bottom>
        <Showmore text="View All Projects" />
      </template>
    </Services>

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

    <Services
      sectionType="alternative"
      title="Latest News"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?
            "
      ><div class="d-flex justify-content-evenly col-12">
        <Card
          cardType="post"
          title="Redeveloping Florida's Remote Southern Coast"
          text="Corporis consequatur dolorum similique
              facilis veritatis nostrum non repudiandae, ratione vero libero
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
        >
          <img
            src="../assets/images/blog-post-134132600-400x241.jpg"
            alt="post-1"
          />
          <template v-slot:middle>
            <Separator>
              <date> December 3</date>
            </Separator>
          </template>
        </Card>
        <Card
          cardType="post"
          title="Redeveloping Florida's Remote Southern Coast"
          text="Corporis consequatur dolorum similique
              facilis veritatis nostrum non repudiandae, ratione vero libero
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
        >
          <img
            src="../assets/images/blog-post-134132600-400x241.jpg"
            alt="post-1"
          />
          <template v-slot:middle>
            <Separator>
              <date> December 3</date>
            </Separator>
          </template>
        </Card>
        <Card
          cardType="post"
          title="Redeveloping Florida's Remote Southern Coast"
          text="Corporis consequatur dolorum similique
              facilis veritatis nostrum non repudiandae, ratione vero libero
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
        >
          <img
            src="../assets/images/blog-post-134132600-400x241.jpg"
            alt="post-1"
          />
          <template v-slot:middle>
            <Separator>
              <date> December 3</date>
            </Separator>
          </template>
        </Card>
      </div>
      <template v-slot:bottom>
        <Showmore text="Show More Articles" />
      </template>
    </Services>

    <Services
      title="Trusted Partners"
      text=" Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
    >
      <div class="d-flex justify-content-evenly col-12">
        <figure class="col-2">
          <img
            class="h-50"
            src="../assets/images/home-logo11-219096700-320x202.png"
            alt=""
          />
        </figure>
        <figure class="col-2">
          <img
            class="h-50"
            src="../assets/images/home-logo10-219096700-320x202.png"
            alt=""
          />
        </figure>
        <figure class="col-2">
          <img
            class="h-50"
            src="../assets/images/home-logo1-219096700-320x202.png"
            alt=""
          />
        </figure>
        <figure class="col-2">
          <img
            class="h-50"
            src="../assets/images/home-logo2-219096700-320x202.png"
            alt=""
          />
        </figure>
        <figure class="col-2">
          <img
            class="h-50"
            src="../assets/images/home-logo9-219096700-320x202.png"
            alt=""
          />
        </figure>
      </div>
    </Services>

    <Home bg="background3">
      <div class="d-flex align-items-center h-100">
        <div class="col-8">
          <Services
            sectionType="light"
            alternative="align-left"
            title="Building Inspiring Spaces"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
              dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
              facilis veritatis nostrum non repudiandae, ratione vero libero nihil
              debitis?"
          />
        </div>
        <div class="col-4">
          <button class="btn my-3">Get a Free Quote Today</button>
          <div class="text-light">Only takes a few seconds!</div>
        </div>
      </div>
    </Home>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Services from "./Services.vue";
import Home from "./Home.vue";
import Card from "./Card.vue";
import Separator from "./Separator.vue";
import Showmore from "./Showmore.vue";

export default {
  name: "Main",
  components: {
    Banner,
    Services,
    Home,
    Card,
    Separator,
    Showmore,
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

.btn {
  background-color: $secondary;
}

figure {
  margin: 0;
}
</style>