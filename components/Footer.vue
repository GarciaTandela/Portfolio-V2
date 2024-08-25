<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="text-center" color="#112240">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px" :color="icon.color">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text>
        <p class="footer-description">
          {{ $t('Footer.Copyright') }} © Garcia Tandela
          {{ new Date().getFullYear() }}. {{ $t('Footer.AllRights') }}
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: 'mdi-email',
          color: 'grey',
          link: 'mailto:garciatandela@gmail.com'
        },
        {
          name: 'mdi-linkedin',
          color: 'blue',
          link: this.$t('Footer.Linkedin')
        },
        {
          name: 'mdi-github',
          color: '#ffffff',
          link: 'https://github.com/GarciaTandela'
        },
        {
          name: 'mdi-whatsapp',
          color: 'green',
          link: 'https://api.whatsapp.com/send?phone=244926920530'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-description {
  @include text-list($text-color: $secondary-color, $font-size: 16px);
}
</style>
