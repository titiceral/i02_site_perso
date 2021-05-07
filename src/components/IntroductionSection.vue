<template>
  <div class="hero is-fullheight has-background">
    <div class="hero-background">
      <img
        alt="présentation micro entreprise emmanuel Trivis"
        class="is-transparent img-hero"
        src="../assets/fond_1.png"
      />
    </div>

    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <b-navbar
        class="is-fixed-top blured"
        v-bind:class="{ 'is-active': dataScroll != 0 }"
      >
        <template #start>
          <b-navbar-item href="#cv">
            <b-icon icon="badge-account-outline" size="is-small"> </b-icon>
            <span>CV</span>
          </b-navbar-item>
          <b-navbar-item href="#votre_besoin">
            <b-icon icon="radar" size="is-small"> </b-icon>
            <span>Votre Besoin</span>
          </b-navbar-item>
          <b-navbar-item href="#rse">
            <b-icon icon="bee-flower" size="is-small"> </b-icon>
            <span>RSE</span>
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary" @click="isContactActive = true">
                <strong>Me Contacter</strong>
              </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">Emmanuel Trivis - Freelance</p>
        <p class="subtitle">Ingénieur d'Etudes et Développement Informatique</p>
        <p class="is-size-7 is-italic">
          Statut Micro entrepreneur : SIREN 880 279 708
        </p>
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

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot" style="position: inherit; margin-bottom: 2em">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Expérience</p>
            <p class="title">+13 ans</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Compétences</p>
            <p class="title">Full Stack et +</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Localisation</p>
            <p class="title">Région Lyonnaise</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Le +</p>
            <p class="title">
              -20% € en CII<a
                href="https://www.economie.gouv.fr/entreprises/credit-impot-innovation"
                target="blank"
                >*</a
              >
            </p>
          </div>
        </div>
      </nav>
    </div>

    <b-modal v-model="isContactActive" has-modal-card trap-focus>
      <contact-me></contact-me>
    </b-modal>
  </div>
</template>

<script>
import ContactMe from "../components/ContactMe.vue";
export default {
  components: {
    ContactMe,
  },
  data() {
    return {
      dataScroll: 0,
      isContactActive: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
  },
  methods: {
    onScroll() {
      this.dataScroll = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped></style>
