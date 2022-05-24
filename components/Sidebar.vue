<template>
  <v-navigation-drawer v-model="Drawer" color="#0a1930" fixed temporary>
    <v-list-item>
      <a class="mx-auto" @click="$vuetify.goTo('#home')">
        <v-img
          class="float-left"
          eager
          width="35"
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
    </v-list-item>

    <v-divider></v-divider>

    <v-list dark>
      <v-list-item
        v-for="nav in navs"
        :key="nav.title"
        link
        @click="goToSection(nav.link)"
      >
        <v-list-item-icon>
          <v-icon color="#a6b1cf">{{ nav.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="nav-item">{{
            nav.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="nav-item">
              {{ $t('Header.Language')
              }}<span class="ml-3">{{
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
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item class="ml-14" :to="switchLocalePath('en')">
          <v-list-item-content>
            <v-list-item-title class="nav-item">{{
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

        <v-list-item class="ml-14" :to="switchLocalePath('es')">
          <v-list-item-content>
            <v-list-item-title class="nav-item">{{
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

        <v-list-item class="ml-14" :to="switchLocalePath('fr')">
          <v-list-item-content>
            <v-list-item-title class="nav-item">{{
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

        <v-list-item class="ml-14" :to="switchLocalePath('pt')">
          <v-list-item-content>
            <v-list-item-title class="nav-item">{{
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
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
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
      navs: [
        {
          title: this.$t('Header.AboutMe'),
          icon: 'mdi-information-variant',
          link: '#about'
        },
        {
          title: this.$t('Header.MyServices'),
          icon: 'mdi-face-agent',
          link: '#service'
        },
        {
          title: this.$t('Header.Skills'),
          icon: 'mdi-cog-outline',
          link: '#skills'
        },
        {
          title: this.$t('Header.Portfolio'),
          icon: 'mdi-application-outline',
          link: '#portfolio'
        },
        {
          title: this.$t('Header.Testimonies'),
          icon: 'mdi-comment-account-outline',
          link: '#testimonies'
        },
        {
          title: this.$t('Header.Contact'),
          icon: 'mdi-account-box-outline',
          link: '#contact'
        }
      ]
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
    },
    goToSection(section) {
      this.$vuetify.goTo(section)
    }
  }
}
</script>

<style lang="scss" scoped>
@include google-font('Amatic+SC&display=swap');
$logo-font: 'Amatic SC', cursive;

.nav-item {
  @include text-description($font-size: 14px);
}

.logo-text {
  @include text-description(
    $font-family: $logo-font,
    $font-size: 20px,
    $text-color: $secondary-color
  );
}
</style>
