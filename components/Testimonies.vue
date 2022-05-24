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
            'https://media-exp1.licdn.com/dms/image/C4D03AQEZwrDFogeh6A/profile-displayphoto-shrink_800_800/0/1643027191195?e=1658361600&v=beta&t=3yxp1mZ6GcOPjzvFONDH2e_N4UFFS5hOQ6qDjp9cvMc',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C4D0BAQEZztIMYNiAsg/company-logo_200_200/0/1635147573800?e=1660780800&v=beta&t=UYEvqP_YmwOyIdbkZ6zID4Mmb9ExSi9TM8ejhL51D-g',
          CompanyName: 'Banco Santander',
          Linkedin: 'https://www.linkedin.com/in/cassio-brito/'
        },
        {
          Name: 'David Botella',
          Description: this.$t('Testimonies.David.Description'),
          Role: this.$t('Testimonies.David.Role'),
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHxmx1rBAjmBQ/profile-displayphoto-shrink_800_800/0/1544395363790?e=1658361600&v=beta&t=r4r29VdpnbBsSjN4RoCkhGPQO5G4-Dh_P-H-7y2PsDw',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C4D0BAQE66mbpql0EVA/company-logo_200_200/0/1519914147699?e=1660780800&v=beta&t=1BXfNMAHwkuKiSBaPFplEWy6C92hU1tbMOd0pO0u7MA',
          CompanyName: 'Orizon',
          Linkedin:
            'https://www.linkedin.com/in/david-botella-de-las-heras-42aa70159/'
        },
        {
          Name: 'Adrián Garzón Gallardo',
          Description: this.$t('Testimonies.Adrian.Description'),
          Role: this.$t('Testimonies.Adrian.Role'),
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4E03AQFyN6ZtjvH8LQ/profile-displayphoto-shrink_800_800/0/1646731027735?e=1658361600&v=beta&t=fhAllXT_E425dDSAv6gmcE4lHg8lXtcDPjzkgtR583I',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C560BAQHsw7AY4gpqtA/company-logo_200_200/0/1520094430371?e=1660780800&v=beta&t=hsNYpD8QJXMzMyq7U-8EEjLfSOA50X2W58aydHNC148',
          CompanyName: 'Highdatanet',
          Linkedin:
            'https://www.linkedin.com/in/adri%C3%A1n-garz%C3%B3n-gallardo-14652b146/'
        },
        {
          Name: 'Daniel Matos',
          Description: this.$t('Testimonies.Daniel.Description'),
          Role: this.$t('Testimonies.Daniel.Role'),
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQG515GtTsvAzw/profile-displayphoto-shrink_800_800/0/1587200901471?e=1658361600&v=beta&t=HPsAxbusDKFbH7jXpVGNOzSd8L0fLyGGrZRy8Cgkd60',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C560BAQEfnBoZ7Woazw/company-logo_200_200/0/1570529547773?e=1660780800&v=beta&t=rfbjWHJlBt0DjidRxB_FV4Dw__jtZkTwEJYuYECKrKU',
          CompanyName: 'Medicare',
          Linkedin: 'https://www.linkedin.com/in/daniel-matos-63b096130/'
        },
        {
          Name: 'Deyson Santana',
          Description: this.$t('Testimonies.Deyson.Description'),
          Role: this.$t('Testimonies.Deyson.Role'),
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHlPfgxflimKg/profile-displayphoto-shrink_800_800/0/1615164341920?e=1658361600&v=beta&t=KYOFo6MgzsLBA-Wk_oJJrWVKytTMorl-jpa6fTwjrQE',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C4D0BAQEuMl0YuhXeaA/company-logo_200_200/0/1599588212232?e=1660780800&v=beta&t=KPu3erpxxLnZnd1k-NfuOQZ068O2rdHyvvc1O69j2dk',
          CompanyName: 'Viveendo Bem',
          Linkedin: 'https://www.linkedin.com/in/deyson-santana-b4322a149/'
        },
        {
          Name: 'Adriano Santos',
          Description: this.$t('Testimonies.Adriano.Description'),
          Role: this.$t('Testimonies.Adriano.Role'),
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQH6siK40N069g/profile-displayphoto-shrink_800_800/0/1589061885665?e=1658361600&v=beta&t=5UFySIhEJ6Z6qPMoTYPUCl1N3hBET8iGamuSfQ8xTw4',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C4E0BAQGkQsm5svygvA/company-logo_200_200/0/1578411059070?e=1660780800&v=beta&t=8-aQw4T6EQjvjUe-KdGL7SOJgY3vDyrhSrumuEz7FFQ',
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
