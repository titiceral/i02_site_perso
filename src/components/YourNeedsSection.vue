<template>
  <div class="hero is-fullheight has-background">
    <div class="hero-background">
      <img
        alt="cibler votre besoin"
        class="is-transparent img-hero-cover"
        src="../assets/target_blue.jpg"
      />
    </div>
    <div class="hero-body" id="RadarMousePosRef">
      <div class="container has-text-left">
        <p class="title mt-5">
          Cibler votre besoin
          <a :href="this.$store.state.dossierCompetencePath" target="blank">
            <b-icon icon="download"> </b-icon>
          </a>
        </p>
        <div class="columns has-text-centered">
          <div class="column has-text-centered">
            <radar
              unit="ans"
              title="Langages : Années d'Expérience"
              :max="this.maxYears"
              :indicatorsNames="this.languagesLabels"
              :staticValues="
                this.valuesFromCompetencies(
                  this.languagesLabels,
                  'languages',
                  this.maxYears
                )
              "
            ></radar>
            <p class="is-size-7 is-italic radar-sublegend">
              Nombre d'années de pratique des principaux langages.
            </p>
          </div>
          <div class="column">
            <radar
              unit=""
              title="Langages : Maîtrise Technique"
              :max="this.maxLevels"
              :indicatorsNames="this.languagesLabels"
              :scaleTranslation="this.competenciesTranslation"
              :staticValues="this.studiedLanguages.map((v) => v.competency)"
            ></radar>
            <p class="is-size-7 is-italic radar-sublegend">
              Estimation du % de connaissance des principaux langages et de
              leurs environnements.
            </p>
          </div>
          <div class="column">
            <radar
              unit="ans"
              title="Domaines : Années d'Expérience"
              :max="this.maxYears"
              :indicatorsNames="this.studiedDomains"
              :staticValues="
                this.valuesFromCompetencies(
                  this.studiedDomains,
                  'type_project',
                  this.maxYears
                )
              "
            ></radar>
            <p class="is-size-7 is-italic radar-sublegend">
              Nombre d'années de pratique des principaux domaines.
            </p>
          </div>
        </div>

        <div class="columns border-media">
          <div class="column is-4">
            <p class="title is-5">Localisation Possible :</p>
            <p class="is-size-7 is-italic">
              Je peux me déplacer quotidiennement dans une zone de 30min autour
              de Lyon. Suivant la mise en place de télétravail, il me sera
              possible d'aller plus loin.
            </p>
          </div>
          <div class="column is-8">
            <div style="height: 40vh">
              <l-map
                :zoom="zoom"
                :center="center"
                :fadeAnimation="false"
                :options="{ scrollWheelZoom: false }"
              >
                <l-tile-layer :url="url"></l-tile-layer>
                <l-circle
                  :lat-lng="center"
                  :radius="20000"
                  fillColor="#ff8e8e"
                  color="#fef7f7"
                />
              </l-map>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-footer has-text-right">
      Photo by
      <a
        href="https://unsplash.com/@possessedphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        rel="nofollow"
        target="blank"
        >Possessed Photography</a
      >
      on
      <a
        href="https://unsplash.com/s/photos/target?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        rel="nofollow"
        target="blank"
        >Unsplash</a
      >
    </div>
  </div>
</template>

<script>
import Radar from "../components/Echarts/Radar.vue";
// dossier de compétence excell vers json https://beautifytools.com/excel-to-json-converter.php
import { competencies } from "../assets/Data/Competences";

import { LMap, LTileLayer, LCircle } from "vue2-leaflet";

export default {
  components: {
    Radar,
    LMap,
    LTileLayer,
    LCircle,
  },
  data() {
    return {
      maxYears: 6,
      maxLevels: 3,

      studiedLanguages: [
        { language: "C++", competency: (75 / 100) * 3 },

        { language: "SGBD Sql", competency: (90 / 100) * 3 },

        { language: "PostGis", competency: (70 / 100) * 3 },
        { language: "VueJs", competency: (75 / 100) * 3 },
        { language: "C#", competency: (80 / 100) * 3 },
      ],

      studiedDomains: ["Web/Api", "TMA", "Mobile", "Algorithmie", "Logiciel"],
      competenciesTranslation: { 1: "Débutant", 2: "Expérimenté", 3: "Expert" },

      // map
      zoom: 10,
      center: [45.845880779380046, 4.863302327618052],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };
  },

  computed: {
    languagesLabels() {
      return this.studiedLanguages.map((v) => v.language);
    },
  },
  methods: {
    // get number of month worked according to a languages,domains and ... in competencies file
    // competencyLabels : values to get moth experience
    //  competenceName : column  names (langages | domaines)
    valuesFromCompetencies(competencyLabels, competenceName, max) {
      var values = new Array();

      for (var competencyItem in competencyLabels) {
        // look fom compétences in data
        var competencyLabel = competencyLabels[competencyItem];
        var indicatorCompetencies = competencies.filter((competency) =>
          competency[competenceName].includes(competencyLabel)
        );

        // push values from data.js, from month to years and clamp to max
        values.push(
          Math.min(
            max,
            (
              indicatorCompetencies.reduce(
                (prev, next) => prev + parseInt(next.mois),
                0
              ) / 12.0
            ).toFixed(1)
          )
        );
      }
      return values;
    },
  },
};
</script>
