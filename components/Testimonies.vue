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
            'https://media.licdn.com/dms/image/C4D03AQEZwrDFogeh6A/profile-displayphoto-shrink_800_800/0/1643027191195?e=1689811200&v=beta&t=bmlKGuvR7FyeR5InLv5mnn1yBvwHDOu3mTGt0OjFNVc',
          CompanyLogo:
            'https://media.licdn.com/dms/image/C4E0BAQFP8mEoq70MFA/company-logo_200_200/0/1656922771497?e=1692835200&v=beta&t=BxdfMR2aY9B8dSnWo-X4xkfcHjz7PJ_fjPjU9oZ48xg',
          CompanyName: 'Banco Santander',
          Linkedin: 'https://www.linkedin.com/in/cassio-brito/'
        },
        {
          Name: 'David Botella',
          Description: this.$t('Testimonies.David.Description'),
          Role: this.$t('Testimonies.David.Role'),
          Picture:
            'https://media.licdn.com/dms/image/C4D03AQHxmx1rBAjmBQ/profile-displayphoto-shrink_400_400/0/1544395363790?e=1689811200&v=beta&t=XA5AZ-zCVQ4m2talE2F71ra4LJUpewaFQaDcnKi4REY',
          CompanyLogo:
            'https://media.licdn.com/dms/image/C4E0BAQFOLJOk0i4w-A/company-logo_200_200/0/1678891282018?e=1692835200&v=beta&t=kbbVA1GZj64wUBoMNyO-sCQeHBnGBS64QUO4DpVPMmY',
          CompanyName: 'Orizon',
          Linkedin:
            'https://www.linkedin.com/in/david-botella-de-las-heras-42aa70159/'
        },
        {
          Name: 'Adrián Garzón Gallardo',
          Description: this.$t('Testimonies.Adrian.Description'),
          Role: this.$t('Testimonies.Adrian.Role'),
          Picture:
            'https://media.licdn.com/dms/image/C4E03AQFyN6ZtjvH8LQ/profile-displayphoto-shrink_400_400/0/1646731027735?e=1689811200&v=beta&t=HCZU1FS6Lu5BBi5A7yczEEaJWDPUck-9MJZI7Wz07p4',
          CompanyLogo:
            'https://media.licdn.com/dms/image/C4E0BAQH2OfkuKz2v5g/company-logo_200_200/0/1676141850426?e=1692835200&v=beta&t=24vlARtbmQTX5wPl9xkBODta03tQSVM8eVgG4ZtZ_sY',
          CompanyName: 'Highdatanet',
          Linkedin:
            'https://www.linkedin.com/in/adri%C3%A1n-garz%C3%B3n-gallardo-14652b146/'
        },
        {
          Name: 'Daniel Matos',
          Description: this.$t('Testimonies.Daniel.Description'),
          Role: this.$t('Testimonies.Daniel.Role'),
          Picture:
            'https://media.licdn.com/dms/image/D4D03AQH1fFUl6nQiyA/profile-displayphoto-shrink_400_400/0/1673529719365?e=1689811200&v=beta&t=4J03RyKSqgdOhsNny0O0HuccZojT-BUxwGf4NJYq_jU',
          CompanyLogo:
            'https://media.licdn.com/dms/image/C560BAQGJZE5V9oKmAg/company-logo_200_200/0/1652282293141?e=1692835200&v=beta&t=Jl_9Mz7JJKOhxSuOmHqF3dFZn4TK7E-9FcES-mo2W98',
          CompanyName: 'Medicare',
          Linkedin: 'https://www.linkedin.com/in/daniel-matos-63b096130/'
        },
        {
          Name: 'Deyson Santana',
          Description: this.$t('Testimonies.Deyson.Description'),
          Role: this.$t('Testimonies.Deyson.Role'),
          Picture:
            'https://media.licdn.com/dms/image/D4D03AQH4JLPH7A_Qrw/profile-displayphoto-shrink_400_400/0/1684201533522?e=1689811200&v=beta&t=nk0Toh1BshgaN_CqGtv9tPDUUw0RaWZJCa_SkVFGnyw',
          CompanyLogo:
            'https://media.licdn.com/dms/image/C4D0BAQEuMl0YuhXeaA/company-logo_200_200/0/1599588212232?e=1692835200&v=beta&t=NWRhM2lRIdjGKv9banpgHP0UUHQyOhaBcLHTTdiGqI0',
          CompanyName: 'Viveendo Bem',
          Linkedin: 'https://www.linkedin.com/in/deyson-santana-b4322a149/'
        },
        {
          Name: 'Adriano Santos',
          Description: this.$t('Testimonies.Adriano.Description'),
          Role: this.$t('Testimonies.Adriano.Role'),
          Picture:
            'https://media.licdn.com/dms/image/C4D03AQH6siK40N069g/profile-displayphoto-shrink_400_400/0/1589061885665?e=1689811200&v=beta&t=vLhpUpY2sK-DPYU1UadpWVIsrsYeX_V9RFL8KxJXiOw',
          CompanyLogo:
            'https://media.licdn.com/dms/image/C4E0BAQGkQsm5svygvA/company-logo_200_200/0/1578411059070?e=1692835200&v=beta&t=icgxA-RXKT2q2L7SgOQ6kT58cdB1wgz1ctR0Px6917I',
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
