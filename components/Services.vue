<template>
  <v-row>
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">My services</p>
    </v-col>
    <v-col
      v-for="(Service, key) in Services"
      :key="key"
      cols="12"
      sm="6"
      lg="3"
    >
      <v-card color="#35455c" elevation="6" height="290" max-height="320">
        <v-card-subtitle class="mb-n5 text-center">
          <v-icon size="80" :color="Service.Color">{{
            Service.Icon
          }}</v-icon></v-card-subtitle
        >
        <v-card-title
          ><label class="mx-auto service-title">{{
            Service.Name
          }}</label></v-card-title
        >
        <v-card-text class="text-justify">
          <p class="description-color">
            {{ Service.Description }}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Services: [
        {
          Name: 'IT Consulting',
          Icon: 'mdi-handshake',
          Description:
            'Outsourcing of strategic IT services, so that your company can benefit from specific technical IT specialties, which can assist in project planning, decision making and monitoring of all activities.',
          Color: '#7be8d6'
        },
        {
          Name: 'Web Development',
          Icon: 'mdi-web',
          Description:
            'I develop sophisticated websites like Ecommerce, Blog, Web Applications and others for your company or product that will take your business to a different level.',
          Color: '#e21f71'
        },
        {
          Name: 'Mobile Development',
          Icon: 'mdi-cellphone-cog',
          Description:
            'Have your own mobile app on all platforms (iOS and Android) so your customers can order your products or services wherever they go and share it with others.',
          Color: '#fc6b06'
        },
        {
          Name: 'Desktop Development',
          Icon: 'mdi-monitor',
          Description:
            'It is essential to have an enterprise computer software in your company that is reliable, secure and manageable so that you can solve internal problems without difficulty.',
          Color: '#00aeff'
        }
      ]
    }
  }
}
</script>

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
  @include smartphone-screens() {
    margin-top: 100px;
  }
}
</style>
