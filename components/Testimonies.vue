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
            'https://media.licdn.com/dms/image/v2/C4D03AQEZwrDFogeh6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643027191634?e=1749081600&v=beta&t=dzJ0MswLnqD3OwIuHpN5dYGgDpwhXmOLq_LRq0aC2iQ',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/D4D0BAQGVRxhl9ugIOA/company-logo_200_200/company-logo_200_200/0/1719830522728/banco_santander_logo?e=1749081600&v=beta&t=cCzA2AcBy0Oy-CzK9G2Wlafct-12nm_8JiglhCU3wlg',
          CompanyName: 'Banco Santander',
          Linkedin: 'https://www.linkedin.com/in/cassio-brito/'
        },
        {
          Name: 'David Botella',
          Description: this.$t('Testimonies.David.Description'),
          Role: this.$t('Testimonies.David.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/C4D03AQHxmx1rBAjmBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1544395364602?e=1749081600&v=beta&t=-Y3b7NqJdxOceNZN9hKswl4aTOLjGsRO8dTTeOd2aoI',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/D560BAQEA8d3x7q2geQ/company-logo_200_200/company-logo_200_200/0/1695740388699/orizon_sistemas_de_informaci_n_s_l__logo?e=1749081600&v=beta&t=FHTudzlA2blrqCXnPO7g4QTaoClgHKpG-Lw-y1wQUoA',
          CompanyName: 'Orizon',
          Linkedin:
            'https://www.linkedin.com/in/david-botella-de-las-heras-42aa70159/'
        },
        {
          Name: 'Adrián Garzón Gallardo',
          Description: this.$t('Testimonies.Adrian.Description'),
          Role: this.$t('Testimonies.Adrian.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQEpUF-BOpV3CA/profile-displayphoto-shrink_200_200/B4DZRfZb2dG4Ac-/0/1736767291308?e=1749081600&v=beta&t=550Hxv-PNzR8YykKUOVoFxjhKXfgPGT6toZRouTk_YM',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/D4D0BAQGeRQ3GMbA9Dg/company-logo_200_200/company-logo_200_200/0/1736769184388/highdatanet_logo?e=1749081600&v=beta&t=OSXK0N0fk1p3kEIO1Z7QfYMCMYzTJGy14pD8AO8KhtI',
          CompanyName: 'Highdatanet',
          Linkedin:
            'https://www.linkedin.com/in/adri%C3%A1n-garz%C3%B3n-gallardo-14652b146/'
        },
        {
          Name: 'Daniel Matos',
          Description: this.$t('Testimonies.Daniel.Description'),
          Role: this.$t('Testimonies.Daniel.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQEvBJ8IkZq-fw/profile-displayphoto-shrink_200_200/B4DZSm7eTHGcAY-/0/1737967397345?e=1749081600&v=beta&t=_wS7jgVPIMoQ_9I7yhOy2f44GDCPL70KDUh69NjNIZo',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/C560BAQGJZE5V9oKmAg/company-logo_200_200/company-logo_200_200/0/1652282293878?e=1749081600&v=beta&t=7PN1Tkz4RQ1zCfQZT4QRoOKDuxeFGtDxRnQBjbFVUh8',
          CompanyName: 'Medicare',
          Linkedin: 'https://www.linkedin.com/in/daniel-matos-63b096130/'
        },
        {
          Name: 'Deyson Santana',
          Description: this.$t('Testimonies.Deyson.Description'),
          Role: this.$t('Testimonies.Deyson.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQH4JLPH7A_Qrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684201534451?e=1749081600&v=beta&t=On6jE39WWHs1a5C0si8qmYQgT2i5x2xEYfCTUthMhqo',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/C4D0BAQEuMl0YuhXeaA/company-logo_200_200/company-logo_200_200/0/1630552209333/viveendo_logo?e=1749081600&v=beta&t=PP8qXCmdXEgreU6aASlu95LySyfWGHoG46F6iFRdMTk',
          CompanyName: 'Viveendo Bem',
          Linkedin: 'https://www.linkedin.com/in/deyson-santana-b4322a149/'
        },
        {
          Name: 'Adriano Santos',
          Description: this.$t('Testimonies.Adriano.Description'),
          Role: this.$t('Testimonies.Adriano.Role'),
          Picture:
            'https://media.licdn.com/dms/image/v2/D4D03AQGKrvGVIi9FlA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701712838441?e=1749081600&v=beta&t=rq0RpuUygVldsM1GUYxBUpFERH1aw2xKjk_R4fSULAg',
          CompanyLogo:
            'https://media.licdn.com/dms/image/v2/C4E0BAQGkQsm5svygvA/company-logo_200_200/company-logo_200_200/0/1630570943696/uniftc_logo?e=1749081600&v=beta&t=eUocnz1jeEEjBcoScM0BoUkK-5B4-9hFmc3Ow_4_jIU',
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
