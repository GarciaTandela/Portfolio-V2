<template>
  <v-row class="py-3" justify="center">
    <v-col cols="12">
      <p class="section-title text-center mt-16 mb-6">
        {{ $t('AboutMe.Title') }}
      </p>
    </v-col>
    <div>
      <v-img
        class="rounded"
        width="300"
        eager
        :src="require('@/assets/files/profile2.jpg')"
        :lazy-src="require('@/assets/files/profile2.jpg')"
        alt="Garcia Tandela Picture"
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
    </div>
    <v-col class="mt-3 mt-lg-n3 ml-lg-2" cols="12" lg="6" xl="5">
      <p class="description text-justify">
        {{ $t('AboutMe.Description1') }}
      </p>
      <p class="description text-justify">
        {{ $t('AboutMe.Description2') }}
        <span class="highlight-text">{{ $t('AboutMe.Description3') }}</span
        >, <span class="highlight-text">{{ $t('AboutMe.Description4') }}</span>
        {{ $t('AboutMe.Description5') }}
        <span class="highlight-text">{{ $t('AboutMe.Description6') }} </span>.
      </p>
      <p class="description text-justify">
        {{ $t('AboutMe.Description7') }}
        <span class="highlight-text">Frontend</span>,
        <span class="highlight-text">Backend</span>,
        <span class="highlight-text">Database</span>
        {{ $t('AboutMe.Description8') }}
        <span class="highlight-text">DevOps</span>
        {{ $t('AboutMe.Description9') }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Description2: this.$t('AboutMe.Description2'),
      Description3: this.$t('AboutMe.Description3')
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  @include text-title;
}

.description {
  @include text-description;
}

.highlight-text {
  color: $ternary-color;
}
</style>
