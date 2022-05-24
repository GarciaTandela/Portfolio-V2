<template>
  <v-row>
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">{{ $t('MyServices.Title') }}</p>
    </v-col>
    <v-col
      v-for="(Service, key) in Services"
      :key="key"
      cols="12"
      sm="6"
      lg="3"
    >
      <v-card
        color="#35455c"
        elevation="6"
        :height="calculateHeight"
        max-height="350"
      >
        <v-card-subtitle class="mb-n5 text-center">
          <v-icon size="80" :color="Service.Color">{{
            Service.Icon
          }}</v-icon></v-card-subtitle
        >
        <v-card-title
          ><label class="mx-auto service-title">{{
            Service.Name
          }}</label></v-card-title
        >
        <v-card-text class="text-justify">
          <p class="description-color">
            {{ Service.Description }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Services: [
        {
          Name: this.$t('MyServices.Consulting.Title'),
          Icon: 'mdi-handshake',
          Description: this.$t('MyServices.Consulting.Description'),
          Color: '#7be8d6'
        },
        {
          Name: this.$t('MyServices.Web.Title'),
          Icon: 'mdi-web',
          Description: this.$t('MyServices.Web.Description'),
          Color: '#e21f71'
        },
        {
          Name: this.$t('MyServices.Mobile.Title'),
          Icon: 'mdi-cellphone-cog',
          Description: this.$t('MyServices.Mobile.Description'),
          Color: '#fc6b06'
        },
        {
          Name: this.$t('MyServices.Desktop.Title'),
          Icon: 'mdi-monitor',
          Description: this.$t('MyServices.Desktop.Description'),
          Color: '#00aeff'
        }
      ]
    }
  },
  computed: {
    calculateHeight() {
      if (this.$vuetify.breakpoint.xl) {
        return 270
      }

      if (this.$vuetify.breakpoint.mobile) {
        return 280
      }

      if (
        this.$t('Header.Locale') === 'en' ||
        this.$t('Header.Locale') === 'es'
      ) {
        return 290
      }

      return 330
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  @include text-title;
}

.service-title {
  @include text-title($font-size: 20px);
}

.description-color {
  color: $secondary-color;
}

.title-margin-top {
  margin-top: 200px;
  @include smartphone-screens() {
    margin-top: 100px;
  }
}
</style>
