<template>
  <section id="services" class="py-4">
    <div class="col-12">
      <div class="content p-3 d-flex flex-column align-items-center">
        <h5>Specialists in modern construction</h5>
        <div class="separator my-3"></div>
        <p class="w-75">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel amet
          dicta ipsam beatae earum aut. Corporis consequatur dolorum similique
          facilis veritatis nostrum non repudiandae, ratione vero libero nihil
          debitis?
        </p>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";
#services {
  height: 500px;
  .separator {
    height: 2px;
    background-color: $secondary;
    width: 15%;
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
}
</style>