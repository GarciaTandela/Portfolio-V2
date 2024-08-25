<template>
  <v-row>
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">{{ $t('Testimonies.Title') }}</p>
    </v-col>
    <v-col
      v-for="(Testimony, key) in Testimonies"
      :key="key"
      cols="12"
      sm="6"
      lg="4"
    >
      <v-card
        color="#35455c"
        elevation="6"
        :href="Testimony.Linkedin"
        target="_blank"
        :max-height="400"
      >
        <v-card-text class="text-justify">
          <label class="description">
            {{ Testimony.Description }}
          </label>
        </v-card-text>
        <v-list color="#35455c" subheader two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                eager
                :src="Testimony.Picture"
                :lazy-src="Testimony.Picture"
                :alt="Testimony.Name"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-1"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="testimony-name">{{
                Testimony.Name
              }}</v-list-item-title>

              <v-list-item-subtitle class="testimony-role">{{
                Testimony.Role
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar>
              <v-tooltip bottom color="#000000">
                <template v-slot:activator="{ on, attrs }">
                  <v-img
                    v-bind="attrs"
                    eager
                    :src="Testimony.CompanyLogo"
                    :lazy-src="Testimony.CompanyLogo"
                    :alt="Testimony.CompanyName"
                    v-on="on"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-1"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </template>
                <span class="company-name">{{ Testimony.CompanyName }}</span>
              </v-tooltip>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
export default {
  data() {
    return {
      Testimonies: [
        {
          Name: 'Cássio Brito',
          Description: this.$t('Testimonies.Cassio.Description'),
          Role: this.$t('Testimonies.Cassio.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/C4D03AQEZwrDFogeh6A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1643027191634?e=1730332800&v=beta&t=mgh7ujNib1MrzKX4gzojgkWMi7cgIbB8dquwe5nSfg4',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/D4D0BAQGVRxhl9ugIOA/company-logo_200_200/company-logo_200_200/0/1719830522728/banco_santander_logo?e=1732752000&v=beta&t=rF5ym3Wxp7rZj5CcdfUmhthchXyocMkrPnxtKHAfX3Q',
          CompanyName: 'Banco Santander',
          Linkedin: 'https://www.linkedin.com/in/cassio-brito/'
        },
        {
          Name: 'David Botella',
          Description: this.$t('Testimonies.David.Description'),
          Role: this.$t('Testimonies.David.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/C4D03AQHxmx1rBAjmBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1544395364700?e=1730332800&v=beta&t=P9GU9KUQShnuoos_R0AslpB_1qtr-vkGVJZ4mlDg4N4',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/D560BAQEA8d3x7q2geQ/company-logo_200_200/company-logo_200_200/0/1695740388699/orizon_sistemas_de_informaci_n_s_l__logo?e=1732752000&v=beta&t=SEIGBUzp3acU06HgeSxC9jM-8U8BPTAVj1Nwn6VCMXM',
          CompanyName: 'Orizon',
          Linkedin:
            'https://www.linkedin.com/in/david-botella-de-las-heras-42aa70159/'
        },
        {
          Name: 'Adrián Garzón Gallardo',
          Description: this.$t('Testimonies.Adrian.Description'),
          Role: this.$t('Testimonies.Adrian.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQGd1lCNCn2-Tg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724313328080?e=1730332800&v=beta&t=hm3Vge9DbVYJXLMVuugacfDFkxY9XpDY3yb8V9n5AS0',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/C4E0BAQH2OfkuKz2v5g/company-logo_200_200/company-logo_200_200/0/1676141850741/highdatanet_logo?e=1732752000&v=beta&t=wczNHYAystMCpqDYbKLjposBDqPJzev3SVANaazOi7A',
          CompanyName: 'Highdatanet',
          Linkedin:
            'https://www.linkedin.com/in/adri%C3%A1n-garz%C3%B3n-gallardo-14652b146/'
        },
        {
          Name: 'Daniel Matos',
          Description: this.$t('Testimonies.Daniel.Description'),
          Role: this.$t('Testimonies.Daniel.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQGmAZLvkUOCiw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722793849215?e=1730332800&v=beta&t=WAkwHfnKnkr5GXdMTUCv9Ol2grqTepVOH-d1n7Ulv6U',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/C560BAQGJZE5V9oKmAg/company-logo_200_200/company-logo_200_200/0/1652282293878?e=1732752000&v=beta&t=KEHmUzbwev357bR_iHWShRqsG2wgfz9BJSOwQos7dDI',
          CompanyName: 'Medicare',
          Linkedin: 'https://www.linkedin.com/in/daniel-matos-63b096130/'
        },
        {
          Name: 'Deyson Santana',
          Description: this.$t('Testimonies.Deyson.Description'),
          Role: this.$t('Testimonies.Deyson.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQH4JLPH7A_Qrw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684201534451?e=1730332800&v=beta&t=nsQhjPxZUx1lpaqheCtNYl899fUV9lzf5lLaFmWJ3bM',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/C4D0BAQEuMl0YuhXeaA/company-logo_200_200/company-logo_200_200/0/1630552209333/viveendo_logo?e=1732752000&v=beta&t=IY9LsJiyVlFuFbqNLz0BUr0Q2jDzsHuB_7OsMiKbsI0',
          CompanyName: 'Viveendo Bem',
          Linkedin: 'https://www.linkedin.com/in/deyson-santana-b4322a149/'
        },
        {
          Name: 'Adriano Santos',
          Description: this.$t('Testimonies.Adriano.Description'),
          Role: this.$t('Testimonies.Adriano.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQGKrvGVIi9FlA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701712838441?e=1730332800&v=beta&t=IVyJrWF4kCuXbmlK6PrS8C_netQJkUyCkqLOBL5EOkw',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/C4E0BAQGkQsm5svygvA/company-logo_200_200/company-logo_200_200/0/1630570943696/uniftc_logo?e=1732752000&v=beta&t=dg1VTe0g23CV3t-_GVZZgPVnMMj5stSbSGF3CGc_Prg',
          CompanyName: 'UniFTC',
          Linkedin: 'https://www.linkedin.com/in/adriano-santos-91228921/'
        }
      ]
    }
  },
  computed: {
    calculateHeight() {
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

.title-margin-top {
  margin-top: 200px;
  @include smartphone-screens() {
    margin-top: 100px;
  }
}

.description,
.company-name {
  @include text-list($font-size: 14px, $text-color: $secondary-color);
}

.testimony-name {
  @include text-title($font-size: 14px);
}

.testimony-role {
  @include text-subtitle(
    $font-size: 12px,
    $text-color: $ternary-color !important
  );
}
</style>
