<template>
  <v-row class="mb-12" justify="center">
    <v-col class="title-margin-top" cols="12">
      <p class="section-title text-center">Contact</p>
    </v-col>
    <v-col cols="12" lg="6">
      <v-card color="transparent" flat>
        <v-card-text>
          <p class="contact-description text-justify">
            Do you want to hire me, talk about a project or rquest one of my
            services ? Don't hesitate to contact me using the form below:
          </p>
          <v-form @submit.prevent="sendMessage">
            <v-text-field
              v-model.trim="Name"
              class="input"
              outlined
              dark
              :height="48"
              :error-messages="NameErrors"
              :disabled="isLoading"
              placeholder="Name"
              @keyup.enter="sendMessage"
              @input="$v.Name.$touch()"
              @blur="$v.Name.$touch()"
              @keypress="validateNameInput($event)"
            >
            </v-text-field>
            <v-text-field
              v-model.trim="Email"
              class="input"
              inputmode="email"
              type="email"
              outlined
              dark
              :height="48"
              :error-messages="EmailErrors"
              :disabled="isLoading"
              placeholder="Email"
              @keyup.enter="sendMessage"
              @input="$v.Email.$touch()"
              @blur="$v.Email.$touch()"
              @keypress="validateEmailInput($event)"
            >
            </v-text-field>
            <v-textarea
              v-model="Message"
              class="input"
              outlined
              dark
              :height="152"
              :counter="1000"
              :error-messages="MessageErrors"
              :disabled="isLoading"
              placeholder="Your message"
              @keyup.enter="sendMessage"
              @input="$v.Message.$touch()"
              @blur="$v.Message.$touch()"
            >
            </v-textarea>
            <v-btn
              class="send-message text-none mt-3"
              color="#7be8d6"
              height="48"
              block
              outlined
              :loading="isLoading"
              @click="sendMessage"
              >Send message</v-btn
            >
          </v-form>
          <p class="contact-description mt-6">
            or use some of my social media in the footer:
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <MessageInfo
      :is-active="isActive"
      :type="MesssageType"
      :message="MessageInfo"
      @isVisible="isActive = $event"
    ></MessageInfo>
  </v-row>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import MessageInfo from './MessageInfo.vue'
export default {
  components: { MessageInfo },
  validations: {
    Name: { required, minLength: minLength(5) },
    Email: { required, email },
    Message: { required, minLength: minLength(10), maxLength: maxLength(1000) }
  },
  data() {
    return {
      Name: '',
      Email: '',
      Message: '',
      isLoading: false,
      isActive: false,
      MesssageType: '',
      MessageInfo: ''
    }
  },
  computed: {
    NameErrors() {
      const errors = []
      if (!this.$v.Name.$dirty) return errors
      !this.$v.Name.required && errors.push('O nome é obrigatório.')
      !this.$v.Name.minLength &&
        errors.push('O nome deve ter no mínimo 5 caracteres.')
      return errors
    },
    EmailErrors() {
      const errors = []
      if (!this.$v.Email.$dirty) return errors
      !this.$v.Email.required && errors.push('O email é obrigatório.')
      !this.$v.Email.email && errors.push('Insira um email válido.')
      return errors
    },
    MessageErrors() {
      const errors = []
      if (!this.$v.Message.$dirty) return errors
      !this.$v.Message.required && errors.push('A mensagem é obrigatório.')
      !this.$v.Message.minLength &&
        errors.push('A mensagem deve ter no mínimo 10 caracteres.')
      !this.$v.Message.maxLength &&
        errors.push('A mensagem deve ter no máximo 1000 caracteres.')
      return errors
    }
  },
  methods: {
    async sendMessage() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.isActive = false
        this.isLoading = true
        try {
          await this.$axios.$post('/api/sendmail', {
            Name: this.Name,
            Email: this.Email,
            Message: this.Message
          })
          this.$v.$reset()
          this.Name = ''
          this.Email = ''
          this.Message = ''
          this.isLoading = false
          this.MesssageType = 'success'
          this.MessageInfo = 'Mensagem enviada com sucesso.'
          this.isActive = true
        } catch (error) {
          this.isLoading = false
          this.MesssageType = 'error'
          this.isActive = true
          this.MessageInfo =
            'Desculpe, não podemos realizar esta ação no momento. Por favor, tente novamente mais tarde.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  @include text-title;
}

.title-margin-top {
  margin-top: 200px;
  @include smartphone-screens() {
    margin-top: 100px;
  }
}

.send-message {
  @include text-subtitle;
}

.contact-description {
  @include text-description($text-color: $secondary-color);
}

.input {
  @include text-description($text-color: $secondary-color);
}

.input >>> input {
  @include text-description($text-color: $secondary-color);
}
</style>
