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
          title: 'About me',
          icon: 'mdi-information-variant',
          link: '#about'
        },
        {
          title: 'My services',
          icon: 'mdi-face-agent',
          link: '#service'
        },
        {
          title: 'Skills',
          icon: 'mdi-cog-outline',
          link: '#skills'
        },
        {
          title: 'Portfolio',
          icon: 'mdi-application-outline',
          link: '#portfolio'
        },
        {
          title: 'Testimonies',
          icon: 'mdi-comment-account-outline',
          link: '#testimonies'
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
