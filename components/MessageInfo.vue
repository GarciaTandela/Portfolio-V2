<template>
  <v-snackbar
    v-model="isVisible"
    class="message"
    :color="messageType == 'success' ? '#259f9a' : 'error'"
  >
    <v-icon v-show="messageType == 'success'" class="hidden-md-and-down"
      >email</v-icon
    >
    <span class="ml-4 text-justify">{{ messageInfo }}</span>
    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        icon
        x-small
        v-bind="attrs"
        @click="isVisible = false"
      >
        <v-icon>highlight_off</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean
    },
    type: {
      type: String,
      required: true,
      default: ''
    },
    message: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.isActive
      },
      set(value) {
        this.$emit('isVisible', value)
      }
    },
    messageType: {
      get() {
        return this.type
      }
    },
    messageInfo: {
      get() {
        return this.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  @include text-description($font-size: 14px, $text-color: $secondary-color);
}
</style>
