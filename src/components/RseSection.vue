<template>
  <div class="hero is-fullheight has-background">
    <div class="hero-background">
      <img
        alt="cibler votre besoin"
        class="is-transparent img-hero-cover"
        src="../assets/rse_back.png"
      />
    </div>
    <div class="hero-body">
      <div class="container has-text-left" style="display: block !important">
        <p class="title m-5">
          Responsabilité Sociétale des d'Entreprises
          <b-icon icon="bee"></b-icon>
        </p>
        <p class="container has-text-centered">
          La création de mon entreprise est portée par 2 élements cruciaux :
          l'<strong>innovation</strong> et la <strong>pérennité</strong>.
        </p>

        <div class="columns mt-5" style="display: flex !important">
          <div class="column has-text-left">
            <figure class="image is-128x128 is-rounded" style="margin: auto">
              <light></light>
            </figure>

            <p class="subtitle is-4 has-text-centered mt-2">Innovation</p>
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
              <tool-tip-watch
                :watches="this.veilleTechnologiques"
              ></tool-tip-watch>
              .
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
            <p class="subtitle is-4 has-text-centered mt-2">Pérennité</p>
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
              financements participatifs pour la croissance verte : projets
              locaux, centrale photovoltaïque, valorisation des déchets,
              efficacité energétique...
            </p>
            <p>
              <strong>Démarche de responsable</strong> : Fournisseur Vert,
              Démarches au quotidient, Production responsable...
            </p>
            <p>
              <strong>Veille Ecologique</strong> : Comprendre les enjeux et
              comment y répondre.
              <tool-tip-watch :watches="veilleEcologique"></tool-tip-watch>
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer is-active">
      <div class="has-text-centered">
        <p><small> Emmanuel Trivis avec VueJs & Buefy - 2021</small></p>
      </div>
    </footer>
  </div>
</template>

<script>
import light from "./SVGs/light.vue";
import flower from "./SVGs/flower.vue";
import ToolTipWatch from "./Base/toolTipWatch.vue";
export default {
  components: { light, flower, ToolTipWatch },
  data() {
    return {
      veilleTechnologiques: [
        {
          year: "03-2020",
          label: "Complete TypeScript For Beginners",
          link:
            "https://www.udemy.com/course/typescript-fundamentals/learn/lecture/9887978?start=0#overview",
          format: "Cours",
          producer: "Udemy",
          duration: "5h30",
        },
        {
          year: "04-2020",
          label:
            "Les usages de la réalité virtuelle et augmentée dans l'industrie ",
          link: "https://www.youtube.com/watch?v=ch8cAU7ZCcI",
          format: "Webinar",
          producer: "Clarté",
          duration: "1h",
        },
        {
          year: "05-2020",
          label:
            "Les containers Docker vus par un chef cuisinier et un mécanicien ",
          link: "https://www.youtube.com/watch?v=r0uzNOOmmvg",
          format: "Webinar",
          producer: "Malt Academy - Rachid Zarouali",
          duration: "2h",
        },
        {
          year: "05-2020",
          label: "DevOps : les outils ",
          link: "https://www.youtube.com/watch?v=Wao-E1v1IXU",
          format: "Webinar",
          producer: "Malt Academy - Guillaume Rémy",
          duration: "1h30",
        },
        {
          year: "04-2021",
          label: "Webinar Cloud Experts Continuous delivery in Azure DevOps",
          link:
            "https://event.on24.com/eventRegistration/console/EventConsoleApollo.jsp?simulive=y&eventid=2298862&sessionid=1&username=&partnerref=&format=fhvideo1&mobile=&flashsupportedmobiledevice=&helpcenter=&key=853747D9A816CBE8B533711749AE6B80&newConsole=true&nxChe=true&newTabCon=true&consoleEarEventConsole=false&text_language_id=fr&playerwidth=748&playerheight=526&eventuserid=424398194&contenttype=A&mediametricsessionid=379125427&mediametricid=3248110&usercd=424398194&mode=launch",
          format: "Webinar",
          producer: "Microsoft",
          duration: "2h30",
        },
        {
          year: "04-2021",
          label: "Initiation à la GTB",
          link: "https://www.distech-controls.com/",
          format: "Présentation",
          producer: "Distech Controls",
          duration: "1h",
        },
        {
          year: "04-2021",
          label: "Tout sur le langage Go",
          link:
            "https://app.livestorm.co/comet-4/langage-go/live?s=2089ef8b-5e95-43cb-b849-45866d7b1e66#/chat",
          format: "Webinar",
          duration: "1h",
          producer: "Comet-Maximilien Andile",
        },
        {
          year: "06-2021",
          label:
            "Microsoft Azure Virtual Training Day : Notions de base sur l’IA ",
          link:
            "https://event.on24.com/eventRegistration/EventLobbyServlet?target=lobby20.jsp&eventid=3086914&sessionid=1&key=62D05B9E2AC75D49D961862E066594B3&eventuserid=432203490",
          format: "Webinar",
          duration: "3h",
          producer: "Microsoft",
        },
        {
          year: "2020-2021",
          label: "Formation VueJs ",
          link: "https://www.vuemastery.com/",
          format: "Formation",
          duration: "20+h",
          producer: "vuemastery",
        },
      ],
      veilleEcologique: [
        {
          year: "06-2021",
          label: "Fun Mooc : Comprendre la gestion Forestière",
          link:
            "https://lms.fun-mooc.fr/courses/course-v1:AgroParisTech+32006+session01/info",
          format: "MOOC",
          producer: "AgroParisTech",
          duration: "24+h",
        },
        {
          year: "2021",
          label: "Les Mardis verts de Greenpeace",
          link: "https://www.greenpeace.fr/mardis-verts/",
          format: "Newsletter",
          producer: "Greenpeace",
          duration: "1h/semaine",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
