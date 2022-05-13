<template>
  <v-container>
    <Hero></Hero>
    <AboutMe></AboutMe>
  </v-container>
</template>

<script>
import AboutMe from './AboutMe.vue'
import Hero from './Hero.vue'
export default {
  components: { Hero, AboutMe }
}
</script>
