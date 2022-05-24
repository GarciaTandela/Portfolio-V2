<template>
  <v-app-bar elevate-on-scroll :height="75" fixed color="#0a1930">
    <v-container>
      <a class="float-left" @click="$vuetify.goTo('#home')">
        <v-img
          class="float-left"
          eager
          width="50"
          :src="require('@/assets/files/Logo.png')"
          :lazy-src="require('@/assets/files/Logo.png')"
          alt="Garcia Tandela Portfolio"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-1"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <span class="float-right mt-2 ml-3 logo-text">Garcia Tandela</span>
      </a>

      <v-spacer></v-spacer>
      <v-btn
        class="float-right hidden-lg-and-up"
        icon
        color="#a6b1cf"
        dark
        @click.stop="Drawer = !Drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <div class="float-right hidden-md-and-down">
        <v-btn
          class="nav-item text-capitalize ma-2 hidden-md-and-down"
          text
          :ripple="false"
          @click="$vuetify.goTo('#about')"
        >
          {{ $t('Header.AboutMe') }}
        </v-btn>

        <v-btn
          class="nav-item text-capitalize ma-2 hidden-md-and-down"
          text
          :ripple="false"
          @click="$vuetify.goTo('#service')"
        >
          {{ $t('Header.MyServices') }}
        </v-btn>

        <v-btn
          class="nav-item text-capitalize ma-2 hidden-md-and-down"
          text
          :ripple="false"
          @click="$vuetify.goTo('#skills')"
        >
          {{ $t('Header.Skills') }}
        </v-btn>

        <v-btn
          class="nav-item text-capitalize ma-2 hidden-md-and-down"
          text
          :ripple="false"
          @click="$vuetify.goTo('#portfolio')"
        >
          {{ $t('Header.Portfolio') }}
        </v-btn>

        <v-btn
          class="nav-item text-capitalize ma-2 hidden-md-and-down"
          text
          :ripple="false"
          @click="$vuetify.goTo('#testimonies')"
        >
          {{ $t('Header.Testimonies') }}
        </v-btn>

        <v-btn
          class="nav-item text-capitalize ma-2 hidden-md-and-down"
          text
          :ripple="false"
          @click="$vuetify.goTo('#contact')"
        >
          {{ $t('Header.Contact') }}
        </v-btn>

        <v-menu
          class="hidden-md-and-down"
          open-on-hover
          transition="slide-y-transition"
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="nav-item text-capitalize ma-2 hidden-md-and-down"
              v-bind="attrs"
              text
              :ripple="false"
              v-on="on"
            >
              {{ $t('Header.Language') }}
              <span class="ml-1">{{
                selectLanguage($t('Header.Locale'))
              }}</span>
              <img
                v-show="$t('Header.Locale') === 'en'"
                class="ml-2"
                src="https://img.icons8.com/officexs/16/000000/usa.png"
                alt="language-usa"
              />
              <img
                v-show="$t('Header.Locale') === 'es'"
                class="ml-2"
                src="https://img.icons8.com/color/16/000000/spain.png"
                alt="language-es"
              />
              <img
                v-show="$t('Header.Locale') === 'fr'"
                class="ml-2"
                src="https://img.icons8.com/color/16/000000/france.png"
                alt="language-fr"
              />
              <img
                v-show="$t('Header.Locale') === 'pt'"
                class="ml-2"
                src="https://img.icons8.com/color/16/000000/portugal.png"
                alt="language-pt"
              />
            </v-btn>
          </template>

          <v-list>
            <v-list-item-group>
              <v-list-item :to="switchLocalePath('en')">
                <v-list-item-content>
                  <v-list-item-title class="language-item">{{
                    $t('Header.English')
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <img
                    src="https://img.icons8.com/officexs/16/000000/usa.png"
                    alt="language-usa"
                  />
                </v-list-item-icon>
              </v-list-item>
              <v-list-item :to="switchLocalePath('es')">
                <v-list-item-content>
                  <v-list-item-title class="language-item">{{
                    $t('Header.Spanish')
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <img
                    src="https://img.icons8.com/color/16/000000/spain.png"
                    alt="language-es"
                  />
                </v-list-item-icon>
              </v-list-item>
              <v-list-item :to="switchLocalePath('fr')">
                <v-list-item-content>
                  <v-list-item-title class="language-item">{{
                    $t('Header.French')
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <img
                    src="https://img.icons8.com/color/16/000000/france.png"
                    alt="language-fr"
                  />
                </v-list-item-icon>
              </v-list-item>
              <v-list-item :to="switchLocalePath('pt')">
                <v-list-item-content>
                  <v-list-item-title class="language-item">{{
                    $t('Header.Portuguese')
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <img
                    src="https://img.icons8.com/color/16/000000/portugal.png"
                    alt="language-pt"
                  />
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'skill/getField',
  mutationType: 'skill/updateField'
})
export default {
  data() {
    return {
      OrderBy: ''
    }
  },
  computed: {
    ...mapFields({
      Drawer: 'drawer'
    })
  },
  methods: {
    selectLanguage(language) {
      // eslint-disable-next-line no-console
      if (language === 'en') {
        return this.$t('Header.English')
      }

      if (language === 'es') {
        return this.$t('Header.Spanish')
      }

      if (language === 'fr') {
        return this.$t('Header.French')
      }

      if (language === 'pt') {
        return this.$t('Header.Portuguese')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$logo-font: 'Amatic SC', cursive;

.nav-item {
  @include text-description($font-size: 14px);
  &:hover {
    @include text-description($text-color: $ternary-color, $font-size: 14px);
  }
}

.language-item {
  @include text-list($text-color: $theme-color);
}

.logo-text {
  @include text-description(
    $font-family: $logo-font,
    $font-size: 30px,
    $text-color: $secondary-color
  );
}

.v-btn::before {
  background-color: transparent;
}
</style>
