<template>
  <v-row class="py-3" justify="center">
    <v-col cols="12">
      <p class="section-title text-center mt-16 mb-6">About Me</p>
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
        Hello, my name is Garcia Tandela (also known as Yannick), i'm a
        professional and talented Software Engineer that loves to face new
        challenges and develop solutions to help the world improve through
        digital transformation.
      </p>
      <p class="description text-justify">
        Going to the present day i have had the privilege of working on projects
        with companies around the world such as a
        <span class="highlight-text">real estate startup</span>,
        <span class="highlight-text">a digital marketing agency</span> and a
        project for
        <span class="highlight-text"
          >managing clinics and client relationships (CRM) </span
        >.
      </p>
      <p class="description text-justify">
        Nowadays my main focus is to ensure that projects have a well defined
        software architecture facilitating teamwork, maintenance, testing and
        scalability because i love being able to be involved in the entire
        process of a project dealing with
        <span class="highlight-text">Frontend</span>,
        <span class="highlight-text">Backend</span>,
        <span class="highlight-text">Database</span> and
        <span class="highlight-text">DevOps</span> and also from is elaboration,
        design and finalization.
      </p>
    </v-col>
  </v-row>
</template>

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
