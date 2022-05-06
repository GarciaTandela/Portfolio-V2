<template>
  <v-app>
    <Header></Header>
    <v-main class="theme-color">
      <BasePortfolio></BasePortfolio>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
import BasePortfolio from '~/components/BasePortfolio.vue'
export default {
  components: { Header, BasePortfolio }
}
</script>

<style lang="scss" scoped>
.theme-color {
  background-color: $body-background-color;
}
</style>
