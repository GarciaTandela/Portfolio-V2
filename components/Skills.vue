<template>
  <v-row>
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">{{ $t('Skills.Title') }}</p>
    </v-col>
    <v-col cols="12">
      <v-tabs
        slider-color="#7be8d6"
        background-color="transparent"
        active-class="active-skill"
        :vertical="!$vuetify.breakpoint.mobile"
        :grow="$vuetify.breakpoint.mobile"
        show-arrows
        dark
      >
        <v-tab
          v-for="(Skill, key) in Skills"
          :key="key"
          class="text-none skill-item"
        >
          <v-icon left> {{ Skill.Icon }} </v-icon>
          {{ Skill.Name }}
        </v-tab>

        <v-tab-item>
          <SkillsList :skills="Frontend"></SkillsList>
        </v-tab-item>

        <v-tab-item>
          <SkillsList :skills="Backend"></SkillsList>
        </v-tab-item>

        <v-tab-item>
          <SkillsList :skills="Mobile"></SkillsList>
        </v-tab-item>

        <v-tab-item>
          <SkillsList :skills="Database"></SkillsList>
        </v-tab-item>

        <v-tab-item>
          <SkillsList :skills="DevOps"></SkillsList>
        </v-tab-item>

        <v-tab-item>
          <SkillsList :skills="Testing"></SkillsList>
        </v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { createHelpers } from 'vuex-map-fields'
import SkillsList from './SkillsList.vue'
const { mapFields } = createHelpers({
  getterType: 'skill/getField',
  mutationType: 'skill/updateField'
})
export default {
  components: { SkillsList },
  data() {
    return {
      Skills: [
        {
          Name: 'Frontend',
          Icon: 'mdi-pencil-ruler'
        },
        {
          Name: 'Backend',
          Icon: 'mdi-cog-outline'
        },
        {
          Name: 'Mobile',
          Icon: 'mdi-tablet-cellphone'
        },
        {
          Name: 'Database',
          Icon: 'mdi-database'
        },
        {
          Name: 'DevOps',
          Icon: 'mdi-rocket-launch-outline'
        },
        {
          Name: 'Testing',
          Icon: 'mdi-clipboard-check-outline'
        }
      ]
    }
  },
  computed: {
    ...mapFields({
      Frontend: 'FrontendSkills',
      Backend: 'BackendSkills',
      Mobile: 'MobileSkills',
      Database: 'DatabaseSkills',
      DevOps: 'DevOpSkills',
      Testing: 'TestingSkills'
    })
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

.skill-item {
  @include text-list;
}

.active-skill {
  color: $ternary-color;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: $primary-color;
}
</style>
