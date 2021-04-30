<template>
  <div class="modal-card contact" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Me Contacter</p>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column">
          <div class="bordered">
            <b-icon icon="gmail" type="is-danger" size="24px"></b-icon>Le plus
            direct

            <img
              :src="require('@/assets/email.png')"
              alt="email"
              class="email"
              width="512px"
            />
          </div>
        </div>
        <div class="column">
          <div class="bordered">
            <a :href="this.$store.state.linkedinPath" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 34 34"
                class="global-nav__logo"
              >
                <title>LinkedIn</title>

                <g>
                  <!---->
                  <path
                    d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                    fill="#0a66c2"
                  ></path>
                </g></svg
              ><span>Le plus social</span>
            </a>
          </div>
        </div>
        <div class="column">
          <div class="bordered">
            <a :href="this.$store.state.maltPath" target="blank">
              <img
                :src="require('@/assets/malt.svg')"
                alt="malt"
                width="24px"
              />
              <span>Le plus motivant</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
