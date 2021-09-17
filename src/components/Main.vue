<template>
  <div>
    <!-- jumbo -->
    <Banner />

    <Slogan />

    <!-- cards -->
    <section id="Specialist">
      <Heading
        title="Specialists in modern construction"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            "
      />
      <div class="cards d-flex justify-content-evenly my-3">
        <Card
          cardType="alternative"
          title="Buildings"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                "
        >
          <div class="icon"><i class="fas fa-building fa-2x m-3"></i></div>
        </Card>
        <Card
          cardType="alternative"
          title="Renovate"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                "
        >
          <div class="icon"><i class="fas fa-sync-alt fa-2x m-3"></i></div>
        </Card>
        <Card
          cardType="alternative"
          title="Construct"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                "
        >
          <div class="icon"><i class="fas fa-home fa-2x m-3"></i></div>
        </Card>
        <Card
          cardType="alternative"
          title="Exclusive"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                "
        >
          <div class="icon"><i class="fas fa-truck fa-2x m-3"></i></div>
        </Card>
      </div>
    </section>

    <!-- hammer banner  -->
    <Home bg="background">
      <div class="cards h-100 d-flex justify-content-evenly align-items-center">
        <Card title="147" text="Buildings" cardType="basic">
          <i class="fas fa-suitcase fa-5x"></i>
        </Card>
        <Card title="896" text="Completed Projects" cardType="basic">
          <i class="far fa-building fa-5x"></i>
        </Card>
        <Card title="172" text="Trained Professionals" cardType="basic">
          <i class="fas fa-users fa-5x"></i>
        </Card>
        <Card title="19" text="International Offices" cardType="basic">
          <i class="fas fa-globe fa-5x"></i>
        </Card>
      </div>
    </Home>

    <!-- recent work  -->
    <section id="projects">
      <Heading
        title="Explore Recent Work"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet dicta ipsam beatae earum aut. Corporis consequatur dolorum similique facilis veritatis nostrum non"
      />
      <div class="d-flex align-items-center justify-content-evenly col-12">
        <ProjectCard prj="prj1" />
        <ProjectCard prj="prj2" />
        <ProjectCard prj="prj3" />
      </div>
      <Showmore text="View All Projects" />
    </section>

    <!-- core values -->
    <section id="values">
      <Heading
        title="Our Core Values"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
      />
      <div class="cards d-flex justify-content-evenly my-5">
        <ValuesCard
          title="Great Services"
          text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          icon="first fas fa-home fa-3x"
        />
        <ValuesCard
          title="Highest Standards"
          text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          icon="second fas fa-cog fa-3x"
        />

        <ValuesCard
          title="Professional Team"
          text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          icon="fas third fa-users fa-3x"
        />
        <ValuesCard
          title="Creative Solutions"
          text="Corporis consequatur dolorum similique
            facilis veritatis nostrum"
          icon="fourth fas fa-lightbulb fa-3x"
        />
      </div>
    </section>

    <!-- testimonials -->
    <section
      id="testimonial"
      class="background2 text-light d-flex flex-column align-items-center"
    >
      <Heading title="Our Home Owners Say" />
      <figure>
        <img
          class="rounded-circle img-fluid"
          src="../assets/images/home-testimonial-113165296.jpg"
          alt=""
        />
      </figure>

      <p class="text-italic p-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        ducimus earum debitis adipisci nostrum exercitationem in neque,
        assumenda ipsum, quas provident dolor eius quasi. Dolore modi accusamus
        blanditiis ut aliquid.
      </p>

      <h6 class="text-uppercase">Harry Smith - New Home Owner</h6>
      <div class="slider p-3">
        <i class="fas fa-circle px-1"></i>
        <i class="far fa-circle"></i>
      </div>
    </section>

    <!-- latest news -->
    <section id="news" sectionType="alternative">
      <Heading
        title="Latest News"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?
            "
      />
      <div class="d-flex justify-content-evenly col-12">
        <News
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
        </News>
        <News
          title="How We Manage Large Construction Projects"
          text="Corporis consequatur dolorum similique
              facilis veritatis nostrum non repudiandae, ratione vero libero
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
        >
          <img
            src="../assets/images/blog-post-92486644-400x241.jpg"
            alt="post-1"
          />
        </News>
        <News
          title="Future proofing a modern home"
          text="Corporis consequatur dolorum similique
              facilis veritatis nostrum non repudiandae, ratione vero libero
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
            dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
        >
          <img
            src="../assets/images/blog-post-332773904-400x241.jpg"
            alt="post-1"
          />
        </News>
      </div>
      <Showmore text="View More Articles" />
    </section>

    <!-- partners -->
    <section id="partners">
      <Heading
        title="Trusted Partners"
        text=" Corporis consequatur dolorum similique
            facilis veritatis nostrum non repudiandae, ratione vero libero nihil
            debitis?"
      />
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
    </section>

    <!-- pre footer -->
    <section id="prefooter" class="background3">
      <div class="d-flex align-items-center h-100">
        <div class="col-8">
          <div class="content">
            <Heading
              mod="light"
              title="Building Inspiring Spaces"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
              dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
              facilis veritatis nostrum non repudiandae, ratione vero libero nihil
              debitis?"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="h-100 align-items-center">
            <Button buttonType="basic" text="Get a Free Quote Today!" />
            <div class="text-light">Only takes a few seconds!</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Slogan from "./Slogan.vue";
import Heading from "./Heading.vue";
import Home from "./Home.vue";
import Card from "./Card.vue";
import ProjectCard from "./ProjectCard.vue";
import ValuesCard from "./ValuesCard.vue";
import News from "./News.vue";

import Showmore from "./Showmore.vue";
import Button from "./Button.vue";

export default {
  name: "Main",
  components: {
    Banner,
    Slogan,
    Heading,
    ProjectCard,
    ValuesCard,
    News,
    Home,
    Card,
    Showmore,
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
@import "../scss/_main";

.background {
  background-image: url("../assets/images/home-244125289.jpg");
  background-size: cover;
  background-position: center;
}
.background2 {
  background-image: url("../assets/images/home-parallax-144609983.jpg");
  background-size: cover;
  background-position: center;
}

.background3 {
  background-image: url("../assets/images/about-call-to-action-57862405.jpg");
  background-size: cover;
  background-position-y: 70%;
  height: 350px;
}
</style>