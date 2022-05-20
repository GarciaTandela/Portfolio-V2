<template>
  <v-container>
    <Hero id="home"></Hero>
    <AboutMe id="about"></AboutMe>
    <Services id="service"></Services>
    <Skills id="skills"></Skills>
    <Portfolio id="portfolio"></Portfolio>
    <Testimonies id="testimonies"></Testimonies>
    <Contact id="contact"></Contact>
  </v-container>
</template>

<script>
import Hero from './Hero.vue'
import AboutMe from './AboutMe.vue'
import Services from './Services.vue'
import Skills from './Skills.vue'
import Portfolio from './Portfolio.vue'
import Testimonies from './Testimonies.vue'
import Contact from './Contact.vue'
export default {
  components: {
    Hero,
    AboutMe,
    Services,
    Skills,
    Portfolio,
    Testimonies,
    Contact
  }
}
</script>
