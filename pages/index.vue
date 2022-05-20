<template>
  <v-app>
    <Header></Header>
    <v-main class="theme-color">
      <Sidebar></Sidebar>
      <BasePortfolio></BasePortfolio>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Header from '~/components/Header.vue'
import BasePortfolio from '~/components/BasePortfolio.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Header, BasePortfolio, Footer, Sidebar }
}
</script>

<style lang="scss" scoped>
.theme-color {
  background-color: $body-background-color;
}
</style>
