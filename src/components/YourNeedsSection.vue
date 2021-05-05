<template>
  <div>
    <div class="hero-background">
      <img
        alt="cibler votre besoin"
        class="is-transparent img-hero-cover"
        src="../assets/target_blue.jpg"
      />
    </div>
    <div class="hero-body" id="RadarMousePosRef">
      <div class="container has-text-left">
        <p class="title mt-5">Cibler votre besoin</p>
        <div class="columns has-text-centered">
          <div class="column">
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
            <p class="is-size-7 is-italic">
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
            <p class="is-size-7 is-italic">
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
            <p class="is-size-7 is-italic">
              Nombre d'années de pratique des principaux domaines.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Radar from "../components/Echarts/Radar.vue";
// dossier de compétence excell vers json https://beautifytools.com/excel-to-json-converter.php
import { competencies } from "../assets/Data/Competences";

export default {
  data() {
    return {
      maxYears: 6,
      maxLevels: 3,

      studiedLanguages: [
        { language: "C++", competency: (75 / 100) * 3 },

        { language: "SGBD Sql", competency: (90 / 100) * 3 },

        { language: "PostGis", competency: (65 / 100) * 3 },
        { language: "VueJs", competency: (75 / 100) * 3 },
        { language: "C#", competency: (80 / 100) * 3 },
      ],

      studiedDomains: ["Web/Api", "TMA", "Mobile", "Algorithmie", "Logiciel"],
      competenciesTranslation: { 1: "Débutant", 2: "Compétant", 3: "Expert" },
    };
  },
  components: {
    Radar,
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
