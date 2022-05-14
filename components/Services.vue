<template>
  <v-row justify="center">
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">My services</p>
    </v-col>
    <v-col cols="3">
      <v-card
        color="#35455c"
        elevation="6"
        max-width="350"
        height="290"
        max-height="320"
      >
        <v-card-subtitle class="mb-n5 text-center">
          <v-icon size="80" color="#7be8d6"
            >mdi-handshake</v-icon
          ></v-card-subtitle
        >
        <v-card-title
          ><label class="mx-auto service-title"
            >IT Consulting</label
          ></v-card-title
        >
        <v-card-text class="text-justify">
          <label class="description-color"
            >Outsourcing of strategic IT services, so that your company can
            benefit from specific technical IT specialties, which can assist in
            project planning, decision making and monitoring of all
            activities.</label
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card
        color="#35455c"
        elevation="6"
        max-width="350"
        height="290"
        max-height="320"
      >
        <v-card-subtitle class="mb-n5 text-center">
          <v-icon size="80" color="#e21f71">mdi-web</v-icon></v-card-subtitle
        >
        <v-card-title
          ><label class="mx-auto service-title"
            >Web Development</label
          ></v-card-title
        >
        <v-card-text class="text-justify">
          <label class="description-color"
            >I develop sophisticated websites like Ecommerce, Blog, Web
            Applications and others for your company or product that will take
            your business to a different level.</label
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card
        color="#35455c"
        elevation="6"
        max-width="350"
        height="290"
        max-height="320"
      >
        <v-card-subtitle class="mb-n5 text-center">
          <v-icon size="80" color="#fc6b06"
            >mdi-cellphone-cog</v-icon
          ></v-card-subtitle
        >
        <v-card-title
          ><label class="mx-auto service-title"
            >Mobile Development</label
          ></v-card-title
        >
        <v-card-text class="text-justify">
          <label class="description-color"
            >Have your own mobile app on all platforms (iOS and Android) so your
            customers can order your products or services wherever they go and
            share it with others.</label
          >
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card
        color="#35455c"
        elevation="6"
        max-width="350"
        height="290"
        max-height="320"
      >
        <v-card-subtitle class="mb-n5 text-center">
          <v-icon size="80" color="#00aeff"
            >mdi-monitor</v-icon
          ></v-card-subtitle
        >
        <v-card-title
          ><label class="mx-auto service-title"
            >Desktop Development</label
          ></v-card-title
        >
        <v-card-text class="text-justify">
          <label class="description-color"
            >It is essential to have an enterprise computer software in your
            company that is reliable, secure and manageable so that you can
            solve internal problems without difficulty.</label
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.section-title {
  @include text-title;
}

.service-title {
  @include text-title($font-size: 20px);
}

.description-color {
  color: $secondary-color;
}

.title-margin-top {
  margin-top: 200px;
}
</style>
