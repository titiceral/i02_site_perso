<template>
  <div class="hero is-fullheight has-background">
    <div class="hero-background">
      <img
        alt="cibler votre besoin"
        class="is-transparent img-hero-cover"
        src="../assets/target_blue.jpg"
      />
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title mt-5">
          Responsabilité Sociétale des d'Entreprises
          <b-icon icon="bee"></b-icon>
        </p>
        <p>
          La création de mon entreprise est portée par 2 élements cruciaux :
          l'<strong>innovation</strong> et la <strong>pérennité</strong>.
        </p>

        <div class="columns">
          <div class="column has-text-left">
            <figure class="image is-128x128 is-rounded" style="margin: auto">
              <light></light>
            </figure>

            <p class="subtitle is-4 has-text-centered">Innovation</p>
            <p>
              <strong>Satisfaction Client</strong> : Etre à l'écoute du Client,
              répondre à son besoin, innover ont toujours été mes objectifs
              professionnels.
            </p>
            <p>
              <strong>Concrétisation</strong> : L'obtention du crédit impôt
              innovation suite à la soumission d'un de mes projets.
            </p>
            <p>
              <strong>Vieille technologique</strong> : Etre à l'écoute des
              nouvautés. Etre libre de se former
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
              <strong>Plaisir</strong> : Etre présent de l'appel d'offre jusqu'à
              la recette finale.
            </p>
          </div>

          <div class="column has-text-left">
            <figure class="image is-128x128 is-rounded" style="margin: auto">
              <flower></flower>
            </figure>
            <p class="subtitle is-4 has-text-centered">Pérennité</p>
            <p>
              <strong>Pérenniser</strong> mes interventions clients mais aussi
              l'avenir de Tous.
            </p>
            <p>
              L'<strong>avenir</strong> est lié de notre environnement, à notre
              capacité à le préserver et le restaurer.
            </p>
            <p>
              <strong>10% du CA net</strong> est réinvestit dans des
              financements participatifs pour le croissance verte : projets
              locaux, centrale photovoltaïque, valorisation des déchets,
              efficacité energétique...
            </p>
            <p>
              <strong>Démarche de responsable</strong> : Fournisseur Vert,
              Démarches au quotidient, Développement responsable...
            </p>
            <p>
              <strong>Veille Ecologique</strong> : Comprendre les enjeux et
              comment y répondre.*
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import light from "./SVGs/light.vue";
import flower from "./SVGs/flower.vue";
export default {
  components: { light, flower },
  data() {
    return {
      veilleTechnologiques: "",
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
