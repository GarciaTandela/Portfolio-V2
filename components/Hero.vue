<template>
  <v-row class="mt-16" align="center">
    <v-col
      class="mt-n12 mb-16 mb-lg-0 mt-lg-0"
      cols="12"
      sm="6"
      lg="6"
      order="2"
      order-sm="1"
      order-lg="1"
    >
      <p class="compliment">{{ $t('Hero.Title') }}</p>
      <p class="name">Garcia Tandela</p>
      <p class="text-uppercase role">{{ $t('Hero.Role') }}</p>
      <p class="description" v-html="Description"></p>
      <v-btn
        class="download-cv text-none mt-3"
        color="#7be8d6"
        :href="CV"
        download="GarciaTandelaCV"
        target="_blank"
        outlined
        >{{ $t('Hero.CV') }}</v-btn
      >
    </v-col>
    <v-col cols="12" sm="6" lg="6" order="1" order-sm="2" order-lg="2">
      <v-img
        class="mt-12"
        eager
        :src="require('@/assets/files/gummy-coding.svg')"
        :lazy-src="require('@/assets/files/gummy-coding.svg')"
        alt="Developer Image"
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Description: this.$t('Hero.Description'),
      CVLink: ''
    }
  },
  computed: {
    CV() {
      if (this.$t('Header.Locale') === 'en') {
        return '/GarciaTandelaEN.pdf'
      }

      if (this.$t('Header.Locale') === 'es') {
        return '/GarciaTandelaES.pdf'
      }

      if (this.$t('Header.Locale') === 'fr') {
        return '/GarciaTandelaFR.pdf'
      }

      if (this.$t('Header.Locale') === 'pt') {
        return '/GarciaTandelaPT.pdf'
      }

      return '/GarciaTandelaEN.pdf'
    }
  }
}
</script>

<style lang="scss" scoped>
.compliment {
  @include text-subtitle($text-color: $secondary-color, $font-size: 18px);
}

.name {
  @include text-title($font-size: 58px);
  @include smartphone-screens() {
    @include text-title($font-size: 38px);
  }
}

.role {
  @include text-subtitle($text-color: $ternary-color, $font-size: 18px);
}

.description {
  @include text-description;
}

.download-cv {
  @include text-subtitle;
}
</style>
