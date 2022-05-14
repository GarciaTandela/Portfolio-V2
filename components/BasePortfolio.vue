<template>
  <v-container>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Services></Services>
  </v-container>
</template>

<script>
import Hero from './Hero.vue'
import AboutMe from './AboutMe.vue'
import Services from './Services.vue'
export default {
  components: { Hero, AboutMe, Services }
}
</script>
