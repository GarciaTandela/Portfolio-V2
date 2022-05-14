<template>
  <v-container>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Services></Services>
    <Skills></Skills>
  </v-container>
</template>

<script>
import Hero from './Hero.vue'
import AboutMe from './AboutMe.vue'
import Services from './Services.vue'
import Skills from './Skills.vue'
export default {
  components: { Hero, AboutMe, Services, Skills }
}
</script>
