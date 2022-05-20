<template>
  <v-row>
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">Testimonies</p>
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
          Description:
            'I have the opportunity to share the Viveendo Bem project with Garcia Tandela since the beginning, exactly 2 years ago. Great companion, with technical knowledge above the labor average. As CEO & Product Designer, I admire the potential to control and solve moments of high demand and pressure. It is undoubtedly a privilege for Viveendo Bem to have such a profile in our squad.',
          Role: 'Product Designer at Banco Santander',
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQEZwrDFogeh6A/profile-displayphoto-shrink_800_800/0/1643027191195?e=1658361600&v=beta&t=3yxp1mZ6GcOPjzvFONDH2e_N4UFFS5hOQ6qDjp9cvMc',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C4D0BAQEZztIMYNiAsg/company-logo_200_200/0/1635147573800?e=1660780800&v=beta&t=UYEvqP_YmwOyIdbkZ6zID4Mmb9ExSi9TM8ejhL51D-g',
          CompanyName: 'Banco Santander',
          Linkedin: 'https://www.linkedin.com/in/cassio-brito/'
        },
        {
          Name: 'David Botella',
          Description:
            'Garcia Tandela is a great professional in the field of computing. After working on various projects. hand in hand, it is worth highlighting their great power of understanding, analysis and execution in each of their stages. Awesome Fullstack MEVN developer and analyst. He perfectly masters languages ​​such as JS, PHP. C#, as well as relational and non-relational databases.',
          Role: 'Project Manager at Orizon',
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
          Description:
            'Garcia is an excellent professional. It was quite a discovery to meet him and I can affirm that he is one of the most decisive programmers I have ever worked with. its involvement in every aspect related to development and scalability as well as future repercussions of each action should be highlighted. A very involved, responsible, motivated professional with a great future ahead of him.',
          Role: 'CEO & Founder at Highdatanet',
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
          Description:
            'Garcia is a super nice guy that I have the opportunity to share thoughts and solutions at Viveendo Bem. A very dedicated professional and always attentive to the smallest details. Full-stack with solid and advanced knowledge in NodeJs and VueJs. As a software development team supervisor, I give top marks for the simplicity and ease of explaining what to do down to the smallest detail.',
          Role: 'FullStack Developer at Medicare',
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQG515GtTsvAzw/profile-displayphoto-shrink_800_800/0/1587200901471?e=1658361600&v=beta&t=HPsAxbusDKFbH7jXpVGNOzSd8L0fLyGGrZRy8Cgkd60',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C560BAQEfnBoZ7Woazw/company-logo_200_200/0/1570529547773?e=1660780800&v=beta&t=rfbjWHJlBt0DjidRxB_FV4Dw__jtZkTwEJYuYECKrKU',
          CompanyName: 'Medicare',
          Linkedin: 'https://www.linkedin.com/in/daniel-matos-63b096130/'
        },
        {
          Name: 'Deyson Santana',
          Description:
            'lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
          Role: 'Comercial at Viveendo Bem',
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHlPfgxflimKg/profile-displayphoto-shrink_800_800/0/1615164341920?e=1658361600&v=beta&t=KYOFo6MgzsLBA-Wk_oJJrWVKytTMorl-jpa6fTwjrQE',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C4D0BAQEuMl0YuhXeaA/company-logo_200_200/0/1599588212232?e=1660780800&v=beta&t=KPu3erpxxLnZnd1k-NfuOQZ068O2rdHyvvc1O69j2dk',
          CompanyName: 'Viveendo Bem',
          Linkedin: 'https://www.linkedin.com/in/deyson-santana-b4322a149/'
        },
        {
          Name: 'Adriano Santos',
          Description:
            'Garcia, a professional out of the box, dedicated and resilient. I have the opportunity to participate with him in a great project. With skills and full mastery in what develops the construction journey and the goals to be achieved are simple with its performance. He is always evolving and looking for excellence in what he does.',
          Role: 'Cloud | SysAdmin | DevOps at UniFTC',
          Picture:
            'https://media-exp1.licdn.com/dms/image/C4D03AQH6siK40N069g/profile-displayphoto-shrink_800_800/0/1589061885665?e=1658361600&v=beta&t=5UFySIhEJ6Z6qPMoTYPUCl1N3hBET8iGamuSfQ8xTw4',
          CompanyLogo:
            'https://media-exp1.licdn.com/dms/image/C4E0BAQGkQsm5svygvA/company-logo_200_200/0/1578411059070?e=1660780800&v=beta&t=8-aQw4T6EQjvjUe-KdGL7SOJgY3vDyrhSrumuEz7FFQ',
          CompanyName: 'UniFTC',
          Linkedin: 'https://www.linkedin.com/in/adriano-santos-91228921/'
        }
      ]
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
