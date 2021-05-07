<template>
  <div class="hero is-fullheight has-background">
    <div class="hero-head">
      <h1 class="title is-1">
        Responsabilité Sociétale des d'Entreprises
        <b-icon
          icon="
      bee"
        ></b-icon>
      </h1>
    </div>
    <div class="hero-body">
      <div class="container">
        <p>
          La création de mon entreprise est portée par 2 élements cruciaux :
          l'innovation et la pérennité.
        </p>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth"></div>
          <div class="column">
            <p class="subtitle is-3">Innovation</p>
            <p>
              Etre à l'écoute du Client, répondre à son besoin, innover ont
              toujours été mes objectifs professionnels.
            </p>
            <p>
              Concrétisation : L'obtention du crédit import innovation, suite à
              la soumission d'un de mes projets.
            </p>
            <p>
              Vieille technologique : Etre à l'écoute des nouvautés. Etre libre
              de se former
              <b-tooltip>
                <template v-slot:content>
                  <li>
                    <ul v-for="item in veilleTechnologiques" :key="item.year">
                      {{
                        item.year
                      }}
                      :
                      <a :href="item.link"> {{ item.label }}</a>
                    </ul>
                  </li>
                </template>
                *</b-tooltip
              >.
            </p>
            <p>
              Plaisir : Etre présent de l'appel d'offre jusqu'à la recette
              finale.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth"></div>
          <div class="column">
            <p class="subtitle is-3">Pérennité</p>
            <p>
              L'avenir dépendra de notre environnement, de notre capacité à le
              préserver et le restaurer.
            </p>
            <p>
              10% du CA net est réinvestit dans des financements participatifs
              pour le croissance verte : projets locaux, centrale
              photovoltaïque, valorisation des déchets, efficacité
              energétique...
            </p>
            <p>
              Démarche de responsable : Fournisseur Vert, Démarches au
              quotidient, Développement responsable...
            </p>
            <p>
              Veille Ecologique : Comprendre les enjeux et comment y répondre.*
            </p>
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
      veilleTechnologique: "",
      veilleEcologique: [
        {
          year: "2021",
          label: "Fun Mooc : Comprendre la gestion Forestière",
          link:
            "https://lms.fun-mooc.fr/courses/course-v1:AgroParisTech+32006+session01/info",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
