<template>
  <div class="home" @scroll.passive="handleScroll">
    <section id="intro">
      <introduction-section> </introduction-section>
    </section>
    <section id="cv" class="hero is-fullheight has-background">
      <cv-section></cv-section>
    </section>
    <section id="votre_besoin" class="hero is-fullheight has-background">
      <your-needs-section> </your-needs-section>
    </section>
    <section id="cv" class="hero is-fullheight has-background">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Emmanuel Trivis - Freelance</p>
          <p class="subtitle">Ingénierie et Développement Informatique</p>
        </div>
        <div class="container">
          <img
            alt="Vue logo"
            :src="require('@/assets/meet_logo.png')"
            width="256"
            height="256"
          />
        </div>
      </div>
    </section>
    <section id="rse" class="hero is-fullheight has-background">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Emmanuel Trivis - Freelance</p>
          <p class="subtitle">Ingénierie et Développement Informatique</p>
        </div>
        <div class="container">
          <img
            alt="Vue logo"
            :src="require('@/assets/meet_logo.png')"
            width="256"
            height="256"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import IntroductionSection from "../components/IntroductionSection.vue";
import CvSection from "../components/CvSection.vue";
import YourNeedsSection from "../components/YourNeedsSection.vue";
export default {
  components: {
    IntroductionSection,
    CvSection,
    YourNeedsSection,
  },
  data() {
    return {
      dataScroll: 0,

      itemReassurances: [
        {
          alt: "Nuvia",
          title: "Nuvia",
          image: require("@/assets/reassurance/nuvia.svg"),
        },
        {
          title: "Veolia",
          image: require("../assets/reassurance/veolia.png"),
        },
        {
          title: "Fresenius",
          image: require("../assets/reassurance/fresenius.png"),
        },
        {
          title: "Idex",
          image: require("../assets/reassurance/idex.png"),
        },
        {
          title: "EGL",
          image: require("../assets/reassurance/egl.png"),
        },
        {
          title: "LICTI-ENTPE-IFSTTAR",
          image: require("../assets/reassurance/ifsttar.png"),
        },
        {
          title: "EADS",
          image: require("../assets/reassurance/eads.png"),
        },
        {
          title: "DGA",
          image: require("../assets/reassurance/dga.svg"),
        },
      ],
    };
  },
};
</script>
