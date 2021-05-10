<template>
  <div class="home" @scroll.passive="handleScroll">
    <section id="intro">
      <introduction-section> </introduction-section>
    </section>
    <section id="cv">
      <cv-section></cv-section>
    </section>
    <section id="votre_besoin">
      <your-needs-section> </your-needs-section>
    </section>
    <section id="rse">
      <rse-section> </rse-section>
    </section>
  </div>
</template>

<script>
import IntroductionSection from "../components/IntroductionSection.vue";
import CvSection from "../components/CvSection.vue";
import YourNeedsSection from "../components/YourNeedsSection.vue";
import RseSection from "../components/RseSection.vue";
export default {
  components: {
    IntroductionSection,
    CvSection,
    YourNeedsSection,
    RseSection,
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
