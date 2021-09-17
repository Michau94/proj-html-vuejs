<template>
  <div>
    <div class="project" :class="prj">
      <div class="sub-card py-2">
        <i class="fas fa-link p-3 m-2 bg-secondary rounded-circle"></i>
        <i class="fas fa-search p-3 m-2 bg-secondary rounded-circle"></i>
        <h5>Florida Health Facility</h5>
        <span>Commercial</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["prj"],
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.project {
  width: 200px;
  background-size: cover;
  height: 200px;
  background-position: center;
  position: relative;
  .sub-card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $secondary;
    display: none;
  }
  &:hover .sub-card {
    display: block;
  }
}
.prj1 {
  background-image: url(../assets/images/project1-featured-294276386-400x400.jpg);
}
.prj2 {
  background-image: url(../assets/images/project2-featured-15013609-400x400.jpg);
}
.prj3 {
  background-image: url(../assets/images/project3-featured-189023420-400x400.jpg);
}
</style>