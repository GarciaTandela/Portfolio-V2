<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row style="height: 98vh" align="center">
          <v-col cols="12" align="center">
            <v-img
              eager
              :height="42"
              :width="288"
              lazy-src="https://d1msre04tvrc2c.cloudfront.net/static/icons/viveendo-verde.svg"
              src="https://d1msre04tvrc2c.cloudfront.net/static/icons/viveendo-verde.svg"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <v-img
              class="my-6"
              eager
              :height="444"
              :width="628"
              lazy-src="https://d1msre04tvrc2c.cloudfront.net/static/imagens/errorpage.png"
              src="https://d1msre04tvrc2c.cloudfront.net/static/imagens/errorpage.png"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <p class="error-title">
              Desculpe, esta página não está disponível.
            </p>

            <p class="error-description">
              O link que você seguiu pode estar quebrado ou a página pode ter
              sido removida
            </p>

            <v-btn
              class="btn-home white--text"
              :width="255"
              :height="48"
              color="#259f9a"
              to="/"
              exact
              >Ir a Viveendo Bem</v-btn
            >

            <p class="mt-3">
              <a
                class="text-decoration-underline previous-route-link"
                to
                @click="$router.back()"
                >Retornar a página anterior</a
              >
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script></script>

<style scoped>
.error-title {
  font-family: 'Metropolis Semi Bold';
  font-size: 32px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #686f7e;
}

@media screen and (max-width: 1263px) {
  .error-title {
    font-family: 'Metropolis Semi Bold';
    font-size: 20px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #686f7e;
  }
}

.error-description {
  font-family: 'Metropolis Medium';
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #147571;
}

.btn-home {
  font-family: 'Metropolis Bold';
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.previous-route-link {
  font-family: 'Metropolis Medium';
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #259f9a;
}
</style>
