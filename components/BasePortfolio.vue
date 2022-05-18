<template>
  <v-container>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Services></Services>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Testimonies></Testimonies>
  </v-container>
</template>

<script>
import Hero from './Hero.vue'
import AboutMe from './AboutMe.vue'
import Services from './Services.vue'
import Skills from './Skills.vue'
import Portfolio from './Portfolio.vue'
import Testimonies from './Testimonies.vue'
export default {
  components: { Hero, AboutMe, Services, Skills, Portfolio, Testimonies }
}
</script>
