<template>
  <footer>
    <div class="wrapper h-100 d-flex align-items-center py-3">
      <div class="container">
        <div class="row">
          <div id="about" class="col-3">
            <div class="content text-start mx-3">
              <figure>
                <img src="../assets/images/footer-logo.png" alt="" />
              </figure>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                doloremque laudantium minus repudiandae non vero a repellat
                cupiditate tempora, quaerat minima alias id, animi optio,
                deleniti et vel fuga eos.
              </p>
              <Button text="Get a Free Quote Today!" />
            </div>
          </div>
          <div id="social" class="col-3">
            <div class="content mx-3">
              <h4 class="text-bold text-start">Last Tweets</h4>
              <div class="d-flex justify-content-between">
                <div class="d-flex text-light">
                  <figure
                    class="d-flex align-items-center justify-content-center"
                  >
                    <img
                      class="h-50"
                      src="../assets/images/3a74ce3d0532b7773b174c45ca3bd05a_normal.png"
                      alt="logo"
                    />
                  </figure>
                  <div>
                    <div class="text-bold">Theme Fusion</div>
                    <div class="text-secondary">@ThemeFusion</div>
                  </div>
                </div>
                <div>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
              <p class="text-start text-light offset-2">
                Lorem ipsum dolor sit ametconsectetur
                <a href="#">#consectetur</a> adipisicing elit. A modi illo,
                veritatis quaerat
              </p>
              <figure class="col-12">
                <img
                  src="../assets/images/En2TRxLW4AEiWUN.jpeg"
                  class="img-fluid"
                  alt=""
                />
              </figure>
              <div class="d-flex justify-content-between">
                <div class="icons">
                  <i class="far fa-heart mx-1"></i>
                  <i class="fas fa-sign-out-alt"></i>
                </div>
                <span>22h</span>
              </div>
            </div>
          </div>
          <div id="contact" class="col-3">
            <div class="content mx-3">
              <h4 class="text-bold text-start">Contact Us Today</h4>
              <ul class="w-100">
                <li>
                  <i class="fas fa-globe"></i>Corporate Location 1600
                  Amphitheatre Parkway London W4RT
                </li>
                <li>
                  <i class="fas fa-home"></i>REsidential Location 9521
                  Broadberry Avenue Paddigton RC7 9ZA
                </li>
                <li>
                  <i class="fas fa-phone"></i>1.800.458.556/18000.532.2112
                </li>
                <li><i class="far fa-envelope"></i>info#yourdomain.miao</li>
                <li>
                  <i class="far fa-clock"></i>Monday - Friday: 9:00AM - 6:00PM
                </li>
                <li>
                  <i class="far fa-clock"></i>Saturday - Sunday: 09:00 AM -
                  12:00AM
                </li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <h4 class="text-bold text-start">Find us</h4>

            <figure>
              <img
                src="../assets/images/construction_map_pin.png"
                class="img-fluid"
                alt="position"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <Credits />
  </footer>
</template>

<script>
import Button from "./Button.vue";
import Credits from "./Credits.vue";
export default {
  name: "Footer",
  components: {
    Button,
    Credits,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

footer {
  background-color: $primary-text;
  h4 {
    color: $secondary;
  }

  color: $explore-btn;
  #contact {
    ul {
      list-style-type: none;
      padding: 0;
      text-align: start;

      li {
        padding-left: 1.2rem;
        word-wrap: break-word;
        text-indent: -20px;
        margin: 10px 10px;

        i {
          display: inline-block;
          padding-right: 2rem;
        }
      }
    }
  }
}
</style>
