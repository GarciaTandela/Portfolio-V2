<template>
  <v-row align="center">
    <v-col cols="6">
      <p class="compliment">HI THERE 👋🏼 I'M</p>
      <p class="name">Garcia Tandela</p>
      <p class="text-uppercase role">Software Engineer</p>
      <p class="description">
        I'm a professional with a full stack development skills<br />
        based in Quebec.
      </p>
      <v-btn class="download-cv text-none mt-3" color="#7be8d6" outlined
        >Download CV</v-btn
      >
    </v-col>
    <v-col cols="6">
      <v-img
        class="mt-12"
        eager
        :src="require('@/assets/files/gummy-coding.svg')"
        :lazy-src="require('@/assets/files/gummy-coding.svg')"
        alt="Developer Image"
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
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.compliment {
  @include text-subtitle($text-color: $secondary-color, $font-size: 18px);
}

.name {
  @include text-title($font-size: 58px);
}

.role {
  @include text-subtitle($text-color: $ternary-color, $font-size: 18px);
}

.description {
  @include text-description;
}

.download-cv {
  @include text-subtitle;
}
</style>
