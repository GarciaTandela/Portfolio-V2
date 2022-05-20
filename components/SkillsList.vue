<template>
  <v-card
    class="skill-scrollbar"
    color="#112240"
    elevation="6"
    height="300"
    tile
  >
    <v-row>
      <v-col v-for="(Skill, key) in skills" :key="key" cols="4" sm="2" lg="2">
        <v-card-title>
          <template v-if="Skill.Type == 'icon'">
            <v-icon class="mx-auto" size="50" :color="Skill.Color">{{
              Skill.Src
            }}</v-icon>
          </template>
          <template v-else>
            <v-img
              class="mx-auto"
              eager
              max-width="48"
              :src="Skill.Src"
              :lazy-src="Skill.Src"
              alt="Garcia Tandela Skills"
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
          </template>
        </v-card-title>
        <v-card-subtitle class="text-center skill-item mt-n2">
          <label>{{ Skill.Name }}</label>
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-item {
  @include text-list;
}

.skill-scrollbar {
  overflow: auto;
  overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #8891b0;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
