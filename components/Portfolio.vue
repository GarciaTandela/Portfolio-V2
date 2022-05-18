<template>
  <v-row justify="center">
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">Portfolio</p>
    </v-col>
    <v-col v-for="(Project, key) in Projects" :key="key" cols="4">
      <v-hover v-slot="{ hover }">
        <v-card elevation="6" tile>
          <v-img
            height="490"
            :src="Project.Image"
            :lazy-src="Project.Image"
            :alt="Project.Title"
            :contain="$vuetify.breakpoint.xl"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-1"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-fade-transition>
              <section
                v-if="hover"
                class="hover-background-color d-flex align-center"
                style="height: 100%"
              >
                <section class="mx-auto">
                  <v-card-title
                    ><label class="mx-auto portfolio-title">{{
                      Project.Title
                    }}</label></v-card-title
                  >
                  <v-card-text class="text-justify">
                    <label class="portfolio-description">{{
                      Project.Description
                    }}</label>
                  </v-card-text>
                  <v-row class="mt-2" justify="space-around">
                    <v-btn
                      class="button-option text-none"
                      color="#7be8d6"
                      rounded
                      outlined
                      :href="Project.Website"
                      target="_blank"
                      >Visit portfolio</v-btn
                    >
                    <v-btn
                      v-show="Project.SourceCode !== ''"
                      class="button-option text-none"
                      color="#7be8d6"
                      rounded
                      outlined
                      :href="Project.SourceCode"
                      target="_blank"
                      >Source Code</v-btn
                    >
                  </v-row>
                </section>
              </section>
            </v-fade-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
export default {
  data() {
    return {
      Projects: [
        {
          Title: 'Viveendo Bem',
          Description:
            'Viveendo Bem it is a real estate advertising platform that helps people to advertise and search for properties that meet their needs, offering several search options to make their lives easier.',
          Image: require('@/assets/files/ViveendoBem.png'),
          Website: 'https://viveendo.com.br',
          SourceCode: ''
        },
        {
          Title: 'Highdata Clinic',
          Description:
            'Highdata Clinic is the first management program specialized in clinics, 100% in the cloud and with an Artificial Intelligence engine that helps you automate your day-to-day tasks and processes in the clinic.',
          Image: require('@/assets/files/Highdataclinic.png'),
          Website: 'https://www.highdataclinic.com/',
          SourceCode: ''
        },
        {
          Title: 'HighdataNet',
          Description:
            'Highdatanet is a digital marketing agency based in Spain, Valencia that helps clients around the world to turn ideas into accomplishments, guaranteeing an excellent result from a technical point of view.',
          Image: require('@/assets/files/Highdatanet.png'),
          Website: 'https://highdatanet.com/',
          SourceCode: ''
        },
        {
          Title: 'My Portfolio',
          Description:
            'Personal portfolio with information about some of my projects and goals.',
          Image: require('@/assets/files/Portfolio.png'),
          Website: 'https://garciatandela.com/',
          SourceCode: 'https://github.com/YannickSilva/Portfolio-V2'
        },
        {
          Title: 'Paradise Hotel',
          Description:
            'Hotel website created for tourists (on vacation) and native people in my country.',
          Image: require('@/assets/files/HotelParaiso.png'),
          Website: 'https://paradisehotel.netlify.app/',
          SourceCode: 'https://github.com/YannickSilva/hotelparaiso'
        },
        {
          Title: 'App Sketch',
          Description:
            'Sketch of a social network designed for cross mobile platform.',
          Image: require('@/assets/files/Hooked.png'),
          Website:
            'https://xd.adobe.com/view/0181d23e-181b-4499-5c37-ac9136b173b3-77b0/',
          SourceCode: 'https://github.com/YannickSilva/hookedwireframe'
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
}

.button-option {
  @include text-subtitle;
}

.portfolio-title {
  @include text-title($font-size: 25px);
}

.portfolio-description {
  color: $secondary-color;
}

.hover-background-color {
  background-color: $terciary-color;
}
</style>
