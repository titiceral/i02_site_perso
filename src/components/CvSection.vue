<template>
  <div>
    <div class="hero-background">
      <img
        alt="présentation micro entreprise emmanuel Trivis"
        class="is-transparent img-hero"
        src="../assets/fond_2.svg"
      />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-left">
        <p class="title mt-5">Mon Parcours</p>
        <div class="media">
          <div class="media-left is-vbottom">
            <br />
            <figure class="image is-128x128">
              <img
                class="is-rounded is-square"
                :src="require('@/assets/hope_square.jpg')"
              />
            </figure>
          </div>
          <div class="media-content">
            <h3 class="title is-4 is-spaced bd-anchor-title">
              <span class="bd-anchor-name">Ma Recherche</span>
            </h3>
            <p>
              Ingénieur Informatique depuis plus de 13 ans, je suis à la
              recherche de missions
              <strong>d’assistance technique dans le développement</strong>.
            </p>

            <p>
              Expérimenté et pluridisciplinaire, je suis capable de m'adapter
              rapidement aux langages, métiers et besoins. Mes multiples
              missions m'ont amené à livrer avec succès des solutions
              <strong> web, mobile (iOs) et logiciel</strong> ainsi que
              d'assurer la <strong>TMA</strong> de plusieurs solutions.
            </p>
            <p>
              Mon objectif de collaboration est d’établir un partenariat de
              confiance avec mon client sur le
              <strong>long terme</strong> pour que chacun se fasse grandir et
              pérennise ses investissements. Etant très réactif et à l’aise
              techniquement sur toutes les couches de développement, cela peut
              prendre la forme de missions de courtes ou moyennes durées qui me
              permettront de comprendre les enjeux et les besoins techniques du
              projet, puis de déboucher sur des missions d’appoints ou une
              collaboration de TMA.
            </p>
          </div>
        </div>

        <div class="media">
          <div class="media-left is-vcentered">
            <br />
            <figure class="image is-128x128">
              <img
                class="is-rounded is-square"
                :src="require('@/assets/gift.jpg')"
              />
            </figure>
          </div>
          <div class="media-content">
            <h3 class="title is-4 is-spaced bd-anchor-title">
              <span class="bd-anchor-name">Avantages</span>
            </h3>
            <p>
              En plus de mes compétence techniques et professionnel. Mon savoir
              faire à été reconnu par
              <strong>l'obtention de l'agrément crédit impot innovation</strong>
              délivré par le ministère de l'économie et des finances. Cette
              reconnaissance permet à mes clients novateurs de
              <strong>déduire 20% du montant de mes factures</strong>. (jusqu'à
              20% du montant investit sur des projets innonvant peut être
              remboursé par l'état en crédit impot. *Conditions)
            </p>
          </div>
        </div>

        <div class="media">
          <div class="media-left is-vcentered">
            <br />
            <figure class="image is-128x128">
              <img
                class="is-rounded is-square"
                :src="require('@/assets/cv.jpg')"
              />
            </figure>
          </div>
          <div class="media-content">
            <h3 class="title is-4">Mon CV</h3>

            <p>
              Vous retrouverez mon parcours profesionnel détaillé dans mon
              <a :href="this.$store.state.dossierCompetencePath" target="blank">
                <b-icon icon="download"> </b-icon>
                <strong> Dossier de Compétences </strong>
                <b-icon icon="download"> </b-icon>
              </a>
              (maj mai 2021). Je vous invite également à me suivre sur
              <a :href="this.$store.state.linkedinPath" target="blank">
                Linkedin
                <b-icon icon="link-variant"> </b-icon>
              </a>
              ou
              <a :href="this.$store.state.maltPath" target="blank"
                >Malt
                <b-icon icon="link-variant"> </b-icon>
              </a>
              afin d'échanger directement ensemble.
            </p>
            <p>
              Les langages pratiqués sont nombreux, les principaux étant :
              <strong> C#, VueJs, C++, .Net Core et SQL</strong>.
            </p>
            <div class="buttons is-centered mt-2">
              <a class="button is-primary" href="#votre_besoin">
                Comparez à votre besion
                <b-icon icon="steam" class="pl-5 mr-2"> </b-icon
              ></a>
            </div>
          </div>
        </div>
        <div class="media">
          <div class="media-content container">
            <h3 class="title is-4 is-spaced bd-anchor-title">
              <span class="bd-anchor-name">Clients</span>
            </h3>
            <b-carousel-list
              :data="itemReassurances"
              :arrow="false"
              :arrow-hover="false"
              :items-to-show="6"
              :items-to-list="1"
              :has-drag="false"
              :autoplay="true"
              style="background-color: aliceblue"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style lang="scss" scoped></style>
