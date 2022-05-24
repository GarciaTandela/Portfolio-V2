<template>
  <v-app>
    <v-main class="theme-color">
      <v-container>
        <v-row style="height: 98vh" align="center">
          <v-col cols="12" align="center">
            <v-img
              class="my-6"
              eager
              :height="444"
              :width="628"
              :lazy-src="require('@/assets/files/error.svg')"
              :src="require('@/assets/files/error.svg')"
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
            <v-btn
              class="home-button"
              :width="255"
              :height="48"
              color="#7be8d6"
              outlined
              to="/"
              exact
              >{{ $t('Error.Title') }}</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script></script>

<style lang="scss" scoped>
.theme-color {
  background-color: $body-background-color;
}

.home-button {
  @include text-subtitle;
}
</style>
