<template>
  <v-app-bar :elevation="0" color="#0a1930">
    <nuxt-link class="ml-6" to="/">
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
    </nuxt-link>

    <v-spacer></v-spacer>

    <v-btn
      class="nav-item text-capitalize ma-2 hidden-md-and-down"
      text
      :ripple="false"
    >
      About me
    </v-btn>

    <v-btn
      class="nav-item text-capitalize ma-2 hidden-md-and-down"
      text
      :ripple="false"
    >
      My services
    </v-btn>

    <v-btn
      class="nav-item text-capitalize ma-2 hidden-md-and-down"
      text
      :ripple="false"
    >
      Skills
    </v-btn>

    <v-btn
      class="nav-item text-capitalize ma-2 hidden-md-and-down"
      text
      :ripple="false"
    >
      Portfolio
    </v-btn>

    <v-btn
      class="nav-item text-capitalize ma-2 hidden-md-and-down"
      text
      :ripple="false"
    >
      Testimonies
    </v-btn>

    <v-btn
      class="nav-item text-capitalize ma-2 hidden-md-and-down"
      text
      :ripple="false"
    >
      Contact
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
          Language: <span class="ml-6">{{ 'Inglês' }}</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="language-item"
                >Inglês</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <img
                src="https://img.icons8.com/officexs/16/000000/usa.png"
                alt="language-usa"
              />
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="language-item"
                >Espanhol</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <img
                src="https://img.icons8.com/color/16/000000/spain.png"
                alt="language-es"
              />
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="language-item"
                >Francês</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-icon>
              <img
                src="https://img.icons8.com/color/16/000000/france.png"
                alt="language-fr"
              />
            </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="language-item"
                >Português</v-list-item-title
              >
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
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      OrderBy: ''
    }
  },
  methods: {
    goToPage() {
      if (this.$route.fullPath === '/') {
        this.$vuetify.goTo('#HumanTeam')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@include google-font('Amatic+SC&display=swap');
$logo-font: 'Amatic SC', cursive;

.nav-item {
  @include text-description;
  &:hover {
    @include text-description($text-color: $ternary-color);
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
